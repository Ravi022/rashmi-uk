import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'

export function MagneticButton({ to, children, className = '' }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 180, damping: 14 })
  const springY = useSpring(y, { stiffness: 180, damping: 14 })

  const move = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.14)
    y.set((e.clientY - cy) * 0.14)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div style={{ x: springX, y: springY }} onMouseMove={move} onMouseLeave={reset}>
      <Link to={to} className={className}>
        {children}
      </Link>
    </motion.div>
  )
}
