export default function About() {
    return (
        <section id="about" className="w-full flex justify-center py-24 px-6 md:px-12 border-b border-[#0E0E0E]">
            <div className="w-full max-w-5xl">
                <h2 className="font-heading text-6xl md:text-8xl font-black mb-16 tracking-tighter uppercase">
                    Data & <br/> <span className="editorial-italic text-[#E34234]">Doctrine.</span>
                </h2>

                <div className="flex flex-col border-t border-[#0E0E0E]">
                    {/* Education Row */}
                    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-[#0E0E0E] py-8 gap-4 hover-invert px-4">
                        <div className="text-sm font-bold uppercase tracking-widest">Institution</div>
                        <div className="md:col-span-2 font-heading text-3xl font-bold">The University of Alabama</div>
                        <div className="text-right font-bold">GPA: 3.7 / 4.0</div>
                    </div>

                    {/* Degree Row */}
                    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-[#0E0E0E] py-8 gap-4 hover-invert px-4">
                        <div className="text-sm font-bold uppercase tracking-widest">Degree</div>
                        <div className="md:col-span-2 text-xl font-light leading-snug">
                            B.S. Management Information Systems<br />
                            <span className="editorial-italic">Minor: Business Cyber Security • Focus: Executive Systems & Structures</span>
                        </div>
                        <div className="text-right font-bold">Class of 2027</div>
                    </div>

                    {/* Certifications Compact */}
                    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-[#0E0E0E] py-8 gap-4 hover-invert px-4">
                        <div className="text-sm font-bold uppercase tracking-widest">Certifications</div>
                        <div className="md:col-span-3 flex flex-wrap gap-2">
                            <span className="px-3 py-1 border border-current text-sm font-bold uppercase tracking-widest">IBM Project Management Fundamentals</span>
                            <span className="px-3 py-1 border border-current text-sm font-bold uppercase tracking-widest">IBM Data Fundamentals</span>
                            <span className="px-3 py-1 border border-current text-sm font-bold uppercase tracking-widest">IBM Enterprise Design Thinking</span>
                            <span className="px-3 py-1 border border-current text-sm font-bold uppercase tracking-widest">Lean Six Sigma White Belt</span>
                            <span className="px-3 py-1 border border-current text-sm font-bold uppercase tracking-widest">HubSpot Reporting</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
