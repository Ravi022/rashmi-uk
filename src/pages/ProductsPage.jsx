import { ProductCard } from '../components/ProductCard'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { products } from '../data/siteData'
import { useSeo } from '../hooks/useSeo'

export function ProductsPage() {
  useSeo({ title: 'Products | Rashmi Metaliks UK Limited', description: 'Explore DI Pipes, DI Fittings, DI Flanged Pipes, and DI Manhole Covers for UK and European infrastructure.' })

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
      <div className="section-shell relative">
        <Reveal>
          <SectionHeader
            label="Product Portfolio"
            title="Engineered Infrastructure Solutions"
            subtitle="Premium ductile iron pipes, fittings, and manhole covers — manufactured to stringent UK and European standards for water, wastewater, and urban infrastructure."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product, idx) => (
            <Reveal key={product.slug} delay={idx * 0.07} className={`h-full ${idx === 0 ? 'sm:col-span-2 md:col-span-3' : 'col-span-1'}`}>
              <ProductCard product={product} isFeatured={idx === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
