import { Download, ExternalLink, FileText } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { useSeo } from '../hooks/useSeo'
import { trackEvent } from '../utils/gtm'

const brochures = {
  'manhole-cover': {
    title: 'Ductile Iron Manhole Cover Brochure',
    subtitle: 'Heavy-duty cast iron access covers compliant with BS EN 124 — Class A15 to F900.',
    fileUrl: '/files/Manhole_Cover_Brouchure.pdf',
    downloadName: 'Rashmi-Manhole-Cover-Brochure.pdf',
    backTo: { label: 'View DI Manhole Covers', href: '/products/di-manhole-covers' },
  },
  'di-pipes': {
    title: 'Ductile Iron Pipes Brochure',
    subtitle: 'Centrifugally cast DI pipes for water and wastewater infrastructure — BS EN 545, ISO 2531.',
    fileUrl: '/files/RML_DI_Brouchure.pdf',
    downloadName: 'Rashmi-DI-Pipes-Brochure.pdf',
    backTo: { label: 'View DI Pipes', href: '/products/di-pipes' },
  },
}

export function BrochurePage({ brochureKey }) {
  const brochure = brochures[brochureKey]
  const [previewError, setPreviewError] = useState(false)

  useSeo({
    title: brochure
      ? `${brochure.title} | Rashmi Metaliks UK Limited`
      : 'Brochure | Rashmi Metaliks UK Limited',
    description: brochure ? brochure.subtitle : 'Download our product brochures.',
  })

  const previewUrl = useMemo(
    () => (brochure ? `${brochure.fileUrl}#toolbar=0&navpanes=0&view=FitH` : ''),
    [brochure],
  )

  if (!brochure) {
    return (
      <section className="bg-white py-20">
        <div className="section-shell text-center">
          <SectionHeader label="Brochure" title="Brochure not found" centered />
          <p className="mt-4 text-slate-600">
            The brochure you’re looking for isn’t available right now.
          </p>
          <Link
            to="/products"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded bg-amber-700 px-6 py-3 font-condensed text-sm uppercase tracking-[0.08em] text-white"
          >
            Back to products
          </Link>
        </div>
      </section>
    )
  }

  const handleDownload = () => {
    trackEvent('brochure_download', {
      brochure_key: brochureKey,
      brochure_title: brochure.title,
      file_url: brochure.fileUrl,
    })
  }

  return (
    <section className="relative bg-slate-50 py-10 sm:py-14">
      <div className="section-shell">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <p className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Brochure
              </p>
              <h1 className="mt-2 font-display text-3xl leading-tight text-slate-900 sm:text-4xl">
                {brochure.title}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                {brochure.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={brochure.fileUrl}
                download={brochure.downloadName}
                onClick={handleDownload}
                className="bronze-glow inline-flex shrink-0 items-center justify-center gap-2 rounded bg-amber-700 px-6 py-3 font-condensed text-sm uppercase tracking-[0.08em] text-white touch-manipulation"
              >
                <Download size={16} /> Download PDF
              </a>
              <a
                href={brochure.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded border border-slate-300 bg-white px-5 py-3 font-condensed text-sm uppercase tracking-[0.08em] text-slate-700 transition hover:border-amber-600 hover:text-amber-700"
              >
                <ExternalLink size={16} /> Open in new tab
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {previewError ? (
              <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
                <FileText size={36} className="text-slate-400" />
                <p className="max-w-md text-sm text-slate-700">
                  Your browser can’t display this PDF inline. Use the buttons above to download
                  it or open it in a new tab.
                </p>
              </div>
            ) : (
              <iframe
                key={previewUrl}
                src={previewUrl}
                title={brochure.title}
                className="h-[70vh] min-h-[480px] w-full"
                onError={() => setPreviewError(true)}
              />
            )}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Tip: on mobile devices the inline preview may not load. Use “Download PDF” or “Open in new tab”.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm">
            <Link
              to={brochure.backTo.href}
              className="font-condensed uppercase tracking-[0.08em] text-amber-700 hover:underline"
            >
              ← {brochure.backTo.label}
            </Link>
            <Link
              to="/contact"
              className="font-condensed uppercase tracking-[0.08em] text-slate-700 hover:text-amber-700"
            >
              Need a quotation? Contact our UK team →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
