import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/80" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-3xl pt-32 pb-24"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200/90 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for freelance and full-time roles
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Building playful, interactive, modern web experiences
          </h1>
          <p className="mt-5 text-blue-100/90 text-lg">
            I’m a developer focused on delightful UX, robust engineering, and fast iteration — blending 3D, motion, and clean code.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-3 font-medium shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] hover:brightness-110 transition">
              View Projects
            </a>
            <a href="#contact" className="rounded-xl border border-white/10 bg-white/5 text-white px-5 py-3 font-medium hover:bg-white/10 transition">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
