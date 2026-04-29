import { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Accordion } from '../components/Accordion'
import { CTASection } from '../components/CTASection'
import { SectionHeader } from '../components/SectionHeader'
import { Table } from '../components/Table'
import { Tabs } from '../components/Tabs'
import { products } from '../data/siteData'
import { useSeo } from '../hooks/useSeo'
import { ShieldCheck, ChevronRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import manholeRound from '../assets/manhole-cover-round.png'
import manholeFront from '../assets/manhole-cover-front.png'
import manholeSquare from '../assets/manhole-cover-square.png'
import manholeBlueRound from '../assets/manhole-cover-blue-round.png'
import manholeBlueGrating from '../assets/manhole-cover-blue-grating.png'
import fittingsRealLargeBends from '../assets/fittings-real-large-bends.jpg'
import fittingsRealFactory from '../assets/fittings-real-factory.jpg'
import fittingsRealReducers from '../assets/fittings-real-reducers.jpg'
import fittingsRealSocketTee from '../assets/fittings-real-socket-tee.jpg'
import fittingsRealBend45 from '../assets/fittings-real-bend-45.jpg'
import fittingsRealBlackTee from '../assets/fittings-real-black-tee.jpg'
import flangedRashmiAqua from '../assets/flanged-rashmi-aqua.jpg'
import flangedRedPipeEnd from '../assets/flanged-red-pipe-end.jpg'
import flangedWhitePipe from '../assets/flanged-white-pipe.jpg'
import flangedBlueReducers from '../assets/flanged-blue-reducers.jpg'
import pipesBlackSockets from '../assets/pipes-black-sockets.jpg'
import pipesBlueOutdoor from '../assets/pipes-blue-outdoor.jpg'
import pipesCradles from '../assets/pipes-factory-cradles.jpg'
import pipesBlackSky from '../assets/pipes-black-sky.jpg'
import pipesRedHall from '../assets/pipes-red-flanged-hall.jpg'
import pipesFlangedEnds from '../assets/pipes-flanged-ends.jpg'
import pipesRedAqua from '../assets/pipes-red-rashmi-aqua.jpg'
import pipesGreyBsen from '../assets/pipes-grey-bsen.jpg'

const productImageGallery = {
  'di-pipes': [
    { src: pipesBlueOutdoor, caption: 'Blue Epoxy-Coated DI Pipes — Ready for Export' },
    { src: pipesCradles, caption: 'Rashmi Aqua DI Pipes — Factory Transport Cradles' },
    { src: pipesBlackSky, caption: 'Socket & Spigot DI Pipes — Stacked for Dispatch' },
    { src: pipesBlackSockets, caption: 'Large DI Pipes — Cement Mortar Lined Sockets' },
    { src: pipesRedHall, caption: 'Rashmi Aqua Flanged Pipe — BS EN 598 Compliant' },
    { src: pipesRedAqua, caption: 'Rashmi Aqua — Red Epoxy External Coating' },
    { src: pipesGreyBsen, caption: 'DN 200 Pipe — BS EN 545, C64 Class Marked' },
  ],
  'di-manhole-covers': [
    { src: manholeRound, caption: 'Round Manhole Cover with Frame — BS EN 124' },
    { src: manholeFront, caption: 'Round Solid Top Cover — Anti-skid Surface' },
    { src: manholeSquare, caption: '600×600 Double Seal Solid Top — D400 Class' },
    { src: manholeBlueRound, caption: 'Round Cover with Frame — Epoxy Coated' },
    { src: manholeBlueGrating, caption: 'Recessed Grating Cover — Blue Coated' },
  ],
  'di-fittings': [
    { src: fittingsRealLargeBends, caption: 'Large Flanged Bends & Reducers — Blue Epoxy Coated' },
    { src: fittingsRealFactory, caption: 'DN 1200 Flanged Bend — Factory Pre-dispatch Inspection' },
    { src: fittingsRealReducers, caption: 'Flanged Concentric Reducers — EN 545 Compliant' },
    { src: fittingsRealSocketTee, caption: 'Socket Equal Tee — Push-fit Joint, Blue Epoxy Coated' },
    { src: fittingsRealBend45, caption: '45° Flanged Bend — Cement Mortar Lined Interior' },
    { src: fittingsRealBlackTee, caption: 'Flanged Tee & Bends — Black Bitumen Coated' },
  ],
  'di-flanged-pipes': [
    { src: flangedRashmiAqua, caption: 'Rashmi Aqua Flanged Pipes — BS EN 598 Marked' },
    { src: flangedRedPipeEnd, caption: 'DN 350 Red Epoxy Flanged Pipe — Socket End Detail' },
    { src: flangedWhitePipe, caption: 'White Polyurethane Coated Flanged Pipe — UK Supply' },
    { src: flangedBlueReducers, caption: 'Flanged Reducers — Blue Epoxy, Cement Mortar Lined' },
    { src: pipesFlangedEnds, caption: 'Flanged Pipe Ends — Machined to EN 545 Tolerances' },
  ],
}

const standards = {
  'di-pipes': ['DWI Approved', 'BS EN 545', 'ISO 2531', 'ISO 9001'],
  'di-fittings': ['DWI Approved', 'EN 545', 'EN 598', 'ISO 9001'],
  'di-flanged-pipes': ['DWI Approved', 'EN 545', 'PN 10–40', 'ISO 9001'],
  'di-manhole-covers': ['BS EN 124', 'Load Class A15–F900', 'ISO 9001'],
}

export function ProductDetailPage() {
  const { productSlug } = useParams()
  const product = useMemo(() => products.find((p) => p.slug === productSlug) || products[0], [productSlug])
  const [active, setActive] = useState('Overview')
  const [activeImage, setActiveImage] = useState(0)
  useSeo({ title: `${product.name} | Rashmi Metaliks UK Ltd.`, description: `${product.name} technical details, specs, applications, and compliance information.` })
  const productStandards = standards[product.slug] || []
  const gallery = productImageGallery[product.slug] || []

  return (
    <>
      {/* hero banner */}
      <section className="relative overflow-hidden bg-slate-950 pb-14 pt-18 text-white sm:pb-20 sm:pt-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-amber-600/10 blur-[100px]" />

        <div className="section-shell relative">
          <nav className="mb-6 flex items-center gap-2 font-condensed text-xs uppercase tracking-[0.12em] text-slate-400">
            <Link to="/products" className="hover:text-amber-400 transition">Products</Link>
            <ChevronRight size={12} />
            <span className="text-slate-300">{product.name}</span>
          </nav>

          <p className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
            Rashmi Metaliks UK Ltd.
          </p>
          <h1 className="font-display mt-4 text-3xl leading-tight text-white sm:text-4xl md:text-6xl">{product.name}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8">{product.overview}</p>

          {productStandards.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {productStandards.map((std) => (
                std === 'DWI Approved'
                  ? <span key={std} className="inline-flex items-center gap-1.5 rounded border border-blue-400/40 bg-blue-500/15 px-3 py-1 font-condensed text-xs uppercase tracking-[0.12em] text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.15)]">
                      <ShieldCheck size={11} /> {std}
                    </span>
                  : <span key={std} className="inline-flex items-center gap-1.5 rounded border border-amber-600/30 bg-amber-600/10 px-3 py-1 font-condensed text-xs uppercase tracking-[0.12em] text-amber-300">
                      <ShieldCheck size={11} /> {std}
                    </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* content tabs */}
      <section className="section-shell py-20">
        <Tabs items={['Overview', 'Specifications', 'Applications']} active={active} onChange={setActive} />
        <div className="mt-10">
          {active === 'Overview' && (
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <SectionHeader
                    label="Product Overview"
                    title={`${product.name} System`}
                    subtitle={product.overview}
                  />
                  <p className="mt-6 text-sm leading-7 text-slate-500">
                    Manufactured at our ISO 9001-certified facility in Kharagpur, each product undergoes rigorous hydrostatic, dimensional, and coating tests before dispatch. Full mill test certificates and third-party inspection reports are available on request.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                  <p className="font-condensed text-xs font-bold uppercase tracking-[0.15em] text-amber-700">Key Specifications</p>
                  <Table rows={product.table} />
                </div>
              </div>

              {/* Image gallery — shown only when product has real photos */}
              {gallery.length > 0 && (
                <div className="mt-14">
                  <p className="font-condensed text-xs font-bold uppercase tracking-[0.18em] text-amber-700 mb-6">Product Gallery</p>
                  {/* Main image */}
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                    <div className="flex h-80 items-center justify-center p-8">
                      <img
                        src={gallery[activeImage].src}
                        alt={gallery[activeImage].caption}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="border-t border-slate-200 bg-white px-6 py-3">
                      <p className="text-xs text-slate-500">{gallery[activeImage].caption}</p>
                    </div>
                  </div>
                  {/* Thumbnails */}
                  <div className="mt-4 grid grid-cols-5 gap-3 sm:grid-cols-6">
                    {gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`overflow-hidden rounded-xl border-2 bg-slate-50 p-2 transition ${
                          idx === activeImage
                            ? 'border-amber-500 shadow-sm'
                            : 'border-slate-200 hover:border-amber-300'
                        }`}
                      >
                        <img src={img.src} alt={img.caption} className="h-14 w-full object-contain" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </Reveal>
          )}
          {active === 'Specifications' && (
            <Reveal>
              <div className="max-w-2xl">
                <SectionHeader label="Technical Specifications" title="Dimensional & Material Data" />
                <div className="mt-8">
                  <Table rows={product.table} />
                </div>
              </div>
            </Reveal>
          )}
          {active === 'Applications' && (
            <Reveal>
              <div className="max-w-3xl">
                <SectionHeader
                  label="Applications"
                  title="Where This Product is Used"
                  subtitle="Engineered for demanding environments across water, wastewater, and industrial sectors."
                />
                <div className="mt-8">
                  <Accordion items={product.applications || [
                    { title: 'Potable Water Supply', content: 'Safe, hygienic transportation of drinking water across distribution networks.' },
                    { title: 'Wastewater Systems', content: 'Handles corrosive sewage environments effectively and durably.' },
                    { title: 'Industrial Pipelines', content: 'Suitable for transporting industrial fluids under high pressure conditions.' },
                  ]} />
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <CTASection title="Ready to Specify?" description="Our UK technical team is ready to support your project from specification to delivery." />
    </>
  )
}
