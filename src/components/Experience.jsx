import { motion } from 'framer-motion'

// TODO: add internships / experience entries here as you get them
const TIMELINE = [
  {
    period: 'Now',
    title: 'Seeking Frontend Internship',
    org: 'Open to opportunities',
    detail:
      'Actively looking for a frontend internship where I can ship production UI and grow with a strong team.',
    accent: 'gold',
  },
  {
    period: '2025',
    title: 'Tech Fest Volunteer Coordinator',
    org: 'Thakur College of Engineering & Technology, Mumbai',
    detail:
      'Coordinated registration and check-in for 100+ attendees at the annual Tech Fest, managing real-time logistics under pressure alongside a team of 8 volunteers across concurrent sessions.',
    accent: 'violet',
  },
  {
    period: '2024 — Present',
    title: 'B.Voc in Software Development',
    org: 'Thakur College of Engineering & Technology, Mumbai',
    detail:
      'Final-year student focused on web development and frontend engineering, building real React projects alongside coursework.',
    accent: 'violet',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="mb-3 font-mono text-sm text-emerald-soft">03 — journey</p>
        <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
          Experience &amp; education
        </h2>
      </motion.div>

      <div className="relative md:pl-8">
        {/* Vertical line */}
        <span className="absolute left-0 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-emerald via-emerald/40 to-transparent md:block" />

        <div className="space-y-10">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative md:pl-10"
            >
              {/* Node */}
              <span
                className={`absolute -left-[5px] top-2 hidden h-3 w-3 rounded-full ring-4 ring-navy md:block ${
                  item.accent === 'gold' ? 'bg-gold' : 'bg-emerald'
                }`}
              />
              <div className="card p-6 transition-colors hover:border-white/10">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                  <span className="font-mono text-sm text-emerald-soft">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-gold">{item.org}</p>
                <p className="mt-3 text-slate-400">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
