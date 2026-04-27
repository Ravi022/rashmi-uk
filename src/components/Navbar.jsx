import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/products', 'Products'],
  ['/quality', 'Quality'],
  ['/sustainability', 'Sustainability'],
  ['/global-presence', 'Global Presence'],
  ['/downloads', 'Downloads'],
  ['/contact', 'Contact'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 transition-shadow ${scrolled ? 'shadow-lg shadow-slate-950/10' : ''} border-b border-slate-200 bg-white/95 backdrop-blur`}>
      <div className="section-shell flex h-16 items-center justify-between">
        {/* logo */}
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-bold text-slate-900">Rashmi Metaliks</span>
          <span className="font-condensed text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700">UK Ltd.</span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `rounded px-3 py-2 font-condensed text-[11px] font-bold uppercase tracking-[0.1em] transition ${
                  isActive
                    ? 'bg-amber-50 text-amber-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA button */}
        <Link
          to="/contact"
          className="bronze-glow hidden rounded-lg bg-amber-700 px-5 py-2.5 font-condensed text-[11px] font-bold uppercase tracking-[0.1em] text-white lg:inline-flex"
        >
          Get in Touch
        </Link>

        {/* mobile toggle */}
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="section-shell flex flex-col gap-1 py-4">
              {links.map(([to, label]) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 font-condensed text-sm font-bold uppercase tracking-[0.08em] transition ${
                      isActive ? 'bg-amber-50 text-amber-700' : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-3 rounded-lg bg-amber-700 px-4 py-3 text-center font-condensed text-sm font-bold uppercase tracking-[0.1em] text-white"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
