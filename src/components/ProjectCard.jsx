import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi'

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, stack, github, demo } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="card card-glow group relative flex flex-col overflow-hidden p-7"
    >
      {/* Violet top border accent */}
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet via-violet-soft to-coral" />

      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl font-bold text-white transition-colors group-hover:text-violet-soft">
          {title}
        </h3>
        <FiArrowUpRight className="mt-1 shrink-0 text-2xl text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-coral" />
      </div>

      <p className="mb-6 flex-1 text-slate-400">{description}</p>

      <ul className="mb-6 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-violet/10 px-2.5 py-1 font-mono text-xs text-violet-soft"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5 text-sm">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-white"
        >
          <FiGithub /> GitHub
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-coral"
        >
          <FiExternalLink /> Live Demo
        </a>
      </div>
    </motion.article>
  )
}
