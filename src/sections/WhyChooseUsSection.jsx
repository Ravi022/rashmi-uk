import { ShieldCheck, Factory, Globe2, Star, BadgeCheck, Scaling } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'

const reasons = [
  {
    icon: Factory,
    title: 'Integrated Steel Manufacturing',
    text: 'Complete control from raw materials to finished product at our Kharagpur facility.',
  },
  {
    icon: Scaling,
    title: 'Annual Capacity: 2.4M MT',
    text: "World's 2nd largest DI pipe manufacturer with massive scale to serve large UK projects.",
  },
  {
    icon: BadgeCheck,
    title: 'European Standard Compliance',
    text: 'All products conform to BS EN 545, BS EN 598, BS EN 124, and ISO standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Advanced Coating & Testing',
    text: 'State-of-the-art coating lines and comprehensive in-house testing laboratories.',
  },
  {
    icon: Globe2,
    title: 'Global Supply Chain',
    text: 'Serving 50+ countries with strategic logistics networks for on-time UK delivery.',
  },
  {
    icon: Star,
    title: '100+ Year Product Life',
    text: 'Engineered for a century of service — the lowest whole-life cost solution for UK utilities.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="bg-slate-900 py-16 text-slate-100 sm:py-24">
      <div className="section-shell">
        <div className="text-center">
          <p className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Why Choose Us</p>
          <h2 className="font-display mt-2 text-2xl leading-tight text-white sm:text-3xl md:text-5xl">Why Rashmi Metaliks UK Ltd.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Six powerful reasons why leading water utilities, contractors, and councils across the UK choose Rashmi Metaliks.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <Reveal key={reason.title} delay={idx * 0.06}>
                <article className="rounded-xl border border-slate-600 bg-slate-800 p-6 transition hover:-translate-y-1 hover:border-amber-500">
                  <span className="mb-4 inline-flex rounded-full border border-amber-500/40 bg-amber-500/20 p-3 text-amber-300">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-condensed text-base uppercase tracking-[0.06em] text-white">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{reason.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
