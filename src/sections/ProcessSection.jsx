import { ArrowRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'

export function ProcessSection({ steps }) {
  return (
    <section className="py-16 bg-slate-50 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeader
            label="How We Work"
            title="From Specification to Delivery"
            subtitle="A streamlined, fully-supported supply process — designed to make specifying and procuring Rashmi Metaliks products as simple as possible for UK projects."
            centered
          />
        </Reveal>
        <div className="mt-10 grid gap-0 sm:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <Reveal key={step.step} delay={idx * 0.07}>
              <div className="relative flex flex-col gap-4 border-b border-slate-200 px-4 py-7 last:border-b-0 md:border-b-0 md:px-8 md:py-8">
                {idx < steps.length - 1 && (
                  <span className="absolute right-0 top-12 hidden text-slate-300 lg:block">
                    <ArrowRight size={20} />
                  </span>
                )}
                <span className="font-condensed text-5xl font-bold leading-none text-slate-800 select-none">{step.step}</span>
                <div>
                  <h3 className="font-condensed text-sm font-bold uppercase tracking-[0.1em] text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-500">{step.description}</p>
                </div>
                <div className="h-0.5 w-10 rounded-full bg-amber-400" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
