import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Portfolio',
    desc: 'A 3D-enhanced personal site with motion design and playful interactions.',
    tags: ['React', 'Spline', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Live metrics, elegant charts, and beautifully responsive UI.',
    tags: ['React', 'WebSockets', 'Charts'],
    link: '#'
  },
  {
    title: 'AI-Powered Notes',
    desc: 'Semantic search and summarization with a clean, minimal interface.',
    tags: ['FastAPI', 'Vector DB', 'OpenAI'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_10%,rgba(6,182,212,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          <a href="#" className="text-blue-200/90 hover:text-white">See all</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-2xl group-hover:blur-3xl" />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-blue-100/90 text-sm">{p.desc}</p>
                </div>
                <ExternalLink className="text-blue-200/80 group-hover:text-white" size={18} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full border border-white/10 bg-slate-900/60 px-2 py-1 text-blue-100/80">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
