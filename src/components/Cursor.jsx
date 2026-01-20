import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
    const [hidden, setHidden] = useState(false)
    const [clicked, setClicked] = useState(false)

    // Use MotionValues for high-performance updates without re-renders
    const mouseX = useMotionValue(-100)
    const mouseY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700 }
    const cursorX = useSpring(mouseX, springConfig)
    const cursorY = useSpring(mouseY, springConfig)

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX - 16)
            mouseY.set(e.clientY - 16)
        }

        const mEnter = () => setHidden(false)
        const mLeave = () => setHidden(true)
        const mDown = () => setClicked(true)
        const mUp = () => setClicked(false)

        window.addEventListener('mousemove', moveCursor)
        document.addEventListener('mouseenter', mEnter)
        document.addEventListener('mouseleave', mLeave)
        document.addEventListener('mousedown', mDown)
        document.addEventListener('mouseup', mUp)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            document.removeEventListener('mouseenter', mEnter)
            document.removeEventListener('mouseleave', mLeave)
            document.removeEventListener('mousedown', mDown)
            document.removeEventListener('mouseup', mUp)
        }
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            style={{
                x: cursorX,
                y: cursorY,
            }}
            animate={{
                scale: clicked ? 0.8 : 1,
                opacity: hidden ? 0 : 1,
            }}
        >
            <div className={`w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${clicked ? 'scale-150' : ''}`} />
        </motion.div>
    )
}
