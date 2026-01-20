import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { EffectComposer, Bloom, Noise, DepthOfField } from '@react-three/postprocessing'
import * as THREE from 'three'

function FlowParticles({ count = 2000 }) {
    const mesh = useRef()
    const dummy = useMemo(() => new THREE.Object3D(), [])
    const dotColor = useMemo(() => new THREE.Color(), [])

    // Access viewport for accurate mouse mapping
    const { viewport } = useThree()

    // Initialize particles
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            // Spread across a wider area for global coverage
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 10
            const speed = 0.01 + Math.random() / 200
            const x = (Math.random() - 0.5) * 50 // Wider spread X
            const y = (Math.random() - 0.5) * 30 // Wider spread Y
            const z = (Math.random() - 0.5) * 10 // Depth

            temp.push({ t, factor, speed, x, y, z, vx: 0, vy: 0, vz: 0 })
        }
        return temp
    }, [count])

    useFrame((state) => {
        if (!mesh.current) return

        // Mouse influence - mapped to world space accurately
        const { x: mouseX, y: mouseY } = state.pointer

        // Convert normalized mouse (-1 to 1) to world coordinates
        const worldMouseX = mouseX * (viewport.width / 2)
        const worldMouseY = mouseY * (viewport.height / 2)

        particles.forEach((particle, i) => {
            let { t, factor, speed, x, y, z } = particle

            // Basic Flow Motion - Slower
            t = particle.t += speed / 4

            // Calculate oscillation position
            const oscX = x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10
            const oscY = y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10
            const oscZ = z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10

            // Interaction Physics
            // Distance from particle current position to mouse
            const dx = worldMouseX - oscX
            const dy = worldMouseY - oscY
            const dist = Math.sqrt(dx * dx + dy * dy)

            // 1. Mouse Repulsion (Interactive) - Subtle/Gentle
            const interactionRadius = 5

            if (dist < interactionRadius) {
                const force = (interactionRadius - dist) / interactionRadius
                const angle = Math.atan2(dy, dx)

                // Push away
                particle.vx -= Math.cos(angle) * force * 0.15
                particle.vy -= Math.sin(angle) * force * 0.15
            }

            // 2. Text/Center Repulsion (Static) - AGGRESSIVE
            // Keeps particles away from the center where the name lies
            const distCenter = Math.sqrt(oscX * oscX + oscY * oscY)
            const textRadius = 12 // Huge radius to force a hole

            if (distCenter < textRadius) {
                const force = (textRadius - distCenter) / textRadius
                const angle = Math.atan2(oscY, oscX)

                // Push away VERY hard
                particle.vx += Math.cos(angle) * force * 0.2
                particle.vy += Math.sin(angle) * force * 0.2
            }

            // Friction / Return to flow
            particle.vx *= 0.94
            particle.vy *= 0.94

            // Apply velocity
            const finalX = oscX + particle.vx
            const finalY = oscY + particle.vy
            const finalZ = oscZ

            dummy.position.set(finalX, finalY, finalZ)

            // Scale based on depth/action
            const s = Math.cos(t)
            // Let's just keep breathing
            dummy.scale.set(1, 1, 1).multiplyScalar(Math.max(0.5, Math.abs(s)))

            dummy.rotation.set(s * 5, s * 5, s * 5)
            dummy.updateMatrix()

            mesh.current.setMatrixAt(i, dummy.matrix)

            // Color logic
            // Heatmap style: Crimson edges, White hot center
            // Modify color based on velocity for interaction feedback
            const velocity = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)

            if (velocity > 0.1) {
                dotColor.set('#ffffff') // White hot when moving fast (interacting)
            } else {
                const distFromCenter = Math.sqrt(finalX * finalX + finalY * finalY)
                if (distFromCenter > 15) dotColor.set('#590d1c') // Darker Crimson (background)
                else if (distFromCenter > 8) dotColor.set('#9E1B32') // Crimson
                else dotColor.set('#cccccc') // Off-white core (less severe)
            }

            mesh.current.setColorAt(i, dotColor)
        })

        mesh.current.instanceMatrix.needsUpdate = true
        mesh.current.instanceColor.needsUpdate = true
    })

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <circleGeometry args={[0.04]} />
            <meshBasicMaterial transparent opacity={0.4} blending={THREE.AdditiveBlending} />
        </instancedMesh>
    )
}

export default function Background3D() {
    return (
        <div className="fixed inset-0 z-[-1] bg-black">
            <Canvas
                camera={{ position: [0, 0, 20], fov: 45 }}
                gl={{ alpha: false, antialias: false }}
                eventSource={document.body}
                eventPrefix="client"
            >
                <color attach="background" args={['#050505']} />

                <FlowParticles count={2000} />

                <EffectComposer disableNormalPass>
                    <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={4} height={480} />
                    <Bloom luminanceThreshold={0.5} mipmapBlur intensity={1.2} radius={0.5} />
                    <Noise opacity={0.03} />
                </EffectComposer>
            </Canvas>
        </div>
    )
}
