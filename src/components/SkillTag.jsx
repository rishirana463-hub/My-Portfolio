import { motion } from 'framer-motion'

export default function SkillTag({ label, index = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1.5
                 font-mono text-sm text-slate-300 transition-colors duration-300
                 hover:border-violet/60 hover:text-violet-soft"
    >
      <span className="mr-1.5 text-violet-soft">{'>'}</span>
      {label}
    </motion.span>
  )
}
