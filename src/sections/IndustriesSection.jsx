import { Droplets, Factory, Flame, Wheat, Car, Waves } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'

const iconMap = {
  'Water Utilities': Droplets,
  'Wastewater & Sewerage': Waves,
  'Industrial Process': Factory,
  'Civil & Highways': Car,
  'Power Generation': Flame,
  'Irrigation & Agriculture': Wheat,
}

export function IndustriesSection({ industries }) {
  return (
    <section className="py-16 bg-white sm:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeader
            label="Markets Served"
            title="Industries We Supply"
            subtitle="From water utilities to industrial process — our DI infrastructure solutions serve the full spectrum of UK and global infrastructure sectors."
            centered
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, idx) => {
            const Icon = iconMap[industry.name] || Factory
            return (
              <Reveal key={industry.name} delay={idx * 0.05}>
                <div className="group flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50 p-6 transition hover:border-amber-200 hover:bg-amber-50/40">
                  <span className="mt-0.5 inline-flex shrink-0 rounded-lg border border-amber-200 bg-amber-100 p-2.5 text-amber-700 transition group-hover:bg-amber-200">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-condensed text-sm font-bold uppercase tracking-[0.08em] text-slate-900">{industry.name}</h3>
                    <p className="mt-1.5 text-xs leading-6 text-slate-500">{industry.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
