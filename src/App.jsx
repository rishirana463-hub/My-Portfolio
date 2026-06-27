import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-sm text-slate-500">
        <p className="font-mono">
          Designed &amp; built by Rishi Rana · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}
