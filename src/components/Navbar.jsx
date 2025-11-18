import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_25px_rgba(59,130,246,0.5)]"></div>
              <span className="text-white font-semibold tracking-tight">Your Name</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((n) => (
                <button key={n.id} onClick={() => handleScroll(n.id)} className="text-blue-100/80 hover:text-white transition-colors">
                  {n.label}
                </button>
              ))}
              <div className="ml-2 h-6 w-px bg-white/10" />
              <a href="https://github.com" target="_blank" className="text-blue-100/80 hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-blue-100/80 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="mailto:you@example.com" className="text-blue-100/80 hover:text-white">
                <Mail size={20} />
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              {navItems.map((n) => (
                <button key={n.id} onClick={() => handleScroll(n.id)} className="block w-full text-left text-blue-100/90 hover:text-white py-2">
                  {n.label}
                </button>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com" target="_blank" className="text-blue-100/80 hover:text-white">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" className="text-blue-100/80 hover:text-white">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:you@example.com" className="text-blue-100/80 hover:text-white">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
