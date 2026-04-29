import { ArrowRight } from 'lucide-react'
import { MagneticButton } from './MagneticButton'

export function CTASection({ title, description, cta = 'Request Technical Consultation', to = '/contact' }) {
  return (
    <section className="bg-slate-900 py-14 text-white sm:py-20">
      <div className="section-shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl">{title}</h3>
          <p className="mt-3 max-w-2xl text-slate-300">{description}</p>
        </div>
        <MagneticButton
          to={to}
          className="bronze-glow inline-flex items-center gap-2 rounded bg-amber-700 px-6 py-3 font-condensed uppercase tracking-[0.08em]"
        >
          {cta} <ArrowRight size={16} />
        </MagneticButton>
      </div>
    </section>
  )
}
