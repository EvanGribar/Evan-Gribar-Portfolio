import { motion } from 'framer-motion'

const roadmapProjects = [
    {
        id: 0,
        title: 'intrn.co',
        note: 'Internship retention platform for employers.',
        status: 'Private alpha',
    },
    {
        id: 1,
        title: 'InventoryIQ',
        note: 'The all in one inventory management system for businesses.',
        status: 'In progress',
    },
    { id: 3, title: 'Pillar CRM', note: 'All-in-one CRM that makes business management seamless.', status: 'Coming soon' },
    { id: 4, title: 'CampusLoop', note: 'A closed-loop, student-run, food delivery service for campus communities.', status: 'Coming soon' },
]

        const roadmapProjects = [
            {
                id: 0,
                title: 'intrn.co',
                note: 'Internship retention platform for employers.',
                status: 'Private alpha',
            },
            {
                id: 1,
                title: 'InventoryIQ',
                note: 'The all in one inventory management system for businesses.',
                status: 'In progress',
            },
            { id: 3, title: 'Pillar CRM', note: 'All-in-one CRM that makes business management seamless.', status: 'Coming soon' },
            { id: 4, title: 'CampusLoop', note: 'A closed-loop, student-run, food delivery service for campus communities.', status: 'Coming soon' },
        ]
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">Current Projects</p>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Building real-world tools</h2>
                    <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto">
                        Product work that blends strategy, AI, and experience design. Featured below; more shipping soon.
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
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
                        </div>
                        <div className="space-y-5">
                            {roadmapProjects.map((project) => (
                                <div key={project.id} className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            {project.link ? (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-lg font-medium text-white hover:text-white/80 transition-colors"
                                                >
                                                    {project.title}
                                                    <span className="text-xs uppercase tracking-[0.2em] text-emerald-200">COMING SOON</span>
                                                </a>
                                            ) : (
                                                <p className="text-lg font-medium text-white">{project.title}</p>
                                            )}
                                            <p className="text-sm text-gray-400 mt-1">{project.note}</p>
                                        </div>
                                        <span className="px-2.5 py-1 text-xs uppercase tracking-[0.2em] bg-white/5 border border-white/10 rounded-full text-gray-300 whitespace-nowrap">
                                            {project.status}
                                        </span>
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
