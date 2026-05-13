import { ArrowRight } from 'lucide-react'
import { MagneticButton } from './MagneticButton'

export function CTASection({ title, description, cta = 'Request Technical Consultation', to = '/contact' }) {
  return (
    <section className="bg-red-600 py-12 text-white sm:py-16">
      <div className="section-shell flex min-w-0 flex-col items-stretch justify-between gap-6 md:flex-row md:items-center">
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-xl leading-snug sm:text-2xl md:text-3xl">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-red-100 sm:text-base">{description}</p>
        </div>
        <MagneticButton
          to={to}
          className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded bg-white px-6 py-3.5 font-condensed text-sm font-bold uppercase tracking-[0.08em] text-red-600 touch-manipulation transition hover:bg-red-50 sm:w-auto"
        >
          {cta} <ArrowRight size={16} />
        </MagneticButton>
      </div>
    </section>
  )
}
