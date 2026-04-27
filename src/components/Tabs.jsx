export function Tabs({ items, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 rounded-xl bg-slate-100 p-2">
      {items.map((it) => (
        <button
          key={it}
          onClick={() => onChange(it)}
          className={`rounded-lg px-4 py-2 font-condensed text-sm uppercase tracking-[0.08em] ${active === it ? 'bg-white text-amber-700 shadow' : 'text-slate-500'}`}
        >
          {it}
        </button>
      ))}
    </div>
  )
}
