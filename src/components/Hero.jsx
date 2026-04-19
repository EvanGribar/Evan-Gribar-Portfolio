import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <header id="top" className="w-full border-b border-[#0E0E0E]">
            <div className="flex flex-col relative pt-[10vh] md:pt-[15vh]">
                <div className="absolute top-4 left-6 editorial-italic text-[0.8rem] font-bold uppercase tracking-widest text-[#E34234]">
                    No. 01 — Portfolio
                </div>

                <motion.div
                    className="flex flex-col w-full text-left"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="massive-text pl-4 md:pl-16 m-0 text-[#0E0E0E]">
                        EVAN
                    </h1>
                    <h1 className="massive-text pl-12 md:pl-32 m-0 text-[#0E0E0E]">
                        GRIBAR<span className="text-[#E34234]">.</span>
                    </h1>
                </motion.div>

                <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 border-t border-[#0E0E0E]">
                    <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#0E0E0E] flex flex-col justify-end">
                        <p className="font-bold text-2xl uppercase tracking-tighter mb-4 text-[#0E0E0E]">
                            Ambitious. Technical. Driven.
                        </p>
                        <p className="text-lg md:text-xl font-light text-[#0E0E0E] leading-snug">
                            I am a student matching academic ambition with real-world execution. I build ambitious side projects, streamline massive campus operations, and bring relentless grit to product teams.
                        </p>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-between">
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-[#0E0E0E]">
                            <li className="flex justify-between"><span>Status</span> <span className="text-[#E34234]">Seeking 2027 Roles</span></li>
                            <li className="flex justify-between"><span>Based</span> <span>Pittsburgh, PA</span></li>
                            <li className="flex justify-between"><span>Focus</span> <span className="editorial-italic normal-case tracking-normal">Product Management</span></li>
                            <li className="flex justify-between"><span>Tech</span> <span className="editorial-italic normal-case tracking-normal">Full-Stack / Cyber</span></li>
                        </ul>
                        
                        <div className="mt-12 flex gap-4">
                            <a href="#projects" aria-label="See Case Studies" className="raw-btn raw-btn-outline px-6 py-3 text-sm flex-1 text-center min-h-[44px] flex items-center justify-center">See Case Studies</a>
                            <a href="#contact" aria-label="Discuss Your Project" className="raw-btn raw-btn-solid px-6 py-3 text-sm flex-1 text-center min-h-[44px] flex items-center justify-center">Discuss Your Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
