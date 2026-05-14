import { ChevronUp } from 'lucide-react'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function scrollWindowToTop() {
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export function ScrollToTop() {
  const [show, setShow] = useState(false)
  const { pathname } = useLocation()

  // Run before paint so route changes always start at the top (mobile + desktop)
  useLayoutEffect(() => {
    scrollWindowToTop()
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-16 right-5 z-50 rounded bg-red-600 p-2 text-white shadow-lg transition ${show ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <ChevronUp size={14} />
    </button>
  )
}
