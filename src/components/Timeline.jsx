export function Timeline({ items }) {
  return (
    <div className="space-y-4 border-l-2 border-red-200 pl-6">
      {items.map((item) => (
        <div key={item.title} className="relative">
          <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-red-600" />
          <p className="font-condensed text-xs uppercase tracking-[0.12em] text-red-600">{item.year}</p>
          <h4 className="font-display text-xl text-slate-900">{item.title}</h4>
          <p className="text-sm leading-7 text-slate-600">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
