import { motion } from 'framer-motion'
import SkillTag from './SkillTag.jsx'

const SKILLS = [
  'React',
  'JavaScript (ES6+)',
  'TypeScript',
  'Tailwind',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Git',
  'Python',
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid items-center gap-14 md:grid-cols-12">
        {/* Asymmetric photo — offset, narrower column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 md:translate-y-6"
        >
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-emerald/35 to-gold/25 blur-xl" />
            {/* TODO: replace placeholder with real photo (e.g. /public/rishi.jpg) */}
            <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-surface">
              <div className="text-center">
                <span className="font-display text-7xl font-extrabold text-white/10">RR</span>
                <p className="mt-2 font-mono text-xs text-slate-600">[TODO: replace photo]</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio + skills — wider column, starts lower for asymmetry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7"
        >
          <p className="mb-3 font-mono text-sm text-emerald-soft">01 — about</p>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Final-year student,
            <br />
            full-time builder.
          </h2>

          <div className="mt-6 space-y-3 text-lg leading-relaxed text-slate-400">
            <p>
              I&apos;m a final-year Software Development student based in Mumbai who has shipped
              5 React-powered apps — obsessed with responsive UI, reusable component architecture,
              and actually getting things in front of users.
            </p>
            <p>
              I care about the details — the spacing, the motion, the moment an interface feels
              right. I&apos;m currently hunting for a frontend internship where I can build real
              products with a real team.
            </p>
          </div>

          <div className="mt-8">
            <p className="mb-4 font-mono text-sm text-slate-500">// stack &amp; tools</p>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, i) => (
                <SkillTag key={skill} label={skill} index={i} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
