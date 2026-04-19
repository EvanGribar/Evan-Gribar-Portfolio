import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

export default function App() {
  return (
    <div className="site-wrapper">
      <div className="grid-lines" aria-hidden="true" />
      <Cursor />

      {/* Grid container overlaying the background */}
      <div className="content-layer min-h-screen border-x border-[#0E0E0E] mx-auto w-full md:w-[90%] bg-transparent flex flex-col">
        <Navbar />
        
        <main className="flex-1 w-full flex flex-col">
          <Hero />
          
          <div className="marquee-container mt-20" aria-hidden="true">
            <div className="marquee-content">
              OPERATION AND STRATEGY • PRODUCT ARCHITECTURE • TECHNICAL SYSTEM LAUNCH • OPERATION AND STRATEGY • PRODUCT ARCHITECTURE • TECHNICAL SYSTEM LAUNCH • 
            </div>
          </div>
          
          <About />
          <Projects />
          <Contact />
          
          <footer className="w-full flex justify-between px-6 py-8 border-t border-[#0E0E0E] text-[#0E0E0E] text-xs font-bold uppercase tracking-widest mt-auto">
            <span>© {new Date().getFullYear()} Evan Gribar</span>
            <span className="editorial-italic hidden md:inline">Pittsburgh, PA</span>
          </footer>
        </main>
      </div>
    </div>
  )
}