export default function Hero() {
    return (
        <div className="h-screen w-full relative flex flex-col items-center justify-center text-center px-4 pointer-events-none">
            {/* Visual content over the global background */}
            <div className="z-10 mix-blend-difference">
                <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    EVAN<br />GRIBAR
                </h1>
                <div className="h-px w-24 bg-white/50 mb-6 mx-auto"></div>
                <p className="text-white text-lg md:text-xl font-light tracking-[0.2em] uppercase drop-shadow-md">
                    Digital Strategy & Experience
                </p>
            </div>
        </div>
    )
}
