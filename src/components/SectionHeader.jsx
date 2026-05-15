import { motion } from 'framer-motion'
import { TextReveal } from './TextReveal'

const EASE = [0.16, 1, 0.3, 1]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
}

export function SectionHeader({ label, title, subtitle, centered = false, compact = false }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={centered ? 'text-center' : ''}
    >
      <motion.p
        variants={item}
        className="font-condensed text-sm font-extrabold uppercase tracking-[0.16em] text-red-600 md:text-base"
      >
        {label}
      </motion.p>
      <TextReveal
        as="h2"
        text={title}
        className={`font-display font-bold tracking-tight text-3xl leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl ${compact ? 'mt-1.5' : 'mt-2'} ${centered ? 'justify-center text-center mx-auto' : ''}`}
      />
      {subtitle ? (
        <motion.p
          variants={{ ...item, hidden: { ...item.hidden, filter: 'blur(8px)' }, show: { ...item.show, filter: 'blur(0px)' } }}
          className={`max-w-2xl text-sm text-slate-600 ${compact ? 'mt-2.5 leading-6' : 'mt-4 leading-7'} ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  )
}
