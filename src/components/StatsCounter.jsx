import { useEffect, useState } from 'react'

export function StatsCounter({ value, label }) {
  const target = Number.parseInt(value.replace(/[^0-9]/g, ''), 10) || 0
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let frame = 0
    const id = setInterval(() => {
      frame += Math.ceil(target / 25)
      if (frame >= target) {
        setDisplay(target)
        clearInterval(id)
      } else setDisplay(frame)
    }, 30)
    return () => clearInterval(id)
  }, [target])

  const suffix = value.replace(/[0-9]/g, '')
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 text-center">
      <p className="font-condensed text-3xl font-bold stat-value md:text-4xl">{display}{suffix}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-500">{label}</p>
    </div>
  )
}
