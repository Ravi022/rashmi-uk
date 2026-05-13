import { Droplets, Factory, Flame, Wheat, Car, Waves } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import marketsServed01 from '../assets/markets-served-01.png'
import marketsServed02 from '../assets/markets-served-02.png'
import marketsServed03 from '../assets/markets-served-03.png'
import marketsServed04 from '../assets/markets-served-04.png'
import marketsServed05 from '../assets/markets-served-05.png'
import marketsServed06 from '../assets/markets-served-06.png'

const iconMap = {
  'Water Utilities': Droplets,
  'Wastewater & Sewerage': Waves,
  'Industrial Process': Factory,
  'Civil & Highways': Car,
  'Power Generation': Flame,
  'Irrigation & Agriculture': Wheat,
}

const marketVisuals = [
  {
    src: marketsServed01,
    alt: 'Water utilities collage: trunk mains at treatment works, trench installation, valve line, and residential meter connection',
  },
  {
    src: marketsServed02,
    alt: 'Industrial wastewater outfall — pressurised sewerage and environmental conveyance',
  },
  {
    src: marketsServed03,
    alt: 'Heavy-duty process piping at mining and industrial fluid handling site',
  },
  {
    src: marketsServed04,
    alt: 'Highway culverts, storm drainage, and utility pipe installations for civil works',
  },
  {
    src: marketsServed05,
    alt: 'Power generation facility with large cooling water and process pipework',
  },
  {
    src: marketsServed06,
    alt: 'Bulk water transfer pipeline and irrigation canal serving agricultural land',
  },
]

export function IndustriesSection({ industries }) {
  return (
    <section className="relative border-t border-slate-200/90 bg-slate-100 py-8 sm:py-10 lg:py-12">
      {/* Light structural texture — different from Why Choose Us (gradient + orbs) */}
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

        {/* Editorial strips: alternating image rail + copy (not the same grid-card pattern as Why Choose Us) */}
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
                        'hover:border-red-300/60 hover:shadow-[0_12px_36px_-12px_rgba(15,23,42,0.12)]',
                        reverse ? 'sm:flex-row-reverse' : '',
                      ].join(' ')}
                    >
                      <div
                        className={[
                          'relative aspect-[3/2] w-full shrink-0 overflow-hidden bg-slate-100 sm:w-[36%] sm:self-auto sm:max-w-none sm:aspect-[2/1]',
                          'ring-1 ring-inset ring-slate-200/80',
                        ].join(' ')}
                      >
                        <img
                          src={visual.src}
                          alt={visual.alt}
                          className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                          loading={idx < 2 ? 'eager' : 'lazy'}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/[0.07] to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-slate-950/[0.06]" />
                      </div>

                      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2.5 px-2 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
                        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                          <span className="font-condensed text-xs font-bold tabular-nums tracking-[0.2em] text-red-600">
                            {n}
                          </span>
                          <span className="inline-flex rounded-md border border-slate-200 bg-slate-50 p-1.5 text-red-600">
                            <Icon size={18} aria-hidden />
                          </span>
                          <h3 className="font-display text-lg font-semibold leading-snug text-slate-900 lg:text-xl">
                            {industry.name}
                          </h3>
                        </div>
                        <p className="border-l-2 border-red-500/80 pl-3.5 text-[0.9375rem] leading-relaxed text-slate-600">
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
