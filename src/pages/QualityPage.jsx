import { useEffect, useState } from 'react'
import {
  FlaskConical, Layers, ScanLine, BadgeCheck, Microscope, FileCheck,
  ShieldCheck, Cpu,
  CheckCircle, Ruler, Gauge, Droplets, Weight, Star, Globe2, X,
} from 'lucide-react'
import qualityCnc from '../assets/quality-cnc.jpg'
import qualityHeroBg from '../assets/quality-hero-bg.png'
import qualityLab1 from '../assets/quality-lab-1.png'
import qualityLab2 from '../assets/quality-lab-2.png'
import qualityLab3 from '../assets/quality-lab-3.png'
import qualityLab4 from '../assets/quality-lab-4.png'
import qualityLabPhysicalPress from '../assets/quality-lab-physical-press.png'
import qualityLab6 from '../assets/quality-lab-6.png'
import qualityLab7 from '../assets/quality-lab-7.png'
import qualityLab8 from '../assets/quality-lab-8.png'
import qualityLab9 from '../assets/quality-lab-9.png'
import qualityLab10 from '../assets/quality-lab-10.png'
import qualityLab11 from '../assets/quality-lab-11.png'
import qualityLab12 from '../assets/quality-lab-12.png'
import dwiBannerImg from '../assets/dwi-quality-bg.png'
import diPipesImg from '../assets/pipes-blue-outdoor.jpg'
import fittingsImg from '../assets/fittings-blue-flanged.png'
import didfPipeImg from '../assets/flanged-red-pipe-end.jpg'
import certBisLicenseExtension from '../assets/cert-bis-license-extension.png'
import certIso9001 from '../assets/cert-iso-9001.png'
import certIso14001 from '../assets/cert-iso-14001.png'
import certIso45001 from '../assets/cert-iso-45001.png'
import certBsiKitemarkEn545 from '../assets/cert-bsi-kitemark-en545.png'
import certBureauVeritasEn5455982010 from '../assets/cert-bureau-veritas-en545-598-2010.png'
import certBureauVeritasEn5455982006 from '../assets/cert-bureau-veritas-en545-598-2006.png'
import certBureauVeritasCoatingProcess from '../assets/cert-bureau-veritas-coating-process.png'
import certNablIso17025 from '../assets/cert-nabl-iso-17025.png'
import { CTASection } from '../components/CTASection'
import { DWIBannerBadge } from '../components/DWIBannerBadge'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { useSeo } from '../hooks/useSeo'

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

const certificateGallery = [
  { name: 'BIS Licence Extension (CM/L 5533060)', image: certBisLicenseExtension },
  { name: 'BSI ISO 9001:2015 Certificate', image: certIso9001 },
  { name: 'BSI ISO 14001:2015 Certificate', image: certIso14001 },
  { name: 'BSI ISO 45001:2018 Certificate', image: certIso45001 },
  { name: 'BSI Kitemark BS EN 545 Certificate', image: certBsiKitemarkEn545 },
  { name: 'Bureau Veritas EN 545:2010 / EN 598:2007+A1:2009', image: certBureauVeritasEn5455982010 },
  { name: 'Bureau Veritas EN 545:2006 / EN 598:1994', image: certBureauVeritasEn5455982006 },
  { name: 'Bureau Veritas Coating Process Certificate', image: certBureauVeritasCoatingProcess },
  { name: 'NABL ISO/IEC 17025:2017 Accreditation', image: certNablIso17025 },
]

const qualityLabSections = [
  {
    title: 'Design & Sand Testing',
    description: 'Pattern design support and foundry sand property verification — permeability, strength, grading, and compactability.',
    images: [
      { src: qualityLab1, alt: 'Foundry sand testing laboratory with Kelsons permeability, strength, and compactability equipment' },
      { src: qualityLab2, alt: 'Digital permeability tester and universal strength machine — Kelsons testing equipment' },
      { src: qualityLab3, alt: 'Inspectors checking large white pipe fitting dimensions with a straight edge' },
      { src: qualityLab4, alt: 'Sand siever stack and digital weighing scale for sand grading analysis' },
    ],
  },
  {
    title: 'Physical Testing',
    description: 'Composition, microstructure, hardness, hydrostatic integrity, and mechanical verification of metal and finished products.',
    images: [
      { src: qualityLab6, alt: 'Metallographic microscope and monitor showing ductile iron graphite nodules' },
      { src: qualityLab7, alt: 'Technician operating spectrometer workstation for material analysis' },
      { src: qualityLab8, alt: 'Computerised Brinell hardness testing machine in quality laboratory' },
      { src: qualityLab9, alt: 'Thickness measurement on cement-lined ductile iron pipe' },
      { src: qualityLab10, alt: 'Hydrostatic pressure test on large-diameter pipe in test rig' },
      {
        src: qualityLabPhysicalPress,
        alt: 'Industrial load press (M/C 2) performing physical proof testing on circular castings — BS EN 124 class verification in the quality laboratory',
      },
    ],
  },
  {
    title: 'Dimension Inspection',
    description: 'Field and shop-floor dimensional verification of fittings and components before release.',
    images: [
      { src: qualityLab11, alt: 'Inspector measuring large coated elbow fitting with measuring tape' },
      { src: qualityLab12, alt: 'Quality team measuring circular metal component with calipers on plant floor' },
    ],
  },
]

export function QualityPage() {
  const [certificateViewer, setCertificateViewer] = useState(null)

  useSeo({
    title: 'Quality & Certifications | Rashmi Metaliks UK Limited',
    description: 'Precision tested to BS EN 545, EN 598, EN 124, and ISO standards — design, in-process, and finished product quality assurance at every stage.',
  })

  useEffect(() => {
    if (!certificateViewer) return
    const onKey = (e) => {
      if (e.key === 'Escape') setCertificateViewer(null)
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [certificateViewer])

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[280px] overflow-hidden bg-slate-950 pb-14 pt-20 text-white sm:min-h-[320px] sm:pb-20 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={qualityHeroBg}
            alt=""
            aria-hidden
            className="h-full w-full min-h-[420px] scale-[1.07] object-cover object-[center_42%] blur-[5px] sm:min-h-[480px] sm:blur-[7px]"
          />
        </div>
        {/* Readability: darken + left-weighted scrim over vibrant red/blue scene */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/62 to-slate-950/40" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/30" />
        <DWIBannerBadge wideHeading />
        <div className="section-shell relative max-w-[min(100%,40rem)] sm:max-w-none">
          <p className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-amber-400 [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
            Quality Assurance
          </p>
          <h1 className="font-display mt-4 max-w-4xl text-3xl leading-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] sm:text-4xl md:text-6xl">
            Precision Tested. Globally Trusted.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:mt-6 sm:text-base sm:leading-8 [text-shadow:0_1px_14px_rgba(0,0,0,0.4)]">
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
              <div className="h-80 overflow-hidden rounded-2xl">
                  <img src={qualityCnc} alt="CNC machining centre at Rashmi Metaliks" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
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

      {/* ── Quality Lab Pictures (before Standards & Certifications) ── */}
      <section className="overflow-x-hidden border-t border-b border-slate-100 bg-white py-16 sm:py-20">
        <div className="section-shell">
          <Reveal>
            <SectionHeader
              label="Facility"
              title="Quality Lab Pictures"
              subtitle="Inside our quality control laboratories and inspection areas — from sand and metallurgy to physical testing and dimensional verification."
              centered
            />
          </Reveal>
        </div>

        <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20">
          {qualityLabSections.map((block, blockIdx) => (
            <div key={block.title}>
              <div className="section-shell">
                <Reveal delay={blockIdx * 0.04}>
                  <div className="mb-6 text-center sm:mb-8">
                    <h3 className="font-display text-xl text-slate-900 sm:text-2xl md:text-3xl">
                      {blockIdx + 1}. {block.title}
                    </h3>
                    <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-slate-600">{block.description}</p>
                  </div>
                </Reveal>
              </div>
              {/* Full-bleed width (full viewport with same horizontal padding as section-shell) */}
              <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 px-4 sm:px-6 lg:px-12">
                <div
                  className={`mx-auto grid w-full justify-items-stretch gap-4 sm:grid-cols-2 ${block.images.length >= 6 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}
                >
                  {block.images.map((img, i) => (
                    <Reveal key={`${block.title}-${i}`} delay={blockIdx * 0.04 + i * 0.03}>
                      <figure className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                        <div className="aspect-[4/3] h-full min-h-[12rem] w-full overflow-hidden bg-slate-100 sm:aspect-[3/2] sm:min-h-[14rem]">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          ))}
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

          {/* ── DWI Hero Card ── */}
          <Reveal delay={0.05}>
            <div className="mt-10 overflow-hidden rounded-3xl shadow-2xl">

              {/* ── Hero image panel ── */}
              <div className="relative min-h-[420px] md:min-h-[500px]">
                {/* Background image */}
                <img
                  src={dwiBannerImg}
                  alt="Source to tap — Rashmi Metaliks DI pipe infrastructure"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: 'center 40%' }}
                />
                {/* Dark gradient overlay — heavier on left for legibility */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg, rgba(2,13,31,0.92) 0%, rgba(5,26,53,0.82) 45%, rgba(10,45,82,0.35) 75%, transparent 100%)' }} />

                {/* Animated bubbles over image */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                  {[
                    { size: 8,  left: '10%', delay: '0s',   dur: '9s'  },
                    { size: 5,  left: '22%', delay: '-3s',  dur: '11s' },
                    { size: 11, left: '35%', delay: '-5s',  dur: '8s'  },
                    { size: 6,  left: '50%', delay: '-2s',  dur: '12s' },
                    { size: 9,  left: '65%', delay: '-6s',  dur: '10s' },
                    { size: 4,  left: '78%', delay: '-1s',  dur: '13s' },
                    { size: 7,  left: '88%', delay: '-4s',  dur: '9s'  },
                  ].map((b, i) => (
                    <div key={i} className="dwi-bubble absolute bottom-0 rounded-full border border-sky-300/25"
                      style={{ width: b.size, height: b.size, left: b.left, animationDuration: b.dur, animationDelay: b.delay, background: 'radial-gradient(circle at 35% 35%, rgba(186,230,255,0.45), rgba(56,189,248,0.1))' }} />
                  ))}
                  {/* Wave at bottom of image panel */}
                  <div className="absolute bottom-0 left-0 w-full" style={{ height: 60 }}>
                    <div className="dwi-wave flex" style={{ width: '200%', animationDuration: '14s' }}>
                      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ width: '50%', height: 60 }}>
                        <path d="M0,30 C200,55 400,5 600,30 C800,55 1000,5 1200,30 L1200,60 L0,60 Z" fill="rgba(56,189,248,0.12)" />
                      </svg>
                      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ width: '50%', height: 60 }}>
                        <path d="M0,30 C200,55 400,5 600,30 C800,55 1000,5 1200,30 L1200,60 L0,60 Z" fill="rgba(56,189,248,0.12)" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content overlay */}
                <div className="relative flex h-full flex-col justify-center px-8 py-12 md:max-w-[58%] md:px-14 md:py-16">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-condensed text-[10px] font-bold uppercase tracking-[0.28em] text-sky-400">Drinking Water Inspectorate — United Kingdom</p>
                      <h3 className="font-display mt-3 text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
                        DWI Approved<br />Vendor
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-8 text-slate-200 md:text-base">
                    The DWI certification is the UK's most critical benchmark for products in contact with potable water — signifying rigorous compliance with quality, safety, and material standards, ensuring every drop remains safe for public consumption.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    At Rashmi Metaliks, our state-of-the-art facilities, advanced metallurgical processes, and uncompromising quality control produce high-performance DI Pipes and Fittings — engineered to safeguard every drop, from source to tap.
                  </p>
                  <ul className="mt-5 space-y-2">
                    {[
                      'Accepted by Thames Water, Severn Trent, Anglian Water & more',
                      'Ofwat AMP8 infrastructure programmes compliant',
                      'Recognised by local & highway authorities across England & Wales',
                    ].map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-sm text-sky-100">
                        <CheckCircle size={13} className="shrink-0 text-sky-400" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* ── Our DWI Approved DI Range ── */}
              <div className="border-t border-slate-200 bg-white px-8 py-10 md:px-14">
                <div className="mb-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-200" />
                  <p className="font-condensed text-sm font-bold uppercase tracking-[0.22em] text-slate-700">Our DWI Approved DI Range</p>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <div className="grid gap-5 sm:grid-cols-3">
                  {[
                    {
                      img: diPipesImg,
                      title: 'Ductile Iron Pipes',
                      desc: 'High strength DI pipes for reliable and safe water transmission.',
                      href: '/products/di-pipes',
                    },
                    {
                      img: fittingsImg,
                      title: 'Ductile Iron Fittings',
                      desc: 'Precision engineered fittings for leak-proof, long-lasting performance.',
                      href: '/products/di-fittings',
                    },
                    {
                      img: didfPipeImg,
                      title: 'DIDF Pipes',
                      desc: 'High pressure DI pipes for demanding water infrastructure applications.',
                      href: '/products/di-pipes',
                    },
                  ].map((p) => (
                    <a key={p.title} href={p.href} className="group flex items-center gap-3 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-3 transition hover:border-sky-200 hover:bg-sky-50/40 hover:shadow-sm">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                        <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-condensed text-xs font-bold uppercase tracking-[0.1em] text-slate-900">{p.title}</p>
                        <p className="mt-0.5 text-[11px] leading-5 text-slate-500 line-clamp-2">{p.desc}</p>
                      </div>
                      <span className="shrink-0 text-sky-500 transition group-hover:translate-x-0.5">›</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* ── Trust strip ── */}
              <div className="grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-100 bg-slate-50">
                {[
                  { icon: Droplets,    title: 'Trusted by Global Markets',   sub: 'Delivering quality DI solutions worldwide.' },
                  { icon: Globe2,      title: 'Supporting UK Infrastructure', sub: 'Committed to a stronger, safer water network.' },
                  { icon: ShieldCheck, title: 'Engineered for the Future',    sub: 'Sustainable, reliable & built to endure.' },
                ].map(({ icon: Icon, title, sub }) => (
                  <div key={title} className="flex items-start gap-3 px-5 py-5 md:px-8">
                    <span className="mt-0.5 inline-flex shrink-0 rounded-full bg-sky-600 p-2 text-white">
                      <Icon size={15} />
                    </span>
                    <div>
                      <p className="font-condensed text-xs font-bold uppercase tracking-[0.08em] text-slate-800">{title}</p>
                      <p className="mt-0.5 text-[11px] leading-5 text-slate-500">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-sm sm:px-8 sm:py-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="font-condensed text-sm font-bold uppercase tracking-[0.18em] text-slate-800">
                Certificate Library
              </p>
              <p className="text-xs text-slate-500">
                Original documents shown as uploaded
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {certificateGallery.map((cert, idx) => (
                <Reveal key={cert.name} delay={idx * 0.04}>
                  <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                    <button
                      type="button"
                      onClick={() => setCertificateViewer(cert)}
                      className="w-full bg-white p-3 text-left transition hover:bg-slate-50"
                    >
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="pointer-events-none h-56 w-full rounded-lg border border-slate-200 object-contain bg-white"
                        loading="lazy"
                      />
                    </button>
                    <div className="flex items-center justify-between gap-3 border-t border-slate-200 px-4 py-3">
                      <p className="line-clamp-2 text-xs font-semibold leading-5 text-slate-800">{cert.name}</p>
                      <button
                        type="button"
                        onClick={() => setCertificateViewer(cert)}
                        className="inline-flex shrink-0 rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 transition hover:border-amber-400 hover:text-amber-700"
                      >
                        View
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Quality Matters ── */}
      <section className="py-20 bg-amber-50">
        <div className="section-shell">
          <Reveal>
            <div className="rounded-3xl bg-gradient-to-br from-amber-50 via-white to-slate-50 border border-amber-100 p-12 overflow-hidden relative shadow-sm">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
              <div className="relative">
                <p className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Why It Matters</p>
                <h2 className="font-display mt-3 text-3xl leading-snug text-slate-900 md:text-4xl">Why Quality Matters to Our Clients</h2>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600">
                  Infrastructure failures are costly, disruptive, and sometimes irreversible. Our quality assurance system exists to make failure a non-event — giving clients the confidence to specify Rashmi Metaliks products on their most critical projects.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {whyQualityPoints.map((point, idx) => (
                    <div key={point.title} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 font-condensed text-xs font-bold text-amber-700">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-condensed text-sm font-bold uppercase tracking-[0.08em] text-slate-900">{point.title}</h3>
                      <p className="text-xs leading-6 text-slate-600">{point.description}</p>
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

      {certificateViewer ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/88 p-4 backdrop-blur-sm"
          onClick={() => setCertificateViewer(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-viewer-title"
        >
          <div
            className="relative max-h-[min(92vh,900px)] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close certificate viewer"
              onClick={() => setCertificateViewer(null)}
              className="absolute -right-1 -top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-900/90 text-white shadow-lg transition hover:bg-slate-800 sm:-right-2 sm:-top-2"
            >
              <X size={20} strokeWidth={2} />
            </button>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl">
              <img
                src={certificateViewer.image}
                alt={certificateViewer.name}
                className="max-h-[min(85vh,820px)] w-full object-contain"
              />
            </div>
            <p
              id="certificate-viewer-title"
              className="mt-3 text-center text-sm font-medium leading-snug text-white sm:text-base"
            >
              {certificateViewer.name}
            </p>
          </div>
        </div>
      ) : null}
    </>
  )
}
