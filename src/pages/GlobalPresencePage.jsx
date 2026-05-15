import { MapPin, Globe2, Truck, Users, Warehouse, ShieldCheck, Clock, FileText, Factory } from 'lucide-react'
import globalPresenceHeroBg from '../assets/global-presence-hero-bg.png'
import { CTASection } from '../components/CTASection'
import { DWIBannerBadge } from '../components/DWIBannerBadge'
import { IndiaUkMap } from '../components/IndiaUkMap'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { TextReveal } from '../components/TextReveal'
import { CountUp } from '../components/CountUp'
import { WorldMap } from '../components/WorldMap'
import { regionalOffices } from '../data/siteData'
import { useSeo } from '../hooks/useSeo'

const globalStats = [
  { icon: Globe2, value: '50+', label: 'Countries Served' },
  { icon: Truck, value: '5', label: 'Continents Reached' },
  { icon: Users, value: '20K+', label: 'Global Workforce' },
  { icon: MapPin, value: '£96bn', label: 'UK Water Investment 2025–30' },
]

const supplyChainPillars = [
  {
    icon: Factory,
    title: 'Integrated Manufacturing',
    description:
      'Our Kharagpur campus is a fully self-sufficient steel ecosystem — from raw material processing to finished DI pipe dispatch — ensuring complete control over quality, lead time, and cost.',
  },
  {
    icon: Globe2,
    title: 'Global Logistics Network',
    description:
      'Dedicated freight forwarding, customs clearance, and multi-modal logistics partnerships across 50+ countries enable reliable, on-schedule delivery to any port or project site worldwide.',
  },
  {
    icon: ShieldCheck,
    title: 'Third-Party Inspection',
    description:
      'Independent inspection agencies (TÜV, Bureau Veritas, SGS) verify quality at source before export — with full documentation package accompanying every consignment.',
  },
  {
    icon: FileText,
    title: 'Full Documentation',
    description:
      'Mill test certificates, dimensional reports, hydrostatic test records, and coating inspection reports are provided digitally with every order — ready for project records.',
  },
]

const projectFootprint = [
  { region: 'United Kingdom', projects: 'Water mains, sewerage, highway drainage, UK infrastructure programmes' },
  { region: 'Middle East', projects: 'Mega water projects, desalination plant pipework, municipality networks' },
  { region: 'Africa', projects: 'National water supply programmes, rural water access schemes, urban expansion' },
  { region: 'South & SE Asia', projects: 'Irrigation infrastructure, industrial pipelines, smart city water networks' },
  { region: 'Europe', projects: 'Water distribution network rehabilitation, wastewater upgrade programmes' },
  { region: 'Americas', projects: 'Large-diameter transmission mains, industrial fluid conveyance systems' },
]

const whyNetworkPoints = [
  {
    icon: Clock,
    title: 'Competitive Lead Times',
    description: 'Strategic inventory management and dedicated production scheduling give UK clients reliable delivery windows even for large-volume orders.',
  },
  {
    icon: ShieldCheck,
    title: 'Supply Chain Security',
    description: 'As the world\'s 2nd largest DI manufacturer, we have the capacity to fulfil large UK framework contracts without risk of supply disruption.',
  },
  {
    icon: Globe2,
    title: 'Proven Global Track Record',
    description: 'Over 50 countries have relied on Rashmi Metaliks supply for critical infrastructure — giving UK clients confidence backed by a 20-year export history.',
  },
  {
    icon: Users,
    title: 'UK-Based Technical Support',
    description: 'Our London office team provides local technical sales, specification support, and project coordination — eliminating the delays of long-distance supplier engagement.',
  },
]


export function GlobalPresencePage() {
  useSeo({
    title: 'Global Presence | Rashmi Metaliks UK Limited',
    description: 'Connecting Infrastructure Across the Globe — 50+ countries, 5 continents, UK office in Leytonstone London.',
  })

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[280px] overflow-hidden bg-slate-950 pb-20 pt-24 text-white sm:min-h-[320px]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={globalPresenceHeroBg}
            alt=""
            aria-hidden
            className="h-full w-full min-h-[420px] object-cover object-[center_45%] sm:min-h-[480px]"
          />
        </div>
        {/* Scrims: readable copy on the left; globe / network stays visible toward the right */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/58 to-slate-950/25" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/45" />
        <DWIBannerBadge wideHeading />
        <div className="section-shell relative max-w-[min(100%,40rem)] sm:max-w-none">
          <p className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-sky-400 [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
            Global Presence
          </p>
          <TextReveal
            as="h1"
            text="Connecting Infrastructure Across the Globe"
            className="font-display mt-4 max-w-4xl text-4xl leading-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.5)] md:text-6xl"
          />
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 [text-shadow:0_1px_14px_rgba(0,0,0,0.45)]">
            With manufacturing in India and commercial operations across the UK, Europe, Middle East, Africa, and Asia — Rashmi Metaliks delivers world-class DI infrastructure to every major market. Our global network is built for reliability, speed, and total project support.
          </p>
        </div>
      </section>

      {/* ── Global Stats ── */}
      <section className="border-b border-slate-100 bg-white py-14">
        <div className="section-shell">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {globalStats.map(({ icon: Icon, value, label }, idx) => (
              <Reveal key={label} delay={idx * 0.05}>
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center">
                  <span className="inline-flex rounded-xl border border-red-200 bg-red-50 p-3 text-red-600">
                    <Icon size={20} />
                  </span>
                  <CountUp value={value} className="block font-condensed text-3xl font-bold stat-value" />
                  <p className="font-condensed text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── World Map ── */}
      <section className="py-24 bg-slate-50">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              label="Our Network"
              title="A Truly Global Supply Chain"
              subtitle="From our Kharagpur manufacturing campus to project sites across 5 continents — our supply network is built for reliability, speed, and total project support."
              centered
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-12">
              <WorldMap />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Global Supply Chain Pillars ── */}
      <section className="border-t border-slate-100 bg-white py-20">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              label="Supply Chain"
              title="How Our Global Supply Chain Works"
              subtitle="Four integrated pillars deliver consistent, documented, on-time supply from Kharagpur to any project site in the world."
              centered
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supplyChainPillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <Reveal key={pillar.title} delay={idx * 0.06} className="flex">
                  <div className="group flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-7 transition hover:border-red-200 hover:bg-red-50/20 w-full">
                    <span className="inline-flex w-fit rounded-xl border border-red-200 bg-white p-3 text-red-600 shadow-sm transition group-hover:bg-red-100">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-condensed text-sm font-bold uppercase tracking-[0.08em] text-slate-900">{pillar.title}</h3>
                    <p className="text-sm leading-7 text-slate-500">{pillar.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── UK Presence ── */}
      <section className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="section-shell">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <SectionHeader
                  label="UK Presence"
                  title="Established in the United Kingdom"
                />
                <p className="mt-5 text-sm leading-8 text-slate-600">
                  Rashmi Metaliks UK Limited is incorporated in England & Wales and operates from our London office in Leytonstone. Our UK team provides local technical sales, project specification support, and supply chain coordination — bringing world-class DI manufacturing capacity directly to the UK market.
                </p>
                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex items-start gap-4 rounded-xl border border-red-200 bg-white p-5">
                    <span className="inline-flex shrink-0 rounded-lg border border-red-200 bg-red-50 p-2 text-red-600">
                      <MapPin size={18} />
                    </span>
                    <div>
                      <p className="font-condensed text-xs font-bold uppercase tracking-[0.14em] text-red-600">UK Sales & Technical Office</p>
                      <p className="mt-1 text-sm font-medium text-slate-800">Suite 102, Oceanair House</p>
                      <p className="text-sm text-slate-600">750–760 High Road, Leytonstone, London, E11 3AW</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5">
                    <span className="inline-flex shrink-0 rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-600">
                      <Warehouse size={18} />
                    </span>
                    <div>
                      <p className="font-condensed text-xs font-bold uppercase tracking-[0.14em] text-slate-500">UK Warehouse & Logistics</p>
                      <p className="mt-1 text-sm font-medium text-slate-800">UK Warehouse Facility</p>
                      <p className="text-sm text-slate-600">Strategic stockholding for fast-track UK project requirements</p>
                    </div>
                  </div>
                </div>
              </div>
              <IndiaUkMap className="h-72 border-slate-200 shadow-sm" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Project Footprint ── */}
      <section className="border-t border-slate-100 bg-white py-20">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              label="Project Footprint"
              title="Where Our Products Are Installed"
              subtitle="From UK water mains to Middle East mega-projects — Rashmi Metaliks DI infrastructure is installed in some of the world's most critical water and wastewater networks."
              centered
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projectFootprint.map((item, idx) => (
              <Reveal key={item.region} delay={idx * 0.05}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="font-condensed text-xs font-bold uppercase tracking-[0.16em] text-red-600">{item.region}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.projects}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Our Global Network Matters ── */}
      <section className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              label="Why It Matters"
              title="Why Our Global Network Matters for UK Clients"
              subtitle="Choosing Rashmi Metaliks UK means access to global manufacturing scale with local UK accountability — a combination no purely domestic supplier can match."
              centered
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyNetworkPoints.map((point, idx) => {
              const Icon = point.icon
              return (
                <Reveal key={point.title} delay={idx * 0.06}>
                  <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-red-600">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-condensed text-sm font-bold uppercase tracking-[0.08em] text-slate-900">{point.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-500">{point.description}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Regional Offices ── */}
      <section className="border-t border-slate-100 bg-white py-20">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              label="Our Offices"
              title="Where We Operate"
              subtitle="Sales, technical support, and logistics coordination across key global markets."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {regionalOffices.map((office, idx) => (
              <Reveal key={office.region} delay={idx * 0.06}>
                <div className={`flex flex-col gap-4 rounded-2xl border p-7 ${office.highlight ? 'border-red-200 bg-red-50' : 'border-slate-200 bg-slate-50'}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={`font-condensed text-xs font-bold uppercase tracking-[0.14em] ${office.highlight ? 'text-red-600' : 'text-slate-400'}`}>
                        {office.highlight ? 'Primary UK Office' : 'Regional Office'}
                      </p>
                      <h3 className="font-display mt-1 text-xl text-slate-900">{office.region}</h3>
                    </div>
                    <span className={`inline-flex rounded-full p-2 ${office.highlight ? 'bg-red-200 text-red-700' : 'bg-slate-200 text-slate-600'}`}>
                      <MapPin size={16} />
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-600">{office.role}</p>
                  <div className="flex items-start gap-2 text-xs text-slate-500">
                    <MapPin size={12} className="mt-0.5 shrink-0" />
                    {office.address}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Talk to Our UK Team"
        description="Contact our London office to discuss supply, logistics, and technical support for your next infrastructure project."
      />
    </>
  )
}
