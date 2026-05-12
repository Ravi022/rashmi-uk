import { ArrowRight } from 'lucide-react'
import { MagneticButton } from './MagneticButton'

export function CTASection({ title, description, cta = 'Request Technical Consultation', to = '/contact' }) {
  return (
    <section className="bg-slate-950 py-7 text-white sm:py-10 border-t border-white/10">
      <div className="section-shell flex min-w-0 flex-col items-stretch justify-between gap-4 md:flex-row md:items-center">
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg leading-snug sm:text-xl md:text-2xl">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">{description}</p>
        </div>
        <MagneticButton
          to={to}
          className="bronze-glow inline-flex w-full shrink-0 items-center justify-center gap-2 rounded bg-amber-700 px-6 py-3.5 font-condensed text-sm uppercase tracking-[0.08em] touch-manipulation sm:w-auto"
        >
          {cta} <ArrowRight size={16} />
        </MagneticButton>
      </div>
    </section>
  )
}
