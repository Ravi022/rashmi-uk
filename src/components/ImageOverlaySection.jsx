export function ImageOverlaySection({ title, text }) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-12 text-white">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-700/25 blur-3xl" />
      <h3 className="font-display relative text-3xl">{title}</h3>
      <p className="relative mt-4 max-w-3xl text-slate-200">{text}</p>
    </section>
  )
}
