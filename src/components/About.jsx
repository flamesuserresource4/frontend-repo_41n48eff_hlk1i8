import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-blue-100/90 leading-relaxed">
              I’m a full‑stack developer specializing in React, TypeScript, and Python. I love bringing ideas to life with thoughtful design, clean architecture, and a focus on performance.
              From rapid prototypes to production apps, I care about detail and collaboration.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-blue-100/90">5+ years of experience</div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-blue-100/90">UI + Motion + 3D</div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-blue-100/90">Full-stack shipping</div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-blue-100/90">Remote collaboration</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-1">
              <div className="rounded-2xl bg-slate-900/60 p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {['React', 'TypeScript', 'Python', 'FastAPI', 'Tailwind', 'Framer'].map((s) => (
                    <div key={s} className="rounded-lg border border-white/10 bg-white/5 px-3 py-4 text-blue-100/90">{s}</div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
