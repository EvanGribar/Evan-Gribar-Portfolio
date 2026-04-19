import { motion } from 'framer-motion'

const projects = [
    {
        id: 'wkndly',
        title: 'Weekendly.co',
        role: 'Founder / Full-Stack',
        desc: 'Group travel platform coordinating anonymous preference tracking, AI destination matching, and voting. Next.js 15, Neon Postgres, Gemini AI.',
        link: 'https://weekendly.co'
    },
    {
        id: 'intrn',
        title: 'Intrn.co',
        role: 'Founder / Product',
        desc: 'An AI-driven tracking platform designed to help students manage, analyze, and scale their internship application pipelines.',
        link: 'https://www.intrn.co'
    }
]

const experience = [
    {
        id: 'tgt',
        title: 'Target Corp.',
        role: 'Tech Consultant',
        desc: 'Identified floor-level bottlenecks and executed operational upgrades, directly reducing error rates and boosting departmental workflow speeds by 20%.',
    },
    {
        id: 'mdb',
        title: 'Million Dollar Band',
        role: 'Manager',
        desc: 'Managed game-day logistics for 400+ band members, coordinating massive equipment routing and transitions during high-stakes university events.',
    },
    {
        id: 'mdt',
        title: 'Mystical Dream Travel',
        role: 'Social Media Strategy',
        desc: 'Engineered analytics-driven social campaigns yielding double-digit growth in global audience reach and engagement.',
    }
]

export default function Projects() {
    return (
        <section id="projects" className="border-b border-[#0E0E0E]">
            {/* PROJECTS SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#0E0E0E] bg-[#E34234] text-[#F4F0EB]">
                    <h2 className="font-heading text-5xl md:text-7xl font-black mb-6 uppercase">
                        Side <br/> Projects.
                    </h2>
                    <p className="text-xl font-light leading-relaxed max-w-md">
                        A collection of late-night builds, technical experiments, and student-focused software platforms.
                    </p>
                </div>

                <div className="flex flex-col">
                    {projects.map((proj, idx) => (
                        <div key={proj.id} className={`p-8 md:p-12 border-[#0E0E0E] hover-invert flex flex-col justify-between ${idx !== projects.length - 1 ? 'border-b' : ''}`}>
                            <div className="flex justify-between items-start mb-12">
                                <h3 className="font-heading text-4xl md:text-6xl font-bold m-0 uppercase tracking-tighter">
                                    {proj.title}
                                </h3>
                                <div className="text-right">
                                    <span className="text-xs uppercase tracking-widest font-bold">Role</span>
                                    <p className="editorial-italic">{proj.role}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                                <p className="text-lg leading-snug font-medium">
                                    {proj.desc}
                                </p>
                                <div className="text-right">
                                    {proj.link && proj.link !== '#' && (
                                        <a href={proj.link} target="_blank" rel="noopener noreferrer" aria-label={`View the ${proj.title} project`} className="raw-btn raw-btn-outline min-h-[44px] px-6 py-4 flex items-center justify-center w-full text-center">
                                            Analyze Project
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* EXPERIENCE SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#0E0E0E]">
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#0E0E0E] bg-[#0E0E0E] text-[#F4F0EB]">
                    <h2 className="font-heading text-5xl md:text-7xl font-black mb-6 uppercase">
                        Campus & <br/> Professional.
                    </h2>
                    <p className="text-xl font-light leading-relaxed max-w-md">
                        Logistics management, technical consulting, and leadership beyond the classroom.
                    </p>
                </div>

                <div className="flex flex-col">
                    {experience.map((exp, idx) => (
                        <div key={exp.id} className={`p-8 md:p-12 border-[#0E0E0E] hover-invert flex flex-col justify-between ${idx !== experience.length - 1 ? 'border-b' : ''}`}>
                            <div className="flex justify-between items-start mb-8">
                                <h3 className="font-heading text-3xl font-bold m-0 uppercase tracking-tighter">
                                    {exp.title}
                                </h3>
                                <div className="text-right shrink-0 ml-4">
                                    <span className="text-xs uppercase tracking-widest font-bold">Role</span>
                                    <p className="editorial-italic whitespace-nowrap">{exp.role}</p>
                                </div>
                            </div>

                            <p className="text-lg leading-snug font-medium">
                                {exp.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
