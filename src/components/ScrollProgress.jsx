import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const value = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      setProgress(value)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed left-0 top-0 z-[90] h-[2px] origin-left bg-amber-600/70"
      style={{
        width: `${progress}%`,
        transition: 'width 80ms linear',
      }}
    />
  )
}
