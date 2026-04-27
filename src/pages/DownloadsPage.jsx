import { Download, FileText, ShieldCheck, Leaf, Globe2, FlaskConical } from 'lucide-react'
import { CTASection } from '../components/CTASection'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { useSeo } from '../hooks/useSeo'

const downloadCategories = [
  {
    icon: FileText,
    category: 'Product Data Sheets',
    description: 'Detailed technical specifications, dimensional drawings, and application guides for all Rashmi Metaliks UK products.',
    items: [
      { title: 'DI Pipes — Technical Data Sheet', subtitle: 'BS EN 545 / ISO 2531 | DN 80–DN 1200', tag: 'PDF' },
      { title: 'DI Fittings — Technical Data Sheet', subtitle: 'EN 545 / EN 598 | DN 80–DN 1600', tag: 'PDF' },
      { title: 'DI Flanged Pipes — Technical Data Sheet', subtitle: 'PN 10–40 | Welded, Screwed, Puddled', tag: 'PDF' },
      { title: 'DI Manhole Covers & Gratings — Data Sheet', subtitle: 'BS EN 124 | Load Classes A15–F900', tag: 'PDF' },
    ],
  },
  {
    icon: ShieldCheck,
    category: 'Certifications & Standards',
    description: 'Certificate copies, test standards documentation, and compliance declarations for UK and international projects.',
    items: [
      { title: 'BS EN 545 Compliance Certificate', subtitle: 'Ductile Iron Pipes — Water Pipelines', tag: 'PDF' },
      { title: 'BS EN 598 Compliance Certificate', subtitle: 'Ductile Iron Pipes — Sewerage', tag: 'PDF' },
      { title: 'BS EN 124 Compliance Certificate', subtitle: 'Manhole Covers & Gully Tops', tag: 'PDF' },
      { title: 'ISO 9001 Quality Management Certificate', subtitle: 'Third-party certified QMS', tag: 'PDF' },
      { title: 'ISO 14001 Environmental Certificate', subtitle: 'Environmental Management System', tag: 'PDF' },
    ],
  },
  {
    icon: FlaskConical,
    category: 'Quality & Testing Documents',
    description: 'Sample mill test certificates, hydrostatic test formats, and inspection documentation templates.',
    items: [
      { title: 'Sample Mill Test Certificate', subtitle: 'DI Pipes — Chemical & Mechanical Properties', tag: 'PDF' },
      { title: 'Hydrostatic Test Record — Sample', subtitle: 'Per BS EN 545 requirements', tag: 'PDF' },
      { title: 'Third-Party Inspection Protocol', subtitle: 'SGS / Bureau Veritas / TÜV formats', tag: 'PDF' },
      { title: 'Coating Inspection Report — Sample', subtitle: 'Internal lining & external coating', tag: 'PDF' },
    ],
  },
  {
    icon: Leaf,
    category: 'Sustainability Documents',
    description: 'Environmental product declarations, lifecycle assessment data, and sustainability performance reports.',
    items: [
      { title: 'Sustainability Overview Brochure', subtitle: 'Energy, water, waste & CSR data', tag: 'PDF' },
      { title: 'Whole-Life Cost Analysis — DI Pipes', subtitle: '100-year lifecycle cost model', tag: 'PDF' },
      { title: 'Environmental Performance Summary', subtitle: 'ISO 14001 | Annual data', tag: 'PDF' },
    ],
  },
  {
    icon: Globe2,
    category: 'Company & Commercial',
    description: 'Company overview brochure, capability statements, and commercial documentation for procurement teams.',
    items: [
      { title: 'Company Overview Brochure', subtitle: 'Rashmi Metaliks UK Ltd. — Full Capability', tag: 'PDF' },
      { title: 'UK Product Range Catalogue', subtitle: 'All products, specifications & standards', tag: 'PDF' },
      { title: 'Capability Statement', subtitle: 'For framework bid and tender submissions', tag: 'PDF' },
    ],
  },
]

export function DownloadsPage() {
  useSeo({
    title: 'Downloads | Rashmi Metaliks UK Ltd.',
    description: 'Download product data sheets, certifications, quality documents, and sustainability reports from Rashmi Metaliks UK Ltd.',
  })

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-slate-950 pb-20 pt-24 text-white">
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
          <p className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-amber-400">Resource Library</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-tight text-white md:text-6xl">
            Technical Downloads & Documentation
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Access product data sheets, certifications, quality documentation, sustainability reports, and commercial brochures — everything you need to specify and procure Rashmi Metaliks UK products with confidence.
          </p>
        </div>
      </section>

      {/* ── Download Categories ── */}
      {downloadCategories.map((category, catIdx) => {
        const Icon = category.icon
        return (
          <section
            key={category.category}
            className={`border-t border-slate-100 py-16 ${catIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="section-shell">
              <Reveal>
                <div className="mb-8 flex items-center gap-4">
                  <span className="inline-flex rounded-xl border border-amber-200 bg-amber-50 p-3 text-amber-700">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl text-slate-900">{category.category}</h2>
                    <p className="mt-1 text-sm text-slate-500">{category.description}</p>
                  </div>
                </div>
              </Reveal>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, idx) => (
                  <Reveal key={item.title} delay={idx * 0.04}>
                    <div className="group flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-amber-300 hover:shadow-sm">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-900 group-hover:text-amber-700 transition">{item.title}</p>
                        <p className="mt-1 text-xs text-slate-400">{item.subtitle}</p>
                        <span className="mt-2 inline-block rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-condensed text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">
                          {item.tag}
                        </span>
                      </div>
                      <button
                        aria-label={`Download ${item.title}`}
                        className="mt-0.5 inline-flex shrink-0 items-center justify-center rounded-lg border border-amber-200 bg-amber-50 p-2 text-amber-700 transition hover:bg-amber-100"
                      >
                        <Download size={15} />
                      </button>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <CTASection
        title="Need a Document Not Listed Here?"
        description="Contact our UK team to request specific test certificates, third-party inspection reports, or custom documentation for your project procurement."
      />
    </>
  )
}
