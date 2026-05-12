import { Droplets, Factory, Flame, Wheat, Car, Waves } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import waterUtilitiesImg from '../assets/real/industries/water-utilities.jpg'
import wastewaterImg from '../assets/real/industries/wastewater.jpg'
import industrialProcessImg from '../assets/real/industries/industrial-process.jpg'
import highwayCivilImg from '../assets/real/industries/highway-civil.jpg'
import powerGenerationImg from '../assets/real/industries/power-generation.jpg'
import irrigationImg from '../assets/real/industries/irrigation.jpg'

const iconMap = {
  'Water Utilities': Droplets,
  'Wastewater & Sewerage': Waves,
  'Industrial Process': Factory,
  'Civil & Highways': Car,
  'Power Generation': Flame,
  'Irrigation & Agriculture': Wheat,
}

const marketVisuals = [
  { src: waterUtilitiesImg, alt: 'Water treatment plant with circular clarifier tanks under blue sky' },
  { src: wastewaterImg, alt: 'Aerial view of sewage treatment facility with processing tanks' },
  { src: industrialProcessImg, alt: 'Industrial pipelines at a factory facility' },
  { src: highwayCivilImg, alt: 'Highway construction with road drainage infrastructure' },
  { src: powerGenerationImg, alt: 'Power generation plant with cooling tower and chimneys' },
  { src: irrigationImg, alt: 'Irrigation canal running through agricultural farmland' },
]

export function IndustriesSection({ industries }) {
  return (
    <section className="relative border-t border-slate-200/90 bg-slate-100 py-8 sm:py-10 lg:py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        aria-hidden
        style={{
          backgroundImage:
            'repeating-linear-gradient(-12deg, transparent, transparent 11px, rgba(148, 163, 184, 0.045) 11px, rgba(148, 163, 184, 0.045) 12px)',
        }}
      />

      <div className="section-shell relative">
        <Reveal>
          <SectionHeader
            label="Markets Served"
            title="Industries We Supply"
            subtitle="From water utilities to industrial process — our DI infrastructure solutions serve the full spectrum of UK and global infrastructure sectors."
            centered
            compact
          />
        </Reveal>

        <div className="mt-5 w-full sm:mt-6">
          <ul className="space-y-2 sm:space-y-2.5">
            {industries.map((industry, idx) => {
              const Icon = iconMap[industry.name] || Factory
              const visual = marketVisuals[idx]
              const n = String(idx + 1).padStart(2, '0')
              const reverse = idx % 2 === 1

              return (
                <Reveal key={industry.name} delay={idx * 0.05}>
                  <li>
                    <div
                      className={[
                        'group flex flex-col gap-2 overflow-hidden rounded-lg border border-slate-200/90 bg-white/95 p-2.5 shadow-sm backdrop-blur-sm transition sm:flex-row sm:items-center sm:gap-0 sm:p-0 sm:shadow-[0_2px_16px_rgba(15,23,42,0.035)]',
                        'hover:border-amber-300/60 hover:shadow-[0_12px_36px_-12px_rgba(15,23,42,0.12)]',
                        reverse ? 'sm:flex-row-reverse' : '',
                      ].join(' ')}
                    >
                      <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden bg-slate-100 sm:w-[36%] sm:aspect-[2/1]">
                        <img
                          src={visual.src}
                          alt={visual.alt}
                          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                          loading={idx < 2 ? 'eager' : 'lazy'}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/[0.07] to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-slate-950/[0.06]" />
                      </div>

                      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 px-0.5 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                          <span className="font-condensed text-[10px] font-bold tabular-nums tracking-[0.2em] text-amber-700/90">
                            {n}
                          </span>
                          <span className="inline-flex rounded-md border border-slate-200 bg-slate-50 p-1.5 text-amber-700">
                            <Icon size={16} aria-hidden />
                          </span>
                          <h3 className="font-display text-base font-semibold leading-snug text-slate-900 lg:text-[1.0625rem]">
                            {industry.name}
                          </h3>
                        </div>
                        <p className="border-l-2 border-amber-500/80 pl-3 text-sm leading-6 text-slate-600">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
