import { motion } from 'framer-motion'
import { useMemo } from 'react'

export function TextReveal({ text, as: Component = 'h2', splitBy = 'word', className, delay = 0 }) {
  const words = useMemo(() => {
    if (splitBy === 'char') {
      return text.split('').map((char) => (char === ' ' ? '\u00A0' : char))
    }
    return text.split(' ')
  }, [text, splitBy])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: splitBy === 'char' ? 0.02 : 0.08,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`inline-flex flex-wrap ${className || ''}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ marginRight: splitBy === 'word' ? '0.25em' : '0' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
