import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 88 },
  { name: 'FastAPI', level: 82 },
  { name: 'Tailwind', level: 92 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_80%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <span className="text-blue-100/90 font-medium">{s.name}</span>
                <span className="text-blue-200/70 text-sm">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${s.level}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
