import {
  FlaskConical, Layers, ScanLine, BadgeCheck, Microscope, FileCheck,
  ShieldCheck, Cpu, Flame, Cylinder, Thermometer, Settings, Truck,
  CheckCircle, Download, Ruler, Gauge, Droplets, Weight, Star,
} from 'lucide-react'
import qualitySpectrometer from '../assets/quality-spectrometer.jpg'
import qualityHardness from '../assets/quality-hardness.jpg'
import qualityCnc from '../assets/quality-cnc.jpg'
import qualitySamples from '../assets/quality-samples.jpg'
import qualityPolishing from '../assets/quality-polishing.jpg'
import { CTASection } from '../components/CTASection'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { certifications } from '../data/siteData'
import { useSeo } from '../hooks/useSeo'

const processSteps = [
  { step: 'Melting', icon: Flame, desc: 'Precise melt chemistry control for target nodularity & mechanical properties' },
  { step: 'Casting', icon: Cylinder, desc: 'Advanced centrifugal casting ensures uniform wall thickness & microstructure' },
  { step: 'Annealing', icon: Thermometer, desc: 'Controlled heat treatment improves ductility and eliminates internal stresses' },
  { step: 'Machining', icon: Settings, desc: 'CNC-enabled socket and spigot machining for precise dimensional tolerances' },
  { step: 'Coating', icon: Layers, desc: 'Multi-stage internal lining and external coating applied under quality control' },
  { step: 'Testing', icon: FlaskConical, desc: 'Comprehensive hydrostatic, tensile, hardness and dimensional verification' },
  { step: 'Dispatch', icon: Truck, desc: 'Fully documented and third-party inspected consignments shipped to site' },
]

const inProcessChecks = [
  { label: 'Raw Material Verification', detail: 'Chemical composition analysis of pig iron, scrap, and alloys before charging' },
  { label: 'Molten Metal Testing', detail: 'Spectrometric analysis at tapping stage to verify carbon, silicon, and magnesium levels' },
  { label: 'Casting Inspection', detail: 'Dimensional and visual checks on every pipe as it exits the casting machine' },
  { label: 'Annealing Verification', detail: 'Temperature-cycle logging and post-anneal hardness verification on each heat' },
  { label: 'Coating Thickness Check', detail: 'Wet film gauge and cure adhesion tests on internal lining and external coating' },
]

const finishedTests = [
  { icon: Droplets, label: 'Hydrostatic Pressure Test', detail: 'Every pipe hydrostatically tested to BS EN 545 / ISO 2531 pressure requirements' },
  { icon: Ruler, label: 'Dimensional Inspection', detail: 'Bore, OD, wall thickness, socket depth measured against drawing tolerances' },
  { icon: Weight, label: 'Tensile & Elongation', detail: 'Specimen rings tested on Universal Testing Machine (UTM) per BS EN 545' },
  { icon: Gauge, label: 'Brinell Hardness (BHN)', detail: 'Hardness testing verifies correct microstructure and annealing quality' },
  { icon: BadgeCheck, label: 'Load Testing — Covers', detail: 'Full BS EN 124 load-class proof testing for all manhole covers & gratings' },
  { icon: Microscope, label: 'Metallurgical Analysis', detail: 'Nodularity count and graphite morphology verified by optical microscopy' },
]

const whyQualityPoints = [
  {
    title: 'Reduced Project Risk',
    description: 'Third-party-verified test certificates eliminate the risk of non-compliant material reaching site — protecting programme timelines and client liability.',
  },
  {
    title: 'Full Traceability',
    description: 'Heat number, production date, test data, and inspection records are traceable from raw material to installed pipe — accessible digitally on demand.',
  },
  {
    title: 'Standards Compliance',
    description: 'Every product conforms to the applicable BS EN or ISO standard, backed by documentation accepted by UK water utilities and regulatory bodies.',
  },
  {
    title: 'Long-Term Performance',
    description: 'Rigorous quality control at manufacture translates to 100+ year service life — eliminating early failures and reducing whole-life infrastructure costs.',
  },
]

export function QualityPage() {
  useSeo({
    title: 'Quality & Certifications | Rashmi Metaliks UK Ltd.',
    description: 'Precision tested to BS EN 545, EN 598, EN 124, and ISO standards — design, in-process, and finished product quality assurance at every stage.',
  })

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-slate-950 pb-14 pt-20 text-white sm:pb-20 sm:pt-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-amber-600/10 blur-[100px]" />
        <div className="section-shell relative">
          <p className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-amber-400">Quality Assurance</p>
          <h1 className="font-display mt-4 max-w-4xl text-3xl leading-tight text-white sm:text-4xl md:text-6xl">
            Precision Tested. Globally Trusted.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8">
            Quality at Rashmi Metaliks is not a final inspection — it is an integrated commitment embedded across every stage of design, manufacturing, and testing. Every product leaving our Kharagpur facility is verified to meet or exceed the exacting requirements of BS EN, ISO, and UK Water Industry standards.
          </p>
        </div>
      </section>

      {/* ── Design & Engineering Excellence ── */}
      <section className="py-24 bg-white">
        <div className="section-shell">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div>
                <SectionHeader
                  label="Design & Engineering"
                  title="Design & Engineering Excellence"
                />
                <p className="mt-5 text-sm leading-8 text-slate-600">
                  Our products begin with precision engineering. Using AutoCAD and PTC Creo, our design team models every pipe, fitting, and cover to exact dimensional tolerances — then validates each design through finite element stress analysis before pattern creation.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'AutoCAD & PTC Creo 3D modelling for pipes, fittings, and covers',
                    'Finite element analysis (FEA) for stress and load validation',
                    'CNC-enabled pattern shops ensuring sub-millimetre repeatability',
                    'Socket and spigot profiles machined to BS EN 545 / ISO 2531 tolerances',
                    'Dedicated R&D team for new product development and standard updates',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                      <CheckCircle size={15} className="mt-0.5 shrink-0 text-amber-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="grid grid-cols-2 gap-3 h-80">
                <div className="overflow-hidden rounded-2xl row-span-2">
                  <img src={qualityCnc} alt="CNC machining centre at Rashmi Metaliks" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img src={qualitySpectrometer} alt="Spectrometric analysis of metal composition" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img src={qualityHardness} alt="Brinell hardness testing machine" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── In-Process Quality Control ── */}
      <section className="border-t border-b border-slate-100 bg-slate-50 py-20">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              label="In-Process Quality Control"
              title="Quality Controlled at Every Production Stage"
              subtitle="From raw material receipt to final annealing, our in-process controls ensure zero deviation from specification before any product reaches the finishing stage."
              centered
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {inProcessChecks.map((check, idx) => (
              <Reveal key={check.label} delay={idx * 0.05}>
                <div className="flex flex-col gap-3 rounded-2xl border border-white bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-600 font-condensed text-xs font-bold text-white">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="font-condensed text-sm font-bold uppercase tracking-[0.08em] text-slate-900">{check.label}</p>
                  </div>
                  <p className="text-sm leading-7 text-slate-500">{check.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {/* In-process testing photos */}
          <Reveal delay={0.1}>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
              <div className="overflow-hidden rounded-2xl">
                <img src={qualitySpectrometer} alt="Spectrometric composition analysis" className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img src={qualitySamples} alt="Material test samples — density and composition" className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="overflow-hidden rounded-2xl hidden md:block">
                <img src={qualityPolishing} alt="Metallographic polishing for microstructure analysis" className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Finished Product Testing ── */}
      <section className="py-24 bg-white">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              label="Finished Product Testing"
              title="Comprehensive Testing Before Every Dispatch"
              subtitle="No pipe, fitting, or cover leaves our facility without passing a full suite of finished product tests — individually for pipes, batch-based for fittings and covers."
              centered
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {finishedTests.map((test, idx) => {
              const Icon = test.icon
              return (
                <Reveal key={test.label} delay={idx * 0.05}>
                  <article className="group flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:border-amber-200 hover:bg-amber-50/20">
                    <span className="inline-flex w-fit rounded-xl border border-amber-200 bg-white p-3 text-amber-700 shadow-sm group-hover:bg-amber-100 transition">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-condensed text-sm font-bold uppercase tracking-[0.08em] text-slate-900">{test.label}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-500">{test.detail}</p>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Manufacturing Process Flow ── */}
      <section className="border-t border-slate-100 bg-slate-950 py-20 text-white">
        <div className="section-shell">
          <Reveal>
            <div className="text-center">
              <p className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Manufacturing Process</p>
              <h2 className="font-display mt-3 text-3xl leading-tight text-white md:text-5xl">
                From Melt to Dispatch
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-slate-400">
                Seven tightly controlled stages — each with defined quality gates — ensure consistency from raw material to finished product.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {processSteps.map((s, idx) => {
              const Icon = s.icon
              return (
                <Reveal key={s.step} delay={idx * 0.06}>
                  <div className="relative flex flex-col items-center text-center">
                    {/* connector line (desktop) */}
                    {idx < processSteps.length - 1 && (
                      <div className="absolute left-1/2 top-7 hidden h-px w-full translate-x-7 bg-amber-800/40 xl:block" />
                    )}
                    <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-800/40 bg-amber-900/20 text-amber-400">
                      <Icon size={22} />
                    </span>
                    <p className="mt-3 font-condensed text-xs font-bold uppercase tracking-[0.12em] text-amber-400">{String(idx + 1).padStart(2, '0')}</p>
                    <p className="font-condensed mt-1 text-sm font-bold text-white">{s.step}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">{s.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="bg-slate-50 py-20">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              label="Standards & Certifications"
              title="Certified to the Standards That Matter"
              subtitle="Full compliance with UK, European, and international standards — documented and third-party verified on every export consignment."
              centered
            />
          </Reveal>

          {/* DWI Featured Card */}
          <Reveal delay={0.05}>
            <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 p-8 text-white shadow-xl md:p-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-center">
                <div className="flex shrink-0 flex-col items-center gap-3 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-blue-400/40 bg-blue-500/15 shadow-[0_0_30px_rgba(59,130,246,0.25)]">
                    <Droplets size={34} className="text-blue-400" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/15 px-3 py-1 font-condensed text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
                    <Star size={9} fill="currentColor" /> Featured Approval
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-condensed text-[10px] font-bold uppercase tracking-[0.22em] text-blue-400">Drinking Water Inspectorate — UK</p>
                  <h3 className="font-display mt-2 text-2xl text-white md:text-3xl">DWI Approved Vendor</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                    Rashmi Metaliks holds DWI approval for its Ductile Iron Pipes and Fittings — the UK's most stringent benchmark for products in contact with potable water. Our advanced metallurgical processes and uncompromising quality control ensure every pipe and fitting is safe for drinking water infrastructure, accepted by all major UK water utilities.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {['Potable Water Contact Approved', 'UK Water Utilities Accepted', 'Public Health Compliant', 'Ofwat Infrastructure Ready'].map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1.5 rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-1 font-condensed text-[10px] font-bold uppercase tracking-[0.1em] text-blue-300">
                        <CheckCircle size={10} /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, idx) => (
              <Reveal key={cert.code} delay={idx * 0.05}>
                <div className="flex items-start gap-4 rounded-2xl border border-white bg-white p-6 shadow-sm">
                  <span className="mt-0.5 inline-flex shrink-0 rounded-full border border-amber-200 bg-amber-50 p-2 text-amber-700">
                    <ShieldCheck size={18} />
                  </span>
                  <div className="flex-1">
                    <p className="font-condensed text-base font-bold uppercase tracking-[0.1em] text-slate-900">{cert.code}</p>
                    <p className="mt-1.5 text-xs leading-6 text-slate-500">{cert.description}</p>
                  </div>
                  <button
                    aria-label={`Download ${cert.code} certificate`}
                    className="mt-0.5 inline-flex shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-400 transition hover:border-amber-300 hover:text-amber-600"
                  >
                    <Download size={14} />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Quality Matters ── */}
      <section className="py-20 bg-white">
        <div className="section-shell">
          <Reveal>
            <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-12 text-white overflow-hidden relative">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-600/15 blur-3xl" />
              <div className="relative">
                <p className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Why It Matters</p>
                <h2 className="font-display mt-3 text-3xl leading-snug text-white md:text-4xl">Why Quality Matters to Our Clients</h2>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300">
                  Infrastructure failures are costly, disruptive, and sometimes irreversible. Our quality assurance system exists to make failure a non-event — giving clients the confidence to specify Rashmi Metaliks products on their most critical projects.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {whyQualityPoints.map((point, idx) => (
                    <div key={point.title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-600/20 font-condensed text-xs font-bold text-amber-400">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-condensed text-sm font-bold uppercase tracking-[0.08em] text-white">{point.title}</h3>
                      <p className="text-xs leading-6 text-slate-400">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Let's Discuss Your Project Requirements"
        description="Contact our UK technical team to receive full product certifications, test standards, and compliance documentation for your project."
      />
    </>
  )
}
