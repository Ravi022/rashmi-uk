import aboutRashmiUkPlant from '../assets/about-rashmi-uk-plant.png'
import { CTASection } from '../components/CTASection'
import { HeroSlider } from '../components/HeroSlider'
import { ProductCard } from '../components/ProductCard'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { heroSlides, products, industries, processSteps } from '../data/siteData'
import { useSeo } from '../hooks/useSeo'
import { WhyChooseUsSection } from '../sections/WhyChooseUsSection'
import { IndustriesSection } from '../sections/IndustriesSection'
import { ProcessSection } from '../sections/ProcessSection'

export function HomePage() {
  useSeo({
    title: 'Rashmi Metaliks UK Limited | Ductile Iron Infrastructure Solutions',
    description: 'Premium Ductile Iron Infrastructure Solutions for the United Kingdom and global infrastructure markets.',
  })

  return (
    <>
      {/* ── Hero Slider — DWI is slide 1, cinematic slides 2–6 follow ── */}
      <HeroSlider slides={heroSlides} />

      {/* Products section */}
      <section className="section-shell py-24 lg:py-28">
        <Reveal>
          <SectionHeader
            label="Product Portfolio"
            title="Ductile Iron Infrastructure Solutions"
            subtitle="Rashmi Metaliks UK supplies utilities, contractors, and councils with premium DI pipes, fittings, and engineered pipeline systems — all compliant with UK and European standards."
            centered
          />
        </Reveal>
        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2">
          {products.map((product, idx) => (
            <Reveal key={product.slug} delay={idx * 0.07}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* about/company snapshot */}
      <section className="bg-amber-50 py-16 text-slate-900 sm:py-24">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Reveal>
              <div>
                <p className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-amber-600">About Rashmi Metaliks UK</p>
                <h2 className="font-display mt-4 text-2xl leading-snug text-slate-900 sm:text-3xl md:text-5xl">
                  A Global Leader, Now Rooted in Britain
                </h2>
                <p className="mt-5 text-sm leading-8 text-slate-700">
                  Rashmi Metaliks Ltd., the flagship company of the USD 5 billion Rashmi Group, is a globally trusted manufacturer of Ductile Iron Pipes and Fittings. With presence across 50+ countries and a robust integrated steel manufacturing setup, the company delivers high-performance infrastructure solutions designed for longevity and sustainability.
                </p>
                <p className="mt-4 text-sm leading-8 text-slate-600">
                  Now expanding into the United Kingdom through Rashmi Metaliks UK Limited, the company is committed to supporting critical infrastructure projects with world-class products compliant with UK and European standards.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <figure className="group relative overflow-hidden rounded-2xl border border-amber-200/80 bg-slate-200 shadow-xl ring-1 ring-slate-900/5">
                <img
                  src={aboutRashmiUkPlant}
                  alt="Rashmi Aqua ductile iron pipe at integrated manufacturing plant at sunrise"
                  className="aspect-[4/3] w-full scale-110 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.12] sm:aspect-[16/10] lg:aspect-[5/4] lg:min-h-[min(100%,22rem)] xl:aspect-[16/10]"
                  style={{ objectPosition: 'center 15%' }}
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-transparent px-4 pb-3 pt-16 text-[10px] font-condensed font-bold uppercase tracking-[0.14em] text-white/90 sm:px-5 sm:pb-4 sm:text-[11px]">
                  Integrated manufacturing — Rashmi Group
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-14 lg:grid-cols-6">
              {[
                { value: '2.4M MT', label: 'Annual DI Pipe Capacity' },
                { value: '50+', label: 'Countries Served' },
                { value: '40+', label: 'Years of Experience' },
                { value: '#2', label: "World's Largest DI Mfr." },
                { value: '26K MT', label: 'DI Fittings Capacity' },
                { value: 'USD 5B', label: 'Rashmi Group Revenue' },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:p-5">
                  <p className="font-condensed text-xl font-bold text-amber-600 sm:text-2xl">{value}</p>
                  <p className="mt-1.5 font-condensed text-[9px] font-bold uppercase leading-5 tracking-[0.1em] text-slate-500 sm:text-[10px]">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <WhyChooseUsSection />

      {/* industries section */}
      <IndustriesSection industries={industries} />

      {/* process section */}
      <ProcessSection steps={processSteps} />

      <CTASection
        title="Reliable Pipelines for Critical Infrastructure"
        description="Our UK technical team is ready to support your project from specification to delivery."
      />
    </>
  )
}
