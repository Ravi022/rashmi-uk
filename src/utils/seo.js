export function setMeta({ title, description }) {
  document.title = title
  const ensure = (selector, create) => {
    let el = document.querySelector(selector)
    if (!el) {
      el = create()
      document.head.appendChild(el)
    }
    return el
  }

  const metaDesc = ensure('meta[name="description"]', () => {
    const m = document.createElement('meta')
    m.name = 'description'
    return m
  })
  metaDesc.content = description

  const ogTitle = ensure('meta[property="og:title"]', () => {
    const m = document.createElement('meta')
    m.setAttribute('property', 'og:title')
    return m
  })
  ogTitle.content = title

  const ogDesc = ensure('meta[property="og:description"]', () => {
    const m = document.createElement('meta')
    m.setAttribute('property', 'og:description')
    return m
  })
  ogDesc.content = description
}
