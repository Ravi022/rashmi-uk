import { Link } from 'react-router-dom'
import { MapPin, Mail } from 'lucide-react'
import rashmiMetaliksFooterLogo from '../assets/Logo-01.png'

const productLinks = [
  ['/products/di-pipes', 'DI Pipes'],
  ['/products/di-fittings', 'DI Fittings'],
  ['/products/di-flanged-pipes', 'DI Flanged Pipes'],
  ['/products/di-manhole-covers', 'DI Manhole Covers'],
  ['/products', 'All Products'],
]

const companyLinks = [
  ['/about', 'About Us'],
  ['/quality', 'Quality & Certifications'],
  ['/sustainability', 'Sustainability'],
  ['/global-presence', 'Global Presence'],
  ['/contact', 'Contact Us'],
]

const certBadges = ['BS EN 545', 'BS EN 598', 'ISO 2531', 'ISO 9001', 'ISO 14001', 'BS EN 124']

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-red-600 bg-slate-950 text-white">

      {/* ── Main grid ── */}
      <div className="section-shell py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="flex items-center rounded-xl border border-slate-700 bg-white px-4 py-2.5">
                <img
                  src={rashmiMetaliksFooterLogo}
                  alt="Rashmi Metaliks UK Ltd."
                  className="h-10 w-auto object-contain sm:h-12"
                />
              </span>
            </Link>
            <div className="mt-4 h-px w-10 bg-red-600" />
            <p className="mt-3 max-w-xs text-xs leading-6 text-slate-300">
              Rashmi Metaliks UK Ltd. — world-class ductile iron pipes &amp; fittings for UK infrastructure. Part of the USD&nbsp;5B Rashmi Group.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="border-b border-slate-800 pb-2 font-condensed text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              Products
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {productLinks.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-xs text-white transition hover:text-red-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="border-b border-slate-800 pb-2 font-condensed text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {companyLinks.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-xs text-white transition hover:text-red-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="border-b border-slate-800 pb-2 font-condensed text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              Contact
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-2 text-xs text-white leading-5">
                <MapPin size={13} className="mt-0.5 shrink-0 text-red-500" />
                Suite 102, Oceanair House, 750–760 High Road, Leytonstone, London, E11 3AW
              </li>
              <li className="flex items-center gap-2 text-xs text-white">
                <Mail size={13} className="shrink-0 text-red-500" />
                <a href="mailto:info.uk@rashmigroup.com" className="transition hover:text-red-400">
                  info.uk@rashmigroup.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs text-white">
                <Mail size={13} className="shrink-0 text-red-500" />
                <a href="mailto:mahesh.agarwal@rashmigroup.com" className="transition hover:text-red-400">
                  mahesh.agarwal@rashmigroup.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Certifications strip ── */}
      <div className="border-t border-slate-800 py-4">
        <div className="section-shell flex flex-wrap items-center gap-2">
          <span className="font-condensed text-[9px] font-bold uppercase tracking-[0.16em] text-red-400">
            Certified:
          </span>
          {certBadges.map((badge) => (
            <span
              key={badge}
              className="rounded border border-red-600/50 bg-red-600/10 px-2 py-0.5 font-condensed text-[9px] font-bold uppercase tracking-[0.1em] text-red-400"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="border-t border-slate-800 py-4">
        <div className="section-shell flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-slate-300">
            © {year} Rashmi Metaliks UK Limited. All rights reserved. Registered in England &amp; Wales.
          </p>
          <p className="text-[11px] text-slate-300">
            Part of the <span className="text-red-400 font-medium">Rashmi Group</span> — World's 2nd Largest DI Pipe Manufacturer.
          </p>
        </div>
      </div>

    </footer>
  )
}
