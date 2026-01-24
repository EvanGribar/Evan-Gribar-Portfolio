import { motion } from 'framer-motion'

const featuredProject = {
    title: 'MagicPark AI',
    subtitle: 'AI-powered theme park intelligence suite',
    description:
        'Live wait times, predictive crowd models, dynamic route optimization, and supabase-backed upgrades that help visitors reclaim hours in the park.',
    tags: ['AI Wait Time Predictions', 'Crowd Heat Maps', 'Dynamic Trip Optimizer', 'Supabase Integration'],
    metrics: [
        { label: 'Avg time saved', value: '4.2h' },
        { label: 'Prediction accuracy', value: '95%' },
        { label: 'Happy travelers', value: '50k+' },
    ],
    link: 'https://evangribar.github.io/MagicParkAI/',
}

const roadmapProjects = [
    { id: 1, title: 'Nexus Finance', note: 'All in one wallet, payment and budgeting platform.' },
    { id: 2, title: 'Coming Soon', note: 'Stay tuned for new projects and developments.' },
    { id: 3, title: 'Coming Soon', note: 'Stay tuned for new projects and developments.' },
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 text-white relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">Current Projects</p>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Building real-world tools</h2>
                    <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto">
                        Product work that blends strategy, AI, and experience design. Featured below; more shipping soon.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 items-stretch">
                    <motion.div
                        className="lg:col-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b132b] via-[#1b2a4a] to-[#9E1B32] border border-white/10 shadow-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                    >
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#ffffff,transparent_25%),radial-gradient(circle_at_80%_0%,#ffffff,transparent_20%)]" />
                        <div className="relative p-6 md:p-10 space-y-6 md:space-y-8">
                            <div className="flex items-center gap-3 md:gap-4">
                                <span className="px-3 py-1 text-[10px] md:text-xs uppercase tracking-[0.2em] bg-white/10 border border-white/20 rounded-full text-gray-100">Featured</span>
                                <p className="text-xs md:text-sm text-gray-200/80">Live product</p>
                            </div>
                            <div className="space-y-3">
                                <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-300/80">{featuredProject.subtitle}</p>
                                <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">{featuredProject.title}</h3>
                                <p className="text-base md:text-lg text-gray-200/90 max-w-3xl">{featuredProject.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-2.5 md:gap-3">
                                {featuredProject.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-2 rounded-full text-xs md:text-sm bg-white/10 border border-white/10 text-gray-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 text-center">
                                {featuredProject.metrics.map((item) => (
                                    <div key={item.label} className="p-4 rounded-xl bg-white/5 border border-white/10">
                                        <p className="text-xl md:text-2xl font-semibold text-white">{item.value}</p>
                                        <p className="text-[11px] md:text-xs uppercase tracking-[0.12em] text-gray-300 mt-1 leading-snug break-words">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                                <a
                                    href={featuredProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-black text-sm font-semibold uppercase tracking-[0.2em] shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
                                >
                                    View MagicPark AI
                                    <span aria-hidden>→</span>
                                </a>
                                <a
                                    href={`${featuredProject.link}dashboard`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/40 text-white text-sm font-semibold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors w-full sm:w-auto"
                                >
                                    Try the live dashboard
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 p-8 h-full"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-gray-400">In development</p>
                                <h3 className="text-2xl font-semibold">Next builds</h3>
                            </div>
                            <span className="px-3 py-1 text-xs uppercase tracking-[0.2em] bg-white/5 border border-white/10 rounded-full text-gray-300">Locked</span>
                        </div>
                        <div className="space-y-5">
                            {roadmapProjects.map((project) => (
                                <div key={project.id} className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-lg font-medium text-white">{project.title}</p>
                                            <p className="text-sm text-gray-400 mt-1">{project.note}</p>
                                        </div>
                                        <svg className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
