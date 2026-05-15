import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function ImageReveal({ src, alt, effect = 'parallax', className, style, imageClassName }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Parallax effect: moves image slowly while scrolling
  const yParallax = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  
  // Zoom-in effect: scales down as it enters
  const scaleZoom = useTransform(scrollYProgress, [0, 0.5], [1.2, 1])

  return (
    <div ref={ref} className={`overflow-hidden relative ${className || ''}`} style={style}>
      <motion.div
        className="h-full w-full"
        style={{
          y: effect === 'parallax' ? yParallax : 0,
          scale: effect === 'zoom-in' ? scaleZoom : 1,
        }}
      >
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${imageClassName || ''}`}
        />
      </motion.div>
      
      {effect === 'curtain' && (
        <motion.div
          className="absolute inset-0 z-10 bg-red-600"
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 1 }}
        />
      )}
    </div>
  )
}
