import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

// Use a plain keyed motion element instead of <AnimatePresence mode="wait">.
// mode="wait" can leave the new route un-mounted if the exiting route's
// onAnimationComplete never fires (a known issue under React 19 concurrent
// rendering), producing a blank page until a full reload. A keyed motion
// element gives us the enter animation we want without that failure mode.
export function RouteTransition({ children }) {
  const location = useLocation()
  return (
    <motion.main
      key={location.pathname}
      className="min-w-0 w-full max-w-[100vw] overflow-x-clip"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.main>
  )
}
