import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.05),transparent_40%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-6 text-center text-blue-200/70">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
