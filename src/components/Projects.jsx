import { motion } from 'framer-motion'
import { useState } from 'react'

// Generic "Locked" projects
const projects = [
    { id: 1, title: 'Project One', category: 'Locked', color: 'from-gray-800 to-gray-900' },
    { id: 2, title: 'Project Two', category: 'Locked', color: 'from-gray-800 to-gray-900' },
    { id: 3, title: 'Project Three', category: 'Locked', color: 'from-gray-800 to-gray-900' },
    { id: 4, title: 'Project Four', category: 'Locked', color: 'from-gray-800 to-gray-900' },
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 text-white relative z-10">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-5xl font-bold mb-16 text-center tracking-tight"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Current Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="overflow-hidden rounded-lg mb-6 bg-black/60 backdrop-blur-md border border-white/5 aspect-[4/3] relative flex items-center justify-center">
                                {/* Locked Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                                {/* Lock Icon & Text */}
                                <div className="text-center z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-12 h-12 mx-auto mb-4 text-gray-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <span className="text-xl font-light tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors">
                                        Coming Soon
                                    </span>
                                </div>
                            </div>

                            <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                                <h3 className="text-2xl font-light text-gray-500 group-hover:text-gray-300 transition-colors">{project.title}</h3>
                                <p className="text-gray-600 text-xs tracking-widest uppercase">Locked</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
