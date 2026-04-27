import { motion } from 'framer-motion'
import { ArrowRight, Cylinder } from 'lucide-react'
import { Link } from 'react-router-dom'
import manholeRound from '../assets/manhole-cover-round.png'
import fittingsBlueFlanged from '../assets/fittings-blue-flanged.png'
import pipesBlueOutdoor from '../assets/pipes-blue-outdoor.jpg'

const productImageMap = {
  'di-manhole-covers': manholeRound,
  'di-fittings': fittingsBlueFlanged,
  'di-pipes': pipesBlueOutdoor,
}

export function ProductCard({ product }) {
  const realImage = productImageMap[product.slug]

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg hover:border-amber-200"
    >
      {/* top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-7">
        {/* product image — real photo or placeholder */}
        {realImage ? (
          <div className="mb-5 flex h-36 w-full items-center justify-center overflow-hidden rounded-xl bg-slate-50">
            <img
              src={realImage}
              alt={product.name}
              className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : product.imagePlaceholder ? (
          <div className="mb-5 flex h-36 w-full items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50">
            <div className="text-center">
              <Cylinder size={28} className="mx-auto text-slate-300" />
              <p className="mt-1.5 font-condensed text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                {product.imagePlaceholder}
              </p>
            </div>
          </div>
        ) : (
          <span className="mb-5 inline-flex w-fit rounded-xl border border-amber-200 bg-amber-50 p-3 text-amber-700">
            <Cylinder size={22} />
          </span>
        )}

        <h3 className="font-display text-xl text-slate-900">{product.name}</h3>
        {product.tagline && (
          <p className="mt-1 font-condensed text-xs font-semibold uppercase tracking-[0.1em] text-amber-700">{product.tagline}</p>
        )}
        <p className="mt-3 text-sm leading-7 text-slate-500 line-clamp-3">{product.overview}</p>

        {/* specs preview */}
        <div className="mt-5 space-y-2 rounded-lg bg-slate-50 px-4 py-3">
          {product.table.slice(0, 3).map(([k, v]) => (
            <div key={k} className="flex items-center justify-between gap-3 text-xs">
              <span className="font-medium text-slate-500">{k}</span>
              <span className="text-right font-semibold text-slate-800">{v}</span>
            </div>
          ))}
        </div>

        <Link
          to={`/products/${product.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 font-condensed text-xs font-bold uppercase tracking-[0.1em] text-amber-700 transition hover:gap-3"
        >
          Full Product Details <ArrowRight size={13} />
        </Link>
      </div>
    </motion.article>
  )
}
