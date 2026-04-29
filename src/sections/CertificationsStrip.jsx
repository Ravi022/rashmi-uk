import { ShieldCheck } from 'lucide-react'
import { Reveal } from '../components/Reveal'

export function CertificationsStrip({ certifications }) {
  return (
    <section className="border-y border-slate-200 bg-white py-14">
      <div className="section-shell">
        <Reveal>
          <p className="mb-8 text-center font-condensed text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
            Standards &amp; Certifications
          </p>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <Reveal key={cert.code} delay={idx * 0.04}>
              <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3">
                <ShieldCheck size={16} className="mt-0.5 shrink-0 text-amber-600" />
                <div>
                  <span className="font-condensed text-sm font-bold uppercase tracking-[0.08em] text-slate-900">{cert.code}</span>
                  <p className="mt-0.5 text-xs leading-5 text-slate-500">{cert.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
