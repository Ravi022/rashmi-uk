import { useEffect, useState, useRef } from 'react'
import { motion, useInView, useSpring } from 'framer-motion'

export function CountUp({ value, suffix = '', duration = 2, className }) {
  // Extract number from value string (e.g. '100+' -> 100, '2.4M' -> 2.4)
  const numMatch = value.match(/[\d.]+/)
  const endValue = numMatch ? parseFloat(numMatch[0]) : 0
  const actualSuffix = value.replace(/[\d.]+/, '')

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  
  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  })

  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      spring.set(endValue)
    }
  }, [isInView, endValue, spring])

  useEffect(() => {
    return spring.on('change', (current) => {
      // Determine if original value had decimals
      const isInteger = endValue % 1 === 0
      setDisplayValue(isInteger ? Math.round(current) : current.toFixed(1))
    })
  }, [spring, endValue])

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}{actualSuffix}
    </motion.span>
  )
}
