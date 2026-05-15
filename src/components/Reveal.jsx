import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

const variantsMap = {
  'fade-up': { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  'fade-down': { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
  'fade-left': { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  'fade-right': { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  'scale-up': { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
  'blur-in': { hidden: { opacity: 0, filter: 'blur(8px)' }, visible: { opacity: 1, filter: 'blur(0px)' } },
  'slide-mask': { hidden: { clipPath: 'inset(0 100% 0 0)' }, visible: { clipPath: 'inset(0 0% 0 0)' } },
}

export function Reveal({ children, variant = 'fade-up', delay = 0, duration = 0.8, className, ...props }) {
  const selectedVariant = variantsMap[variant] || variantsMap['fade-up']

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration, delay, ease: EASE }}
      variants={selectedVariant}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
