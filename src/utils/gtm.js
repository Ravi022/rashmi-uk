const GTM_ID = import.meta.env.VITE_GTM_ID?.trim();

const routeNames = {
  '/': 'Home',
  '/about': 'About',
  '/products': 'Products',
  '/quality': 'Quality',
  '/sustainability': 'Sustainability',
  '/global-presence': 'Global Presence',
  '/contact': 'Contact',
}

function getPageName(pathname) {
  if (routeNames[pathname]) return routeNames[pathname]
  if (pathname.startsWith('/products/')) {
    const slug = pathname.split('/').filter(Boolean).pop()
    return `Product: ${slug}`
  }
  return pathname
}

export function isGtmEnabled() {
  return Boolean(GTM_ID)
}

export function pushToDataLayer(payload) {
  if (!isGtmEnabled() || typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
}

export function trackPageView({ page_path, page_title }) {
  if (!isGtmEnabled()) return

  const page_location = `${window.location.origin}${page_path}`
  const page_name = getPageName(page_path.split('?')[0])

  pushToDataLayer({
    event: 'page_view',
    page_path,
    page_location,
    page_title,
    page_name,
    page_referrer: document.referrer || undefined,
  })
}

export function trackEvent(event, params = {}) {
  pushToDataLayer({
    event,
    ...params,
  })
}
