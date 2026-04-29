import { ProductCard } from '../components/ProductCard'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { products } from '../data/siteData'
import { useSeo } from '../hooks/useSeo'

export function ProductsPage() {
  useSeo({ title: 'Products | Rashmi Metaliks UK Ltd.', description: 'Explore DI Pipes, DI Fittings, DI Flanged Pipes, and DI Manhole Covers for UK and European infrastructure.' })

  return (
    <div className="section-shell py-14 sm:py-20 lg:py-24">
      <Reveal>
        <SectionHeader label="Our Products" title="Engineered Ductile Iron Solutions" subtitle="Compliant with BS EN 545, BS EN 598, BS EN 124, and ISO standards — built for over 100 years of reliable service." centered />
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {products.map((product, idx) => (
          <Reveal key={product.slug} delay={idx * 0.07}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
