import {
  Flame, Zap, Leaf, Droplets, Recycle, Factory, Building2, Heart,
  CheckCircle, Download, Globe2,
} from 'lucide-react'
import { CTASection } from '../components/CTASection'
import { DWIBannerBadge } from '../components/DWIBannerBadge'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { TextReveal } from '../components/TextReveal'
import { CountUp } from '../components/CountUp'
import { useSeo } from '../hooks/useSeo'
import sustainabilityHeroBg from '../assets/sustainability-hero-bg.png'
import waterRecyclingPhoto from '../assets/sustainability-water-recycling.png'
import zeroWasteCircularPhoto from '../assets/sustainability-zero-waste-circular.png'
import biomassPelletsPhoto from '../assets/sustainability-biomass-pellets.png'
import captivePowerEnergyPhoto from '../assets/sustainability-captive-power-energy.png'
import furnaceGasUtilisationPhoto from '../assets/sustainability-furnace-gas-utilisation.png'
import sustainableManufacturingPhoto from '../assets/sustainability-manufacturing-practices.png'
import responsibleInfrastructurePhoto from '../assets/sustainability-responsible-infrastructure.png'
import csrCommunityImpactPhoto from '../assets/sustainability-csr-community-impact.png'

const sustainabilityPillars = [
  {
    icon: Flame,
    category: 'Energy Optimisation & Emission Reduction',
    title: 'Furnace Gas Utilisation',
    stat: '70,000 Nm³',
    statLabel: 'Gas Recovered Daily',
    description:
      'Our Integrated Steel Plant (ISP) generates 50,000–70,000 Nm³ of furnace gas daily. Instead of flaring, this gas is efficiently reused across our manufacturing units for heating processes — directly reducing fossil fuel dependency and cutting greenhouse gas emissions at source.',
    points: [
      'Blast furnace gas captured and redistributed to heat treatment units',
      'Replaces equivalent LPG/coal consumption across factory floors',
      'Real-time gas flow metering for energy efficiency auditing',
    ],
    image: furnaceGasUtilisationPhoto,
    imageFit: 'contain',
    imageHeight: 'h-80 lg:h-96',
    imageBgClass: 'bg-white',
  },
  {
    icon: Zap,
    category: 'Energy Optimisation & Emission Reduction',
    title: 'Captive Power & Energy Integration',
    stat: '45 MW',
    statLabel: 'Thermal Power Capacity',
    description:
      'Our 45 MW captive thermal power plant drives integrated operations across the Kharagpur campus. By generating power internally, we eliminate transmission losses, maximise thermal efficiency, and reduce dependence on the grid — resulting in a lower per-unit carbon footprint for every tonne of DI pipe produced.',
    points: [
      '45MW captive thermal plant powering the full manufacturing campus',
      'Integrated energy monitoring across all production lines',
      'Continuous improvement programme targeting efficiency gains',
    ],
    image: captivePowerEnergyPhoto,
    imageFit: 'cover',
  },
  {
    icon: Leaf,
    category: 'Renewable & Clean Energy Initiatives',
    title: 'Biomass Pellet Manufacturing',
    stat: '10000 MT',
    statLabel: 'Monthly Biomass Capacity',
    description:
      'We operate a 500 MT/month biomass pellet manufacturing unit, producing eco-friendly biofuel co-fired with coal in our thermal power plant. This initiative directly reduces coal consumption, lowers carbon emissions, and supports the transition to cleaner energy sources across our operations.',
    points: [
      'Agricultural and forestry waste converted to high-density pellets',
      'Co-fired with coal in thermal plant — reducing coal consumption',
      'Supports India\'s National Biomass Utilisation Programme targets',
    ],
    image: biomassPelletsPhoto,
    imageFit: 'cover',
  },
  {
    icon: Droplets,
    category: 'Water Conservation & Recycling',
    title: '100% Water Recycling',
    stat: '100%',
    statLabel: 'Water Recycled',
    description:
      'Our manufacturing operations run on a fully closed-loop water recycling system achieving zero liquid discharge. Process water is collected, treated, and reintroduced into production — ensuring zero wastage of water resources across the plant.',
    points: [
      'Zero Liquid Discharge (ZLD) across all manufacturing units',
      'Closed-loop cooling water system for the blast furnace and casting lines',
      'Rainwater harvesting integrated with on-site storage and reuse',
    ],
    image: waterRecyclingPhoto,
  },
  {
    icon: Recycle,
    category: 'Waste Management & Circular Economy',
    title: 'Zero-Waste & Circular Economy',
    stat: 'Zero',
    statLabel: 'Waste to Landfill',
    description:
      'Industrial by-products are systematically reintroduced into the production cycle. Dust recovery systems, slag utilisation, and solid waste processing ensure minimal environmental discharge and maximum resource utilisation — supporting a genuine circular economy model.',
    points: [
      'Blast furnace slag processed into cement raw material — zero landfill',
      'Iron fines and process dust recovered and remelted',
      'Scrap and off-spec material recycled back into the melt stream',
    ],
    image: zeroWasteCircularPhoto,
    imageFit: 'cover',
  },
  {
    icon: Factory,
    category: 'Sustainable Manufacturing Practices',
    title: 'Sustainable Manufacturing Practices',
    stat: 'ISO 14001',
    statLabel: 'Environmental Certified',
    description:
      'Our manufacturing operations are ISO 14001 certified — demonstrating a systematic approach to environmental management. Continuous improvement initiatives target energy intensity, water use, and emissions reduction across all production stages.',
    points: [
      'ISO 14001 Environmental Management System across all units',
      'Annual environmental performance reporting and third-party audit',
      'Emission monitoring systems at all combustion points',
    ],
    image: sustainableManufacturingPhoto,
    imageFit: 'contain',
    imageHeight: 'h-80 lg:h-96',
    imageBgClass: 'bg-slate-100',
  },
  {
    icon: Building2,
    category: 'Responsible Infrastructure Solutions',
    title: 'Responsible Infrastructure Solutions',
    stat: '100+',
    statLabel: 'Year Product Life',
    description:
      'The sustainability story of DI infrastructure begins at installation and extends for over a century. DI pipes with 100+ year lifecycle dramatically reduce replacement frequency, embodied carbon from new construction activity, and material consumption — directly supporting the UK water sector\'s Net Zero 2030 ambition.',
    points: [
      'Fewer replacement cycles means less excavation and construction carbon',
      'Leak-proof joints prevent water loss across the network lifecycle',
      'Fully recyclable at end of life — 100% material recovery',
    ],
    image: responsibleInfrastructurePhoto,
    imageFit: 'contain',
    imageHeight: 'h-80 lg:h-96',
    imageBgClass: 'bg-white',
  },
  {
    icon: Heart,
    category: 'CSR & Community Impact',
    title: 'CSR & Community Impact',
    stat: '20K+',
    statLabel: 'Employee Community',
    description:
      'Rashmi Group\'s CSR programmes invest in education, healthcare, and rural development across communities surrounding our manufacturing campus. We believe industrial leadership comes with a responsibility to the communities that make our growth possible.',
    points: [
      'Primary and vocational education programmes in Kharagpur region',
      'Healthcare camps and mobile medical units for local communities',
      'Women\'s self-help group support and rural livelihood programmes',
    ],
    image: csrCommunityImpactPhoto,
    imageFit: 'contain',
    imageHeight: 'h-80 lg:h-96',
    imageBgClass: 'bg-zinc-100',
    imageFrameClass: 'max-w-sm mx-auto',
  },
]

export function SustainabilityPage() {
  useSeo({
    title: 'Sustainability | Rashmi Metaliks UK Limited',
    description: 'Engineering Growth. Sustaining the Future. Real sustainability data: 70,000 Nm³ gas recovered, 45MW captive power, 100% water recycling, zero waste to landfill.',
  })

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[280px] overflow-hidden bg-slate-950 pb-20 pt-24 text-white sm:min-h-[320px]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={sustainabilityHeroBg}
            alt=""
            aria-hidden
            className="h-full w-full min-h-[420px] object-cover object-[center_40%] sm:min-h-[480px]"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/20" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-slate-950/35" />
        <DWIBannerBadge wideHeading />
        <div className="section-shell relative max-w-[min(100%,40rem)] sm:max-w-none">
          <p className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-red-400">
            Sustainability
          </p>
          <TextReveal
            as="h1"
            text="Engineering Growth. Sustaining the Future."
            className="font-display mt-4 max-w-4xl text-4xl leading-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55)] md:text-6xl"
          />
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 [text-shadow:0_1px_14px_rgba(0,0,0,0.45)]">
            Sustainability at Rashmi Metaliks is embedded in every tonne of steel we melt, every pipe we cast, and every community we touch. Here we share the real data behind our environmental and social performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 sm:gap-8">
            {[
              { value: '70K Nm³', label: 'Gas Recovered Daily' },
              { value: '100%', label: 'Water Recycled' },
              { value: 'Zero', label: 'Waste to Landfill' },
              { value: '100+ Yrs', label: 'DI Product Lifecycle' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center sm:text-left">
                <CountUp value={value} className="block font-condensed text-2xl font-bold stat-value" />
                <p className="mt-1 font-condensed text-[9px] font-bold uppercase tracking-[0.14em] text-slate-200 [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sustainability Pillars ── */}
      {sustainabilityPillars.map((pillar, idx) => {
        const Icon = pillar.icon
        const isEven = idx % 2 === 0
        return (
          <section
            key={pillar.title}
            className={`py-20 ${isEven ? 'bg-white' : 'bg-slate-50'} border-t border-slate-100`}
          >
            <div className="section-shell">
              <Reveal>
                <div className={`grid gap-14 lg:grid-cols-2 lg:items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Text block */}
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <p className="font-condensed text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">
                      {pillar.category}
                    </p>
                    <div className="mt-3 flex items-center gap-4">
                      <span className="inline-flex rounded-xl border border-red-200 bg-red-50 p-3 text-red-600">
                        <Icon size={22} />
                      </span>
                      <div>
                        <CountUp value={pillar.stat} className="block font-condensed text-3xl font-bold leading-none text-slate-900" />
                        <p className="mt-0.5 font-condensed text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">{pillar.statLabel}</p>
                      </div>
                    </div>
                    <h2 className="font-display mt-4 text-3xl leading-snug text-slate-900 md:text-4xl">{pillar.title}</h2>
                    <p className="mt-4 text-sm leading-8 text-slate-600">{pillar.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                          <CheckCircle size={15} className="mt-0.5 shrink-0 text-red-600" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Section image */}
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    {pillar.image ? (
                      <div className={`${pillar.imageFrameClass || 'w-full'} ${pillar.imageHeight || 'h-72'} overflow-hidden rounded-2xl border border-slate-200 ${pillar.imageBgClass || 'bg-white'} shadow-sm ${pillar.imageFit === 'cover' ? 'p-0' : 'p-3'}`}>
                        <img
                          src={pillar.image}
                          alt={`${pillar.title} at Rashmi Metaliks facility`}
                          className={`h-full w-full ${
                            pillar.imageFit === 'cover' ? 'object-cover' : 'object-contain'
                          } ${
                            pillar.imageRotate === '90' ? 'rotate-90 scale-[1.35]' : ''
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="flex h-72 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50">
                        <div className="text-center">
                          <Icon size={36} className="mx-auto text-slate-300" />
                          <p className="mt-3 font-condensed text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{pillar.title} Photo</p>
                          <p className="mt-1 text-xs text-slate-300">Image Placeholder</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )
      })}

      {/* ── Net Zero Alignment ── */}
      <section className="border-t border-slate-100 bg-slate-50 py-20 text-slate-900">
        <div className="section-shell">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-red-600">Supporting UK Policy</p>
                <h2 className="font-display mt-4 text-3xl leading-snug text-slate-900 md:text-4xl">
                  Aligned with UK Water Sector Net Zero 2030
                </h2>
                <p className="mt-5 text-sm leading-8 text-slate-600">
                  The UK water sector has committed to Net Zero carbon by 2030. Long-life DI infrastructure directly reduces embodied carbon in network renewal programmes — cutting the frequency of excavation, material consumption, and construction activity across the asset lifecycle.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Fewer replacement cycles = less embodied carbon per km of pipeline',
                    'Recyclable material supports a circular economy at end of life',
                    'Leak-proof systems reduce energy wasted pumping lost water',
                    'Lower maintenance frequency reduces construction disruption carbon',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '100+', label: 'Year Design Life', accent: true },
                  { value: '~0', label: 'Maintenance Cycles', accent: false },
                  { value: '100%', label: 'Recyclable at EOL', accent: false },
                  { value: 'C=140', label: 'Hazen-Williams Coefficient', accent: true },
                ].map(({ value, label, accent }) => (
                  <div key={label} className={`rounded-2xl border p-6 text-center ${accent ? 'border-red-200 bg-red-50' : 'border-slate-200 bg-slate-50'}`}>
                    {value === 'C=140' ? (
                      <p className="font-condensed text-3xl font-bold stat-value">{value}</p>
                    ) : (
                      <CountUp value={value} className="block font-condensed text-3xl font-bold stat-value" />
                    )}
                    <p className="mt-2 font-condensed text-[10px] font-bold uppercase leading-5 tracking-[0.1em] text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Download Our Sustainability Report"
        description="Request our full sustainability data pack, lifecycle assessment figures, and EPD documentation for use in your project's environmental reporting."
      />
    </>
  )
}
