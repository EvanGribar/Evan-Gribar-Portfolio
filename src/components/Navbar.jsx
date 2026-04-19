export default function Navbar() {
    return (
        <nav className="w-full border-b border-[#0E0E0E] bg-[#F4F0EB] z-50 sticky top-0 py-4 px-6 flex justify-between items-center text-[#0E0E0E]">
            <a href="#top" className="font-heading font-black text-2xl tracking-tighter hover:text-[#E34234] transition-colors leading-none">
                E.G.
            </a>

            <div className="flex gap-2 md:gap-8 text-sm font-bold uppercase tracking-widest">
                <a href="#about" aria-label="Navigate to About" className="hover:text-[#CC2014] transition-colors min-h-[44px] min-w-[44px] flex justify-center items-center px-2">About</a>
                <a href="#projects" aria-label="Navigate to Projects" className="hover:text-[#CC2014] transition-colors min-h-[44px] min-w-[44px] flex justify-center items-center px-2">Projects</a>
                <a href="#contact" aria-label="Navigate to Contact" className="hover:text-[#CC2014] transition-colors min-h-[44px] min-w-[44px] flex justify-center items-center px-2">Contact</a>
            </div>
        </nav>
    )
}
