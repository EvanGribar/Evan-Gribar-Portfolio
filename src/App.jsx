import { useEffect } from 'react'
import Lenis from 'lenis'
import Background3D from './components/Background3D'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="min-h-screen text-white cursor-none selection:bg-white selection:text-black">
      <Cursor />
      <Background3D />
      <Navbar />
      <Hero />
      <main className="relative z-10 space-y-32 pb-32">
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

function About() {
  return (
    <div id="about" className="relative z-10 flex flex-col items-center justify-center py-32 px-6">
      <div className="max-w-4xl w-full p-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl">
        <h2 className="text-4xl md:text-6xl font-light mb-12 tracking-tight">About Me</h2>
        <p className="text-gray-300 text-xl md:text-3xl font-light leading-relaxed mb-8">
          I am an MIS major at the <strong className="text-white font-normal">University of Alabama</strong> with a strong focus on bridging the gap between technology and business strategy.
        </p>
        <p className="text-gray-300 text-xl md:text-3xl font-light leading-relaxed">
          My passion lies in <strong className="text-white font-normal">Business Analytics</strong> and <strong className="text-white font-normal">Consulting</strong>, leveraging data-driven insights to solve complex organizational challenges. I build tools that don't just look good, but drive real value.
        </p>
      </div>
    </div>
  )
}

export default App
