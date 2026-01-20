import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom' // We installed this, though might stick to simple hash links for one-page feel

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="text-2xl font-bold text-white tracking-tighter">
                    EG<span className="text-[#9E1B32]">.</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    {['About', 'Projects', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wide cursor-pointer bg-transparent border-none focus:outline-none"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
}
