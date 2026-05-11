import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ChevronLeft, ShieldCheck, Droplets, CheckCircle } from 'lucide-react'
import { MagneticButton } from './MagneticButton'
import heroPipes from '../assets/hero-pipes.jpg'
import heroCasting from '../assets/hero-casting.jpg'
import heroFittings from '../assets/hero-fittings.png'
import heroFlanged from '../assets/hero-flanged.jpg'
import heroPlant from '../assets/hero-plant.jpg'
import dwiBannerSlide1 from '../assets/dwi-banner-slide1.png'

const statItems = [
  { value: '2.4M MT', label: 'Annual DI Pipe Capacity' },
  { value: '50+', label: 'Countries Served' },
  { value: '40+', label: 'Years of Experience' },
  { value: '#2', label: "World's Largest DI Mfr." },
  { value: '26K MT', label: 'DI Fittings Capacity' },
]

// Slide 0: DWI (heroPipes bg) | 1: casting | 2: fittings | 3: flanged | 4: plant
const slideImages    = [heroPipes, heroCasting, heroFittings, heroFlanged, heroPlant]
const slidePositions = ['center 65%', 'center 55%', 'center center', 'center 60%', 'center 40%']
const slideAlts = [
  'DWI Approved Ductile Iron Pipes — Rashmi Metaliks UK',
  'Rashmi Metaliks centrifugal casting of ductile iron pipe',
  'Rashmi Metaliks ductile iron fittings and bends',
  'Rashmi Aqua flanged ductile iron pipe BSEN 598',
  'Aerial view of Rashmi Metaliks manufacturing plant',
]

const TOTAL = 5

export function HeroSlider({ slides }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  const prev = useCallback(() => go((current - 1 + TOTAL) % TOTAL), [current, go])
  const next = useCallback(() => go((current + 1) % TOTAL), [current, go])

  useEffect(() => {
    const t = setInterval(next, 7000)
    return () => clearInterval(t)
  }, [next])

  // Slide 0 = DWI; slides 1–4 map to slides[1–4] (skipping old pipes-yard slide[0])
  const isDWI = current === 0
  const slide = isDWI ? null : (slides[current] ?? slides[1])
  const bgImage    = slideImages[current]    ?? heroPipes
  const bgPosition = slidePositions[current] ?? 'center center'
  const bgAlt      = slideAlts[current]      ?? ''

  return (
    <section className="relative min-h-[100svh] w-full max-w-[100vw] overflow-hidden bg-slate-950 sm:min-h-[92vh]">

      {/* ── Background image (shared by all slides) ── */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`bg-${current}`}
          custom={direction}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={bgImage}
            alt={bgAlt}
            className="h-full w-full object-cover"
            style={{ objectPosition: bgPosition }}
          />
          {/* Cinematic dark overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/65 to-slate-950/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/35" />
        </motion.div>
      </AnimatePresence>

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* ── DWI Advertisement Banner — direct child of section for reliable positioning ── */}
      <AnimatePresence>
        {isDWI && (
          <motion.div
            key="dwi-ad-banner"
            initial={{ opacity: 0, x: 48, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 24, scale: 0.97 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-3 top-4 z-20 w-[68px] sm:right-4 sm:w-[88px] md:right-6 md:w-[110px] xl:top-[80px] xl:right-10 xl:w-[280px] 2xl:right-14 2xl:w-[330px]"
          >
            <img
              src={dwiBannerSlide1}
              alt="DWI approved drinking water inspectorate banner"
              className="h-auto w-full rounded-2xl object-contain shadow-[0_8px_56px_rgba(0,0,0,0.6)] ring-1 ring-white/15"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Text content ── */}
      <div className="section-shell relative flex min-h-[100svh] min-w-0 flex-col justify-center pb-40 pt-20 sm:min-h-[92vh] sm:pb-36 sm:pt-28">
        <div className="min-w-0 max-w-3xl pr-2 sm:pr-0">

          {/* Slide counter */}
          <div className="mb-4 flex items-center gap-3 sm:mb-6">
            <span className="font-condensed text-[10px] font-bold tracking-[0.3em] text-amber-400">
              {String(current + 1).padStart(2, '0')}
            </span>
            <div className="h-px w-10 bg-amber-500/50" />
            <span className="font-condensed text-[10px] tracking-[0.2em] text-slate-400">
              {String(TOTAL).padStart(2, '0')}
            </span>
          </div>

          <AnimatePresence mode="wait">
            {isDWI ? (
              /* ── DWI slide content ── */
              <motion.div
                key="dwi-content"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Marketing eyebrow */}
                <p className="font-condensed text-xs font-bold uppercase tracking-[0.28em] text-amber-400">
                  Official Announcement · UK Water Infrastructure
                </p>

                {/* Headline */}
                <h1 className="font-display mt-3 text-[2.1rem] leading-[1.06] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[4.5rem]">
                  Engineered for Trust.{' '}
                  <span className="text-amber-400">Approved for the UK.</span>
                </h1>

                {/* Subtitle */}
                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-200 sm:mt-5 sm:text-base sm:leading-8">
                  Rashmi Metaliks DI Pipes &amp; Fittings are now{' '}
                  <strong className="font-semibold text-amber-300">officially DWI-approved</strong>{' '}
                  — delivering safe, certified drinking water infrastructure across the United Kingdom.
                </p>

                {/* 3 feature pills */}
                <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6">
                  {[
                    { icon: Droplets,    label: 'Potable Water Safe'   },
                    { icon: ShieldCheck, label: 'DWI Certified'        },
                    { icon: CheckCircle, label: '100+ Year Lifespan'   },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur-sm">
                      <Icon size={13} className="text-amber-400" />
                      <span className="font-condensed text-[11px] font-bold uppercase tracking-[0.08em] text-white">{label}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                  <MagneticButton
                    to="/products"
                    className="bronze-glow inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-3 font-condensed text-xs font-bold uppercase tracking-[0.1em] text-white sm:px-7 sm:py-3.5 sm:text-sm"
                  >
                    Explore Products <ChevronRight size={14} />
                  </MagneticButton>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 font-condensed text-xs font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/15 sm:px-7 sm:py-3.5 sm:text-sm"
                  >
                    Request Consultation
                  </Link>
                </div>
              </motion.div>
            ) : (
              /* ── Standard cinematic slide content ── */
              <motion.div
                key={`content-${current}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
                  {slide.tag}
                </p>
                <h1 className="font-display mt-3 text-[2rem] leading-[1.1] tracking-tight text-white sm:mt-4 sm:text-4xl md:text-5xl lg:text-7xl">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                  {slide.subtitle}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
                  <MagneticButton
                    to={slide.ctaTo || '/products'}
                    className="bronze-glow inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-3 font-condensed text-xs font-bold uppercase tracking-[0.1em] text-white sm:px-7 sm:py-3.5 sm:text-sm"
                  >
                    {slide.cta || 'Explore Products'} <ChevronRight size={14} />
                  </MagneticButton>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 font-condensed text-xs font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/15 sm:px-7 sm:py-3.5 sm:text-sm"
                  >
                    Request Consultation
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Nav dots ── */}
        <div className="absolute bottom-[7.5rem] left-4 flex items-center gap-2 sm:bottom-44 sm:left-6 lg:left-12">
          {Array.from({ length: TOTAL }).map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => go(idx)}
              className={`h-1 rounded-full transition-all duration-500 ${
                idx === current
                  ? 'w-8 bg-amber-500 sm:w-12'
                  : 'w-3 bg-white/30 hover:bg-white/50 sm:w-4'
              }`}
            />
          ))}
        </div>

        {/* ── Prev / next arrows ── */}
        <div className="absolute bottom-[6.5rem] right-4 flex items-center gap-2 sm:bottom-40 sm:right-6 lg:right-12">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:border-amber-500/60 hover:bg-amber-600/20 sm:h-10 sm:w-10"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:border-amber-500/60 hover:bg-amber-600/20 sm:h-10 sm:w-10"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-slate-950/90 backdrop-blur-sm">
        <div className="section-shell">
          <div className="grid grid-cols-2 divide-x divide-white/10 sm:grid-cols-3 lg:grid-cols-5">
            {statItems.map((s, i) => (
              <div
                key={s.value}
                className={`flex flex-col items-center justify-center px-3 py-3.5 text-center sm:items-start sm:px-6 sm:py-5 sm:text-left ${
                  i === 4 ? 'col-span-2 border-t border-white/10 sm:col-span-1 sm:border-t-0' : ''
                }`}
              >
                <p className="font-condensed text-lg font-bold leading-none text-amber-400 sm:text-2xl">{s.value}</p>
                <p className="mt-1 max-w-[11rem] break-words text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:mt-1.5 sm:max-w-none sm:text-[9px] sm:tracking-[0.14em]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
