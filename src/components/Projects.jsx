import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import ProjectCard from './ProjectCard.jsx'

// TODO: replace the github/demo URLs marked below with real repo + live links
const FEATURED = [
  {
    title: 'CCMS',
    description:
      'A full-stack MERN College Complaint Management System with 3 user roles (student, faculty, admin) — isolated dashboards, RBAC permission scopes, and real-time ticket tracking across 4 status stages backed by 8+ RESTful endpoints.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'RBAC'],
    github: 'https://github.com/rishirana463-hub', // TODO: replace with the CCMS repo link
    demo: '#', // TODO: add live demo (or remove this link)
  },
  {
    title: 'Neighborhood Alert',
    description:
      'A civic-tech platform that lets residents report, geopin, and track local community issues in real time. Interactive map geolocation, evidence uploads, upvoting, and threaded tracking — built in TypeScript for strict typing and scalability.',
    stack: ['TypeScript', 'React', 'Node.js', 'Map Integration'],
    github: 'https://github.com/rishirana463-hub', // TODO: replace with the Neighborhood Alert repo link
    demo: '#', // TODO: add live demo (or remove this link)
  },
]

// TODO: add live demo links where you have them
const MORE = [
  {
    title: 'Client-Side Image Compressor',
    description:
      'Browser-only image compression via the Canvas API — no server, no dependencies. Drag-and-drop, live before/after size comparison, sub-second processing up to 10MB.',
    github: 'https://github.com/rishirana463-hub/image-compressor',
    demo: '#',
  },
  {
    title: 'Ice Cream Sales Predictor',
    description:
      'Interactive prediction web app estimating sales across temperature, season, and day of week with dynamic charts — zero libraries, sub-1s load.',
    github: 'https://github.com/rishirana463-hub',
    demo: '#',
  },
  {
    title: 'Weather Application',
    description:
      'Real-time weather app consuming a public REST API — live city data in ~500ms with a responsive card-based UI across 3 breakpoints.',
    github: 'https://github.com/rishirana463-hub',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-14 md:pl-12"
      >
        <p className="mb-3 font-mono text-sm text-emerald-soft">02 — work</p>
        <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
          Featured projects
        </h2>
        <p className="mt-3 max-w-lg text-slate-400">
          A couple of things I&apos;ve built end to end — from idea to deployed.
        </p>
      </motion.div>

      {/* Featured — 2 cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {FEATURED.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* More projects — smaller grid */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 mt-20 font-display text-2xl font-bold text-white md:pl-24"
      >
        More things I&apos;ve made
      </motion.h3>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MORE.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card card-glow group flex flex-col p-6"
          >
            <h4 className="font-display text-lg font-bold text-white transition-colors group-hover:text-emerald-soft">
              {item.title}
            </h4>
            <p className="mt-2 flex-1 text-sm text-slate-400">{item.description}</p>
            <div className="mt-5 flex items-center gap-4 text-slate-400">
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${item.title} on GitHub`}
                className="transition-colors hover:text-white"
              >
                <FiGithub />
              </a>
              <a
                href={item.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${item.title} live demo`}
                className="transition-colors hover:text-gold"
              >
                <FiExternalLink />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
