import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const EMAIL = 'rishirana463@gmail.com'
const GITHUB = 'https://github.com/rishirana463-hub'
const LINKEDIN = 'https://www.linkedin.com/in/rishi-rana-256a16349'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      {/* Faint watermark to echo the hero */}
      <span className="watermark absolute -left-4 bottom-0 -z-10 text-[22vw] leading-none">
        HELLO
      </span>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-4 font-mono text-sm text-violet-soft">04 — contact</p>
        <h2 className="font-display text-5xl font-extrabold text-white sm:text-6xl">
          Let&apos;s build{' '}
          <span className="bg-gradient-to-r from-violet-soft to-coral bg-clip-text text-transparent">
            something.
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
          Got an internship, a project, or just want to say hi? My inbox is always open.
        </p>

        <a href={`mailto:${EMAIL}`} className="btn-primary mt-10 text-base">
          <FiMail /> {EMAIL}
        </a>

        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10
                       text-xl text-slate-300 transition-all hover:-translate-y-1 hover:border-violet/60 hover:text-violet-soft"
          >
            <FiGithub />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10
                       text-xl text-slate-300 transition-all hover:-translate-y-1 hover:border-coral/60 hover:text-coral"
          >
            <FiLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
