import { Factory, Globe2, Award, Users, Layers, FlaskConical, CheckCircle, Building2, TrendingUp, Globe, Star, Rocket } from 'lucide-react'
import aboutHeroRashmiGroup from '../assets/about-hero-rashmi-group.png'
import mfgFurnaceSparks from '../assets/mfg-furnace-sparks.jpg'
import mfgMoltenPour from '../assets/mfg-molten-pour.jpg'
import mfgCentrifugal from '../assets/mfg-centrifugal.jpg'
import mfgFurnaceWorkers from '../assets/mfg-furnace-workers.jpg'
import mfgAnnealing from '../assets/mfg-annealing.jpg'
import rashmiGroupBrandCollage from '../assets/rashmi-group-brand-collage.png'
import stockyardLogistics1 from '../assets/stockyard-logistics-1.png'
import stockyardLogistics2 from '../assets/stockyard-logistics-2.png'
import stockyardLogistics3 from '../assets/stockyard-logistics-3.png'
import stockyardLogistics4 from '../assets/stockyard-logistics-4.png'
import stockyardLogistics5 from '../assets/stockyard-logistics-5.png'
import stockyardLogistics6 from '../assets/stockyard-logistics-6.png'
import stockyardLogistics7 from '../assets/stockyard-logistics-7.png'
import { CTASection } from '../components/CTASection'
import { DWIBannerBadge } from '../components/DWIBannerBadge'
import { IndiaUkMap } from '../components/IndiaUkMap'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { TextReveal } from '../components/TextReveal'
import { CountUp } from '../components/CountUp'
import { timelineItems } from '../data/siteData'
import { useSeo } from '../hooks/useSeo'

const manufacturingStrengths = [
  '686 m³ blast furnace with 2,800 TPD capacity',
  'Advanced moulding and casting systems',
  'CNC-enabled design and pattern shops',
  'Automated coating and finishing lines',
  'Comprehensive in-house testing laboratories',
]

const waterInfraNeeds = [
  'High-pressure resistant pipelines',
  'Corrosion-resistant materials',
  'Leak-proof jointing systems',
  'Long service life with minimal maintenance',
]

const manholeNeeds = [
  'High load-bearing capacity for heavy vehicular use',
  'Long-term durability and anti-skid fitment',
  'Enhanced safety for pedestrians and vehicles',
  'Full compliance with BS EN 124 load classes A15–F900',
]

export function AboutPage() {
  useSeo({
    title: 'About | Rashmi Metaliks UK Limited',
    description: 'Learn about Rashmi Metaliks UK Limited, a part of the USD 5 billion Rashmi Group with global ductile iron manufacturing leadership.',
  })

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[300px] overflow-hidden pb-16 pt-20 sm:min-h-[360px] sm:pb-20 sm:pt-24">
        <img
          src={aboutHeroRashmiGroup}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-[center_35%] sm:object-[center_32%]"
        />
        {/* Light left scrim — strong band under copy; fades so photo stays visible on the right */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/58 to-transparent sm:from-white/92 sm:via-white/42" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-white/22" />
        <DWIBannerBadge wideHeading />
        <div className="section-shell relative max-w-[min(100%,42rem)] sm:max-w-none">
          <p className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-red-700">
            About Rashmi Metaliks UK
          </p>
          <TextReveal
            as="h1"
            text="A Legacy of Strength. Delivering Infrastructure for the Future."
            className="font-display mt-4 max-w-4xl text-3xl leading-tight text-slate-950 sm:text-4xl md:text-6xl [text-shadow:0_1px_0_rgba(255,255,255,0.9),0_0_24px_rgba(255,255,255,0.75)]"
          />
          <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-800 sm:mt-6 sm:text-base sm:leading-8 [text-shadow:0_1px_12px_rgba(255,255,255,0.85)]">
            From India to the United Kingdom — engineering reliable, high-performance ductile iron solutions for critical infrastructure across the globe.
          </p>
        </div>
      </section>

      {/* ── Company Overview ── */}
      <section className="py-16 bg-white sm:py-24">
        <div className="section-shell">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div>
                <SectionHeader label="Company Overview" title="A USD 5 Billion Global Conglomerate" />
                <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600">
                  <p>Rashmi Metaliks Ltd. is the flagship company of the USD 5 billion Rashmi Group — a globally recognised conglomerate with diversified operations across iron & steel, cement, power, and infrastructure solutions.</p>
                  <p>Established in 2004, Rashmi Metaliks has rapidly emerged as India's largest and the world's second-largest manufacturer of ductile iron pipes, delivering high-performance pipeline solutions across more than 50 countries.</p>
                  <p>With a fully integrated steel manufacturing ecosystem, the company ensures complete control over raw materials, production processes, and quality — resulting in consistent, reliable, and globally compliant products.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '2004', label: 'Year Established' },
                  { value: 'USD 5B', label: 'Rashmi Group Revenue' },
                  { value: '2.4M MT', label: 'DI Pipe Capacity (Annual)' },
                  { value: '50+', label: 'Countries Exported To' },
                  { value: '#2', label: "World's Largest DI Mfr." },
                  { value: '20K+', label: 'Global Workforce' },
                ].map(({ value, label }, i) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
                    <CountUp value={value} className="font-condensed text-3xl font-bold stat-value" />
                    <p className="mt-2 font-condensed text-[10px] font-bold uppercase leading-5 tracking-[0.1em] text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Legacy of Rashmi Group ── */}
      <section className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="section-shell">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionHeader label="The Rashmi Group" title="The Legacy of Rashmi Group" />
                <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600">
                  <p>Founded with a vision of industrial excellence, Rashmi Group has grown into a global powerhouse with a strong presence across continents. With operations spanning over 50 countries and a workforce of more than 20,000, the group has built its reputation on innovation, integrity, and long-term value creation.</p>
                  <p>From steel and cement to advanced manufacturing and infrastructure solutions, Rashmi Group has consistently contributed to nation-building and global development. Its integrated approach to manufacturing, combined with sustainable practices and technological advancement, has positioned it as a trusted partner for large-scale infrastructure projects worldwide.</p>
                </div>
              </div>
              <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                <img
                  src={rashmiGroupBrandCollage}
                  alt="Rashmi Group brand logo collage"
                  className="aspect-[21/5] w-full rounded-lg object-contain"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Rise of Rashmi Metaliks ── */}
      <section className="py-16 bg-white sm:py-24">
        <div className="section-shell">
          <Reveal>
            <SectionHeader label="Our Manufacturing Strength" title="The Rise of Rashmi Metaliks" subtitle="Backed by state-of-the-art facilities in Kharagpur, India, the company operates one of the most advanced integrated steel plants in the region." centered />
          </Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            {/* Capacity cards */}
            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-red-200 bg-red-50 p-8 h-full">
                <p className="font-condensed text-xs font-bold uppercase tracking-[0.18em] text-red-600">Annual Production Capacity</p>
                <div className="mt-6 space-y-5">
                  <div className="flex items-end gap-3">
                    <p className="font-condensed text-5xl font-bold stat-value">2.4M</p>
                    <div>
                      <p className="font-condensed text-lg font-bold text-slate-800">Metric Tonnes</p>
                      <p className="text-sm text-slate-500">Ductile Iron Pipes</p>
                    </div>
                  </div>
                  <div className="h-px bg-red-200" />
                  <div className="flex items-end gap-3">
                    <p className="font-condensed text-5xl font-bold stat-value">26K</p>
                    <div>
                      <p className="font-condensed text-lg font-bold text-slate-800">Metric Tonnes</p>
                      <p className="text-sm text-slate-500">DI Fittings</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            {/* Manufacturing strengths */}
            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 h-full">
                <p className="font-condensed text-xs font-bold uppercase tracking-[0.18em] text-slate-500 mb-5">Manufacturing Strength Backed By</p>
                <ul className="space-y-3">
                  {manufacturingStrengths.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                      <CheckCircle size={16} className="mt-0.5 shrink-0 text-red-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          {/* Manufacturing photo collage */}
          <Reveal delay={0.1}>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
              <div className="col-span-2 overflow-hidden rounded-2xl">
                <img src={mfgFurnaceSparks} alt="Furnace tapping with sparks at Rashmi Metaliks" className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img src={mfgMoltenPour} alt="Molten iron pouring into casting mould" className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img src={mfgCentrifugal} alt="Glowing pipe emerging from centrifugal caster" className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="hidden overflow-hidden rounded-2xl lg:block">
                <img src={mfgAnnealing} alt="DI pipe in annealing furnace" className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            </div>
            <div className="mt-3 overflow-hidden rounded-2xl">
              <img src={mfgFurnaceWorkers} alt="Workers at blast furnace — Rashmi Metaliks Kharagpur plant" className="h-80 w-full object-cover object-center" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Stockyard & Dispatch ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              label="Stockyard & Logistics"
              title="Ready to Ship. Stocked for Scale."
              subtitle="Our extensive on-site stockyard holds thousands of metric tonnes of DI pipes and fittings ready for rapid dispatch — ensuring project timelines are met without compromise."
              centered
            />
          </Reveal>
          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <div className="grid gap-0 md:auto-rows-[220px] md:grid-cols-3">
              <Reveal delay={0.02} className="md:col-span-2 md:row-span-2">
                <div className="h-[420px] overflow-hidden bg-slate-100 md:h-full">
                  <img src={stockyardLogistics6} alt="Large stockyard lot of wrapped DI pipes in warehouse" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </Reveal>
              <Reveal delay={0.04}>
                <div className="h-[220px] overflow-hidden bg-slate-100 md:h-full">
                  <img src={stockyardLogistics1} alt="Stacked DI pipe lengths ready for loading" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="h-[220px] overflow-hidden bg-slate-100 md:h-full">
                  <img src={stockyardLogistics3} alt="Wrapped DI pipe bundles in warehouse for dispatch" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="h-[220px] overflow-hidden bg-slate-100 md:h-full">
                  <img src={stockyardLogistics4} alt="Truck loaded with bundled DI pipes indoors" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="h-[220px] overflow-hidden bg-slate-100 md:h-full">
                  <img src={stockyardLogistics5} alt="Front view of loaded DI pipes prepared for shipment" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="h-[220px] overflow-hidden bg-slate-100 md:h-full">
                  <img src={stockyardLogistics2} alt="DI pipes loaded on truck at logistics yard" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </Reveal>
              <Reveal delay={0.14} className="md:col-span-3 md:row-span-3">
                <div className="h-[420px] overflow-hidden bg-slate-100 md:h-full">
                  <img src={stockyardLogistics7} alt="Outdoor logistics dispatch with DI pipes on trailers" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.08}>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { value: '50,000+', label: 'MT Stock Capacity', detail: 'Massive on-site stockyard at our Kharagpur facility holding ready-to-dispatch inventory' },
                { value: '48 hrs', label: 'Dispatch Lead Time', detail: 'Rapid turnaround from order confirmation to loading — minimising project delays' },
                { value: '50+ Countries', label: 'Export Reach', detail: 'Pipes and fittings shipped globally via major ports with full documentation' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                  <p className="font-condensed text-3xl font-bold stat-value">{item.value}</p>
                  <p className="mt-1 font-condensed text-xs font-bold uppercase tracking-[0.1em] text-slate-700">{item.label}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="border-t border-b border-slate-100 bg-slate-50 py-20 overflow-hidden">
        <div className="section-shell">
          <Reveal>
            <SectionHeader label="Our Journey" title="Two Decades of Growth" subtitle="From a single manufacturing facility to a global infrastructure supply powerhouse." centered />
          </Reveal>

          <div className="mt-16 relative">
            {/* Central glowing spine */}
            <div className="absolute left-[calc(50%-1px)] top-0 hidden h-full w-px lg:block"
              style={{ background: 'linear-gradient(to bottom, transparent, #ef4444 8%, #ef4444 92%, transparent)' }} />
            <div className="absolute left-[calc(50%-3px)] top-0 hidden h-full w-1.5 lg:block opacity-20 blur-sm"
              style={{ background: 'linear-gradient(to bottom, transparent, #ef4444 8%, #ef4444 92%, transparent)' }} />

            <div className="space-y-10">
              {[
                { ...timelineItems[0], icon: Building2 },
                { ...timelineItems[1], icon: Globe },
                { ...timelineItems[2], icon: TrendingUp },
                { ...timelineItems[3], icon: Star },
                { ...timelineItems[4], icon: Rocket },
              ].map((item, idx) => {
                const Icon = item.icon
                const isRight = idx % 2 !== 0
                return (
                  <Reveal key={item.year} delay={idx * 0.07}>
                    <div className="relative grid lg:grid-cols-2 lg:gap-0">

                      {/* Card */}
                      <div className={`relative ${isRight ? 'lg:col-start-2 lg:pl-10' : 'lg:pr-10'}`}>
                        {/* Connector line from dot to card */}
                        <div
                          className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-px w-10 bg-red-300 opacity-60 ${isRight ? 'left-0' : 'right-0'}`}
                        />
                        <div className="rounded-2xl border border-red-100 bg-white p-0 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                          {/* Top red accent bar */}
                          <div className="h-1.5 w-full bg-gradient-to-r from-red-600 to-red-400" />
                          <div className="p-7">
                            <div className="flex items-start gap-4">
                              {/* Red icon badge */}
                              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shadow-lg">
                                <Icon size={18} className="text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-condensed text-xs font-bold uppercase tracking-[0.18em] text-red-600">{item.year}</p>
                                <h3 className="font-display mt-1 text-xl text-slate-900">{item.title}</h3>
                                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Centre dot */}
                      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center" style={{zIndex:2}}>
                        <span className="flex h-5 w-5 rounded-full border-[3px] border-red-600 bg-red-600 shadow-lg"
                          style={{ boxShadow: '0 0 0 4px rgba(255,255,255,0.9), 0 0 12px 2px #dc2626' }} />
                      </div>

                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Expanding into the UK ── */}
      <section className="py-24 bg-white">
        <div className="section-shell">
          <Reveal>
            <SectionHeader label="UK Market" title="Expanding into the United Kingdom" subtitle="The United Kingdom is undergoing significant infrastructure modernisation — in water distribution, wastewater management, and urban road safety. Rashmi Metaliks UK Limited has been established to directly support these evolving requirements." centered />
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            {/* Water Infrastructure */}
            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 h-full">
                <p className="font-condensed text-xs font-bold uppercase tracking-[0.16em] text-red-600 mb-4">Supporting Water Infrastructure</p>
                <h3 className="font-display text-2xl text-slate-900">High-Performance Pipeline Solutions</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">Ductile iron pipes remain the preferred choice for water transportation due to their strength, durability, and long lifecycle. With increasing focus on reducing water leakage, improving network efficiency, and ensuring long-term reliability, the UK market demands:</p>
                <ul className="mt-5 space-y-2.5">
                  {waterInfraNeeds.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                      <CheckCircle size={15} className="mt-0.5 shrink-0 text-red-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Urban Road Safety */}
            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 h-full">
                <p className="font-condensed text-xs font-bold uppercase tracking-[0.16em] text-red-600 mb-4">Enhancing Urban Road Safety</p>
                <h3 className="font-display text-2xl text-slate-900">BS EN 124 Manhole Cover Solutions</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">Urban infrastructure in the UK requires robust access solutions, particularly manhole covers and gratings, which play a critical role in road safety. Our BS EN 124 compliant covers with load classes A15 to F900 are engineered for:</p>
                <ul className="mt-5 space-y-2.5">
                  {manholeNeeds.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                      <CheckCircle size={15} className="mt-0.5 shrink-0 text-red-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* India/UK map */}
          <Reveal delay={0.1}>
            <IndiaUkMap className="mt-8 h-80 shadow-sm" />
          </Reveal>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur h-full">
              <p className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-red-400">Vision</p>
              <h3 className="font-display mt-3 text-2xl text-white">Global Leader in Infrastructure Solutions</h3>
              <p className="mt-4 text-sm leading-8 text-slate-300">To be the world's most trusted supplier of ductile iron infrastructure solutions — delivering excellence through innovation, quality, and sustainability across every market we serve.</p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur h-full">
              <p className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-red-400">Mission</p>
              <h3 className="font-display mt-3 text-2xl text-white">Engineering Lifelines. Strengthening Communities.</h3>
              <p className="mt-4 text-sm leading-8 text-slate-300">To engineer and supply world-class ductile iron solutions that strengthen infrastructure, enhance safety, and improve quality of life — for generations to come.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Partner with Rashmi Metaliks UK" description="Our UK technical team is ready to discuss your project requirements and deliver the right solution." />
    </>
  )
}
