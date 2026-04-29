import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Link2, ExternalLink } from 'lucide-react'

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
  ['/downloads', 'Downloads'],
  ['/contact', 'Contact Us'],
]

const certBadges = ['BS EN 545', 'BS EN 598', 'ISO 2531', 'ISO 9001', 'ISO 14001', 'BS EN 124']

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* main footer grid */}
      <div className="section-shell py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-display text-xl font-bold text-white">Rashmi Metaliks</span>
              <span className="ml-2 font-condensed text-xs uppercase tracking-[0.2em] text-amber-500">UK</span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Rashmi Metaliks UK Ltd. — supplying world-class ductile iron pipes, fittings, and infrastructure solutions to the United Kingdom. Part of the USD 5 billion Rashmi Group.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-amber-600 hover:text-amber-400"
              >
                <Link2 size={15} />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter / X"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-amber-600 hover:text-amber-400"
              >
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* products */}
          <div>
            <h4 className="font-condensed text-xs font-bold uppercase tracking-[0.16em] text-white">Products</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {productLinks.map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-slate-400 transition hover:text-amber-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* company */}
          <div>
            <h4 className="font-condensed text-xs font-bold uppercase tracking-[0.16em] text-white">Company</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {companyLinks.map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-slate-400 transition hover:text-amber-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="font-condensed text-xs font-bold uppercase tracking-[0.16em] text-white">Contact</h4>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin size={14} className="mt-0.5 shrink-0 text-amber-600" />
                Suite 102, Oceanair House, 750–760 High Road, Leytonstone, London, E11 3AW
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Phone size={14} className="shrink-0 text-amber-600" />
                +44 (0) 123 456 7890
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail size={14} className="shrink-0 text-amber-600" />
                info@rashmimetaliks.co.uk
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* certifications strip */}
      <div className="border-t border-slate-800 py-6">
        <div className="section-shell flex flex-wrap items-center gap-3">
          <span className="font-condensed text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 mr-2">Certified:</span>
          {certBadges.map((badge) => (
            <span
              key={badge}
              className="rounded border border-slate-700 bg-slate-900 px-2.5 py-1 font-condensed text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* copyright */}
      <div className="border-t border-slate-800 py-5">
        <div className="section-shell flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">
            © {year} Rashmi Metaliks UK Ltd. All rights reserved. Company registered in England & Wales.
          </p>
          <p className="text-xs text-slate-600">
            Part of the{' '}
            <span className="text-slate-500">Rashmi Group</span>
            {' '}— World's 2nd Largest DI Pipe Manufacturer.
          </p>
        </div>
      </div>
    </footer>
  )
}
