import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import diPipesReal from '../assets/real/products/di-pipes-yard.jpg'
import fittingsImg from '../assets/fittings-blue-flanged.png'
import flangedPipesReal from '../assets/real/products/di-pipes-branded.jpg'
import manholeProductBanner from '../assets/manhole-cover-product-banner.png'

const productImageMap = {
  'di-pipes': diPipesReal,
  'di-fittings': fittingsImg,
  'di-flanged-pipes': flangedPipesReal,
  'di-manhole-covers': manholeProductBanner,
}

export function ProductCard({ product }) {
  const realImage = productImageMap[product.slug]

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg hover:border-amber-200"
    >
      <div className="h-1 w-full bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-7">
        {realImage ? (
          <div className="mb-5 aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200/80">
            <img
              src={realImage}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="mb-5 aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200/80 flex items-center justify-center">
            <p className="font-condensed text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
              {product.imagePlaceholder || product.name}
            </p>
          </div>
        )}

        <h3 className="font-display text-xl text-slate-900">{product.name}</h3>
        {product.tagline && (
          <p className="mt-1 font-condensed text-xs font-semibold uppercase tracking-[0.1em] text-amber-700">{product.tagline}</p>
        )}
        <p className="mt-3 text-sm leading-7 text-slate-500 line-clamp-3">{product.overview}</p>

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
