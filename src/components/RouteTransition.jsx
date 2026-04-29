import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

export function RouteTransition({ children }) {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}
