import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        const updateMousePosition = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener('mousemove', updateMousePosition)
        return () => window.removeEventListener('mousemove', updateMousePosition)
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] border border-[#E34234] mix-blend-multiply"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16
            }}
            transition={{
                type: 'spring',
                stiffness: 800,
                damping: 40,
                mass: 0.1
            }}
        />
    )
}
