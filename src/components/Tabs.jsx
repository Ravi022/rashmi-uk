export function Tabs({ items, active, onChange }) {
  return (
    <div className="grid auto-cols-fr grid-flow-col gap-1 rounded-xl bg-slate-100 p-1.5 sm:gap-2 sm:p-2">
      {items.map((it) => (
        <button
          key={it}
          onClick={() => onChange(it)}
          className={`rounded-lg px-3 py-2 font-condensed text-xs uppercase tracking-[0.08em] sm:px-4 sm:text-sm ${active === it ? 'bg-white text-amber-700 shadow' : 'text-slate-500'}`}
        >
          {it}
        </button>
      ))}
    </div>
  )
}
