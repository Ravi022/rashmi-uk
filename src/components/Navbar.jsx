import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import rashmiMetaliksLogo from '../assets/Logo-01.png'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/products', 'Products'],
  ['/quality', 'Quality'],
  ['/sustainability', 'Sustainability'],
  ['/global-presence', 'Global Presence'],
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
    <>
      <header className={`sticky top-0 z-40 transition-shadow ${scrolled ? 'shadow-lg shadow-slate-950/10' : ''} border-b border-slate-200 bg-white/95 backdrop-blur`}>
      <div className="section-shell flex items-center justify-between gap-3 py-0.5 sm:gap-4 sm:py-1">
        {/* logo — stack on very narrow viewports to avoid horizontal overflow */}
        <Link to="/" className="inline-flex min-w-0 shrink-0 items-center -ml-2 -mt-1 lg:-ml-4 lg:-mt-1.5">
          <img
            src={rashmiMetaliksLogo}
            alt="Rashmi Metaliks UK Ltd."
            className="h-10 w-auto max-w-[min(100%,16rem)] sm:h-12 md:h-14 lg:h-14"
          />
        </Link>

        {/* desktop nav */}
        <nav className="hidden flex-1 justify-evenly items-center lg:flex">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `rounded px-3 py-2 font-condensed text-[13px] font-bold uppercase tracking-[0.1em] transition ${
                  isActive
                    ? 'bg-red-50 text-red-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>



        {/* mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 touch-manipulation lg:hidden"
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
                      isActive ? 'bg-red-50 text-red-600' : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-3 rounded-lg bg-red-600 px-4 py-3 text-center font-condensed text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-red-700"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>

      {/* CTA button - Floating bottom right */}
      <Link
        to="/contact"
        className="bronze-glow fixed bottom-5 right-5 z-50 rounded bg-red-600 px-3 py-2 font-condensed text-[10px] font-bold uppercase tracking-[0.05em] text-white shadow-lg hover:bg-red-700"
      >
        Get in Touch
      </Link>
    </>
  )
}
