import { motion } from 'framer-motion'

export function Tabs({ items, active, onChange }) {
  return (
    <div className="grid auto-cols-fr grid-flow-col gap-1 rounded-xl bg-slate-100 p-1.5 sm:gap-2 sm:p-2">
      {items.map((it) => (
        <button
          key={it}
          onClick={() => onChange(it)}
          className="relative rounded-lg px-3 py-2 font-condensed text-xs uppercase tracking-[0.08em] sm:px-4 sm:text-sm"
        >
          {active === it && (
            <motion.span
              layoutId="tab-active"
              className="absolute inset-0 rounded-lg bg-white shadow"
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
          <span className={`relative z-10 transition-colors duration-200 ${active === it ? 'text-red-600' : 'text-slate-500'}`}>
            {it}
          </span>
        </button>
      ))}
    </div>
  )
}
