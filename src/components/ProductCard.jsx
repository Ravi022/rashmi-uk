import { motion } from 'framer-motion'
import { ArrowRight, Cylinder } from 'lucide-react'
import { Link } from 'react-router-dom'
import manholeProductBanner from '../assets/manhole-cover-product-banner.png'
import diPipesBanner from '../assets/di-pipes-rashmi-aqua-banner.png'
import fittingsReducers from '../assets/fittings-reducers.png'
import diFlangedPipesBanner from '../assets/di-flanged-pipes-product-banner.png'

const productImageMap = {
  'di-pipes': diPipesBanner,
  'di-fittings': fittingsReducers,
  'di-flanged-pipes': diFlangedPipesBanner,
  'di-manhole-covers': manholeProductBanner,
}

export function ProductCard({ product }) {
  const realImage = productImageMap[product.slug]

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg hover:border-red-200"
    >
      {/* top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-red-600 to-red-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-7">
        {/* product image — real photo or placeholder */}
        {realImage ? (
          <div
            className={`mb-5 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl p-2 sm:h-52 ${
              product.slug === 'di-pipes' ||
              product.slug === 'di-fittings' ||
              product.slug === 'di-flanged-pipes' ||
              product.slug === 'di-manhole-covers'
                ? 'bg-white ring-1 ring-slate-200/80'
                : 'bg-slate-100'
            }`}
          >
            <img
              src={realImage}
              alt={product.name}
              className={`h-full w-full transition-transform duration-300 group-hover:scale-105 ${
                product.slug === 'di-pipes' ||
                product.slug === 'di-fittings' ||
                product.slug === 'di-flanged-pipes' ||
                product.slug === 'di-manhole-covers'
                  ? 'object-contain'
                  : 'object-cover'
              }`}
            />
          </div>
        ) : product.imagePlaceholder ? (
          <div className="mb-5 flex h-48 w-full items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 sm:h-52">
            <div className="text-center">
              <Cylinder size={28} className="mx-auto text-slate-300" />
              <p className="mt-1.5 font-condensed text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                {product.imagePlaceholder}
              </p>
            </div>
          </div>
        ) : (
          <span className="mb-5 inline-flex w-fit rounded-xl border border-red-200 bg-red-50 p-3 text-red-600">
            <Cylinder size={22} />
          </span>
        )}

        <h3 className="font-display text-xl text-slate-900">{product.name}</h3>
        {product.tagline && (
          <p className="mt-1 font-condensed text-xs font-semibold uppercase tracking-[0.1em] text-red-600">{product.tagline}</p>
        )}
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-500 line-clamp-3">{product.overview}</p>

        {/* specs preview — anchored to bottom */}
        <div className="mt-auto pt-5">
          <div className="space-y-2 rounded-lg bg-slate-50 px-4 py-3">
            {product.table.slice(0, 3).map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-3 text-xs">
                <span className="font-medium text-slate-500">{k}</span>
                <span className="text-right font-semibold text-slate-800">{v}</span>
              </div>
            ))}
          </div>

          <Link
            to={`/products/${product.slug}`}
            className="mt-6 inline-flex items-center gap-1.5 font-condensed text-xs font-bold uppercase tracking-[0.1em] text-red-600 transition hover:gap-3"
          >
            Full Product Details <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
