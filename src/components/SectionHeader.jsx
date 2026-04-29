import { motion } from 'framer-motion'

export function SectionHeader({ label, title, subtitle, centered = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className={centered ? 'text-center' : ''}
    >
      <p className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-amber-700">{label}</p>
      <h2 className="font-display mt-2 text-2xl leading-tight text-slate-900 sm:text-3xl md:text-5xl">{title}</h2>
      {subtitle ? <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">{subtitle}</p> : null}
    </motion.div>
  )
}
