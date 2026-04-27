import { CTASection } from '../components/CTASection'
import { HeroSlider } from '../components/HeroSlider'
import { ProductCard } from '../components/ProductCard'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { heroSlides, products, certifications, industries, processSteps } from '../data/siteData'
import { useSeo } from '../hooks/useSeo'
import { WhyChooseUsSection } from '../sections/WhyChooseUsSection'
import { IndustriesSection } from '../sections/IndustriesSection'
import { ProcessSection } from '../sections/ProcessSection'
import { CertificationsStrip } from '../sections/CertificationsStrip'

export function HomePage() {
  useSeo({
    title: 'Rashmi Metaliks UK Ltd. | Ductile Iron Infrastructure Solutions',
    description: 'Premium Ductile Iron Infrastructure Solutions for the United Kingdom and global infrastructure markets.',
  })

  return (
    <>
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
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {products.map((product, idx) => (
            <Reveal key={product.slug} delay={idx * 0.07}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* certifications strip */}
      <CertificationsStrip certifications={certifications} />

      {/* about/company snapshot */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="section-shell">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <p className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-amber-400">About Rashmi Metaliks UK</p>
                <h2 className="font-display mt-4 text-3xl leading-snug text-white md:text-5xl">
                  A Global Leader, Now Rooted in Britain
                </h2>
                <p className="mt-5 text-sm leading-8 text-slate-300">
                  Rashmi Metaliks Ltd., the flagship company of the USD 5 billion Rashmi Group, is a globally trusted manufacturer of Ductile Iron Pipes and Fittings. With presence across 50+ countries and a robust integrated steel manufacturing setup, the company delivers high-performance infrastructure solutions designed for longevity and sustainability.
                </p>
                <p className="mt-4 text-sm leading-8 text-slate-400">
                  Now expanding into the United Kingdom through Rashmi Metaliks UK Ltd., the company is committed to supporting critical infrastructure projects with world-class products compliant with UK and European standards.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {[
                  { value: '2.4M MT', label: 'Annual DI Pipe Capacity' },
                  { value: '50+', label: 'Countries Served' },
                  { value: '40+', label: 'Years of Experience' },
                  { value: '#2', label: "World's Largest DI Mfr." },
                  { value: '26K MT', label: 'DI Fittings Capacity' },
                  { value: 'USD 5B', label: 'Rashmi Group Revenue' },
                ].map(({ value, label }) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
                    <p className="font-condensed text-2xl font-bold text-amber-400">{value}</p>
                    <p className="mt-1.5 font-condensed text-[10px] font-bold uppercase leading-5 tracking-[0.1em] text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
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
