import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Message sent (simulation)')
    }

    return (
        <section id="contact" className="min-h-screen flex items-center text-white relative z-10 py-32">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-light mb-12 tracking-tighter">
                            Let's<br />Talk.
                        </h2>
                        <div className="space-y-4 text-xl font-light text-gray-400">
                            <p>Business Analytics</p>
                            <p>Digital Strategy</p>
                            <p>Consulting</p>
                        </div>
                        <div className="mt-12 flex gap-8">
                            <a href="mailto:ewgribar@crimson.ua.edu" className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest text-sm border-b border-white pb-1">Email</a>
                            <a href="https://www.linkedin.com/in/evangribar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest text-sm border-b border-white pb-1">LinkedIn</a>
                        </div>
                    </div>

                    <div className="p-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl">
                        <form onSubmit={handleSubmit} className="space-y-12">
                            <div className="group">
                                <label className="block text-sm uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-white transition-colors">What's your name?</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-gray-800 py-4 text-2xl focus:outline-none focus:border-white transition-colors text-white placeholder-gray-800"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="group">
                                <label className="block text-sm uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-white transition-colors">Your email</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-gray-800 py-4 text-2xl focus:outline-none focus:border-white transition-colors text-white placeholder-gray-800"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="group">
                                <label className="block text-sm uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-white transition-colors">Tell me about your project</label>
                                <textarea
                                    rows="1"
                                    className="w-full bg-transparent border-b border-gray-800 py-4 text-2xl focus:outline-none focus:border-white transition-colors text-white placeholder-gray-800 resize-none h-auto"
                                    placeholder="I need a..."
                                    onInput={(e) => {
                                        e.target.style.height = 'auto';
                                        e.target.style.height = e.target.scrollHeight + 'px';
                                    }}
                                />
                            </div>
                            <button className="text-2xl font-light border-b border-transparent hover:border-white transition-all pb-1">
                                Send Message &rarr;
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
