import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../utils/gtm'

export function GtmPageTracker() {
  const location = useLocation()

  useEffect(() => {
    const page_path = `${location.pathname}${location.search}`
    trackPageView({
      page_path,
      page_title: document.title,
    })
  }, [location.pathname, location.search])

  return null
}
