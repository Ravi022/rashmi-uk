import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { MagneticButton } from './MagneticButton'
import heroPipes from '../assets/hero-pipes.jpg'
import heroCasting from '../assets/hero-casting.jpg'
import heroFittings from '../assets/hero-fittings.jpg'
import heroFlanged from '../assets/hero-flanged.jpg'
import heroPlant from '../assets/hero-plant.jpg'

const statItems = [
  { value: '2.4M MT', label: 'Annual DI Pipe Capacity' },
  { value: '50+', label: 'Countries Served' },
  { value: '40+', label: 'Years of Experience' },
  { value: '#2', label: "World's Largest DI Mfr." },
  { value: '26K MT', label: 'DI Fittings Capacity' },
]

// Slide 1: pipes yard  |  2: casting  |  3: fittings  |  4: flanged  |  5: plant
const slideImages = [heroPipes, heroCasting, heroFittings, heroFlanged, heroPlant]
const slidePositions = ['center 65%', 'center 55%', 'center center', 'center 60%', 'center 40%']
const slideAlts = [
  'Rashmi Metaliks UK — ductile iron infrastructure solutions',
  'Rashmi Metaliks centrifugal casting of ductile iron pipe',
  'Rashmi Metaliks ductile iron fittings and bends',
  'Rashmi Aqua flanged ductile iron pipe BSEN 598',
  'Aerial view of Rashmi Metaliks manufacturing plant',
]

export function HeroSlider({ slides }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  const prev = useCallback(() => go((current - 1 + slides.length) % slides.length), [current, go, slides.length])
  const next = useCallback(() => go((current + 1) % slides.length), [current, go, slides.length])

  useEffect(() => {
    const t = setInterval(next, 6500)
    return () => clearInterval(t)
  }, [next])

  const slide = slides[current]
  const bgImage = slideImages[current] ?? heroPipes
  const bgPosition = slidePositions[current] ?? 'center center'
  const bgAlt = slideAlts[current] ?? ''

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-slate-950">
      {/* ── background images ── */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`bg-${current}`}
          custom={direction}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <img
            src={bgImage}
            alt={bgAlt}
            className="h-full w-full object-cover"
            style={{ objectPosition: bgPosition }}
          />
          {/* cinematic dark overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
        </motion.div>
      </AnimatePresence>

      {/* ── subtle grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* ── amber accent line ── */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-amber-500/0 via-amber-500/60 to-amber-500/0" />

      {/* ── main text content ── */}
      <div className="section-shell relative flex min-h-[92vh] flex-col justify-center pb-36 pt-28">
        <div className="max-w-3xl">
          {/* slide counter */}
          <div className="mb-6 flex items-center gap-3">
            <span className="font-condensed text-[10px] font-bold tracking-[0.3em] text-amber-400">
              {String(current + 1).padStart(2, '0')}
            </span>
            <div className="h-px w-10 bg-amber-500/50" />
            <span className="font-condensed text-[10px] tracking-[0.2em] text-slate-400">
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>

          {/* eyebrow */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`tag-${current}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
              className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-amber-400"
            >
              {slide.tag}
            </motion.p>
          </AnimatePresence>

          {/* headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${current}`}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, delay: 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display mt-4 text-5xl leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              {slide.title}
            </motion.h1>
          </AnimatePresence>

          {/* subtitle */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg"
            >
              {slide.subtitle}
            </motion.p>
          </AnimatePresence>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              to={slide.ctaTo || '/products'}
              className="bronze-glow inline-flex items-center gap-2 rounded-lg bg-amber-600 px-7 py-3.5 font-condensed text-sm font-bold uppercase tracking-[0.1em] text-white"
            >
              {slide.cta || 'Explore Products'} <ChevronRight size={15} />
            </MagneticButton>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 font-condensed text-sm font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/15"
            >
              Request Consultation
            </Link>
          </motion.div>
        </div>

        {/* ── slide nav dots (bottom-left) ── */}
        <div className="absolute bottom-44 left-4 flex items-center gap-2 sm:left-6 lg:left-12">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => go(idx)}
              className={`h-1 rounded-full transition-all duration-500 ${
                idx === current ? 'w-12 bg-amber-500' : 'w-4 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* ── prev / next arrows ── */}
        <div className="absolute bottom-40 right-4 flex items-center gap-2 sm:right-6 lg:right-12">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:border-amber-500/60 hover:bg-amber-600/20"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:border-amber-500/60 hover:bg-amber-600/20"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>

      {/* ── stats bar ── */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-slate-950/80 backdrop-blur-sm">
        <div className="section-shell">
          <div className="grid divide-x divide-white/10 sm:grid-cols-3 lg:grid-cols-5">
            {statItems.map((s) => (
              <div key={s.value} className="flex flex-col items-center justify-center px-6 py-5 text-center sm:items-start sm:text-left">
                <p className="font-condensed text-2xl font-bold leading-none text-amber-400">{s.value}</p>
                <p className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
