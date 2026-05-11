import { ShieldCheck, Factory, Globe2, Star, BadgeCheck, Scaling } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import whyChoose01 from '../assets/why-choose-01.png'
import whyChoose02 from '../assets/why-choose-02.png'
import whyChoose03 from '../assets/why-choose-03.png'
import whyChoose04 from '../assets/why-choose-04.png'
import whyChoose05 from '../assets/why-choose-05.png'
import whyChoose06 from '../assets/why-choose-06.png'

const reasons = [
  {
    icon: Factory,
    image: whyChoose01,
    imageAlt: 'Large-scale heat-treatment furnace and ductile iron pipe line at integrated steel plant',
    title: 'Integrated Steel Manufacturing',
    text: 'Complete control from raw materials to finished product at our Kharagpur facility.',
  },
  {
    icon: Scaling,
    image: whyChoose02,
    imageAlt: 'Molten metal pour from industrial ladle in foundry operations',
    title: 'Annual Capacity: 2.4M MT',
    text: "World's 2nd largest DI pipe manufacturer with massive scale to serve large UK projects.",
  },
  {
    icon: BadgeCheck,
    image: whyChoose03,
    imageAlt: 'Global certifications and quality standards documentation',
    title: 'European Standard Compliance',
    text: 'All products conform to BS EN 545, BS EN 598, BS EN 124, and ISO standards.',
  },
  {
    icon: ShieldCheck,
    image: whyChoose04,
    imageAlt: 'Computerised Brinell hardness testing in quality control laboratory',
    title: 'Advanced Coating & Testing',
    text: 'State-of-the-art coating lines and comprehensive in-house testing laboratories.',
  },
  {
    icon: Globe2,
    image: whyChoose05,
    imageAlt: 'World map highlighting international markets and export footprint',
    title: 'Global Supply Chain',
    text: 'Serving 50+ countries with strategic logistics networks for on-time UK delivery.',
  },
  {
    icon: Star,
    image: whyChoose06,
    imageAlt: 'Glowing hot ductile iron pipe during high-temperature forming process',
    title: '100+ Year Product Life',
    text: 'Engineered for a century of service — the lowest whole-life cost solution for UK utilities.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-amber-50/40 py-20 text-slate-900 sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-amber-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-sky-200/20 blur-3xl" />

      <div className="section-shell relative">
        <Reveal>
          <SectionHeader
            label="Why Choose Us"
            title="Why Rashmi Metaliks UK Limited"
            subtitle="Six powerful reasons why leading water utilities, contractors, and councils across the UK choose Rashmi Metaliks — backed by real plant capability, standards, and global reach."
            centered
          />
        </Reveal>

        <div className="mt-14 grid gap-7 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            const n = String(idx + 1).padStart(2, '0')
            return (
              <Reveal key={reason.title} delay={idx * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-900/[0.04] transition duration-300 hover:-translate-y-1 hover:border-amber-300/70 hover:shadow-[0_20px_48px_rgba(15,23,42,0.12)] hover:ring-amber-500/10">
                  <div className="relative aspect-[5/3] overflow-hidden bg-slate-200">
                    <img
                      src={reason.image}
                      alt={reason.imageAlt}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                      loading={idx < 3 ? 'eager' : 'lazy'}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
                    <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/90 font-condensed text-xs font-bold text-amber-800 shadow-md backdrop-blur-sm">
                      {n}
                    </span>
                    <span className="absolute bottom-3 right-3 inline-flex rounded-lg border border-white/20 bg-white/15 p-2 text-white shadow-sm backdrop-blur-md">
                      <Icon size={18} className="drop-shadow-sm" aria-hidden />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-display text-lg leading-snug text-slate-900 sm:text-xl">
                      {reason.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{reason.text}</p>
                    <div
                      className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300 group-hover:w-20"
                      aria-hidden
                    />
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
