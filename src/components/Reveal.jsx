import { motion } from 'framer-motion'

// Expo-out easing — decelerates quickly for a soft, organic landing
const EASE = [0.16, 1, 0.3, 1]

export function Reveal({ children, delay = 0, y = 20, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
