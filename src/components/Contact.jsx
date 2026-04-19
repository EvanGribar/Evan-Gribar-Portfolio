export default function Contact() {
    return (
        <section id="contact" className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-[#0E0E0E] bg-[#E34234] text-[#F4F0EB] flex flex-col justify-between">
                <div>
                    <h2 className="font-heading text-6xl md:text-8xl font-black uppercase leading-[0.8] mb-8 text-[#0E0E0E]">
                        Build <br/><span className="text-[#F4F0EB]">Together.</span>
                    </h2>
                    <p className="text-xl font-medium max-w-md">
                        Looking for a driven product management intern who can bridge the gap between engineering and operations? Let's talk.
                    </p>
                </div>
            </div>

            <div className="p-8 md:p-16 bg-[#0E0E0E] text-[#F4F0EB] flex flex-col justify-center space-y-12">
                <a 
                    href="mailto:ewgribar@crimson.ua.edu" 
                    className="group block"
                >
                    <span className="text-sm font-bold uppercase tracking-widest text-[#E34234] mb-2 block">Direct Transmission</span>
                    <h3 className="font-heading text-3xl md:text-5xl font-bold break-all group-hover:italic group-hover:text-[#E34234] transition-all">
                        ewgribar@crimson.ua.edu
                    </h3>
                </a>

                <a 
                    href="https://linkedin.com/in/evangribar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block"
                >
                    <span className="text-sm font-bold uppercase tracking-widest text-[#E34234] mb-2 block">Professional Network</span>
                    <h3 className="font-heading text-3xl md:text-5xl font-bold break-all group-hover:italic group-hover:text-[#E34234] transition-all">
                        /in/evangribar
                    </h3>
                </a>
            </div>
        </section>
    )
}
