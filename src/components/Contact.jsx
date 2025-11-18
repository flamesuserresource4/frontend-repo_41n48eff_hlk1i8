import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Message sent! I will get back to you soon.')
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_80%,rgba(6,182,212,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s work together</h2>
            <p className="mt-4 text-blue-100/90">Tell me about your project or role. I typically respond within 24–48 hours.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-blue-100/80">
              I’m based in UTC±0 and open to remote opportunities. Available for freelance and full‑time roles.
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4">
              <input required placeholder="Your name" className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
              <input required type="email" placeholder="Email address" className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
              <textarea required rows="5" placeholder="Your message" className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
              <button className="mt-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-3 font-medium shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] hover:brightness-110 transition">
                Send message
              </button>
              {status && <p className="text-sm text-blue-200/80">{status}</p>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
