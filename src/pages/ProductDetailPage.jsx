import { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Accordion } from '../components/Accordion'
import { CTASection } from '../components/CTASection'
import { DWIBannerBadge } from '../components/DWIBannerBadge'
import { SectionHeader } from '../components/SectionHeader'
import { Table } from '../components/Table'
import { Tabs } from '../components/Tabs'
import { products } from '../data/siteData'
import { useSeo } from '../hooks/useSeo'
import { ShieldCheck, ChevronRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { TextReveal } from '../components/TextReveal'
import manholeRound from '../assets/manhole-cover-round.png'
import manholeFront from '../assets/manhole-cover-front.png'
import manholeSquare from '../assets/manhole-cover-square.png'
import manholeBlueRound from '../assets/manhole-cover-blue-round.png'
import manholeBlueGrating from '../assets/manhole-cover-blue-grating.png'
import fittingsBendsElbows from '../assets/fittings-bends-elbows.png'
import fittingsTeesCrosses from '../assets/fittings-tees-crosses.png'
import fittingsReducers from '../assets/fittings-reducers.png'
import fittingsFlangedAdapters from '../assets/fittings-flanged-adapters.png'
import fittingsSockets from '../assets/fittings-sockets.png'
import fittingsEndCaps from '../assets/fittings-end-caps.png'
import diFittingsHeroBg from '../assets/di-fittings-hero-bg.png'
import diPipesHeroBg from '../assets/di-pipes-hero-bg.png'
import diFlangedPipesHeroBg from '../assets/di-flanged-pipes-hero-bg.png'
import manholeHeroBg from '../assets/manhole-cover-product-banner.png'
import flangedRashmiAqua from '../assets/flanged-rashmi-aqua.jpg'
import flangedRedPipeEnd from '../assets/flanged-red-pipe-end.jpg'
import flangedWhitePipe from '../assets/flanged-white-pipe.jpg'
import flangedBlueReducers from '../assets/flanged-blue-reducers.jpg'
import pipesFlangedEnds from '../assets/pipes-flanged-ends.jpg'
import diPipesBanner from '../assets/di-pipes-rashmi-aqua-banner.png'
import diPipesNew1 from '../assets/di-pipes-new-1.png'
import diPipesNew2 from '../assets/di-pipes-new-2.png'
import diPipesNew3 from '../assets/di-pipes-new-3.png'
import diPipesNew4 from '../assets/di-pipes-new-4.png'
import diPipesNew5 from '../assets/di-pipes-new-5.png'

const productImageGallery = {
  'di-pipes': [
    { src: diPipesBanner, caption: 'Rashmi Aqua — epoxy coated DI pipe (DN 150)' },
    { src: diPipesNew1, caption: 'Red Coated Ductile Iron Pipes — Yard View' },
    { src: diPipesNew2, caption: 'Blue DI Pipes — Stacked for Export Dispatch' },
    { src: diPipesNew3, caption: 'Rashmi Aqua Blue Pipes — Outdoor Stack' },
    { src: diPipesNew4, caption: 'Coating Line — Red Pipe Processing' },
    { src: diPipesNew5, caption: 'Heat-Treatment Stage — DI Pipe Production' },
  ],
  'di-manhole-covers': [
    { src: manholeRound, caption: 'Round Manhole Cover with Frame — BS EN 124' },
    { src: manholeFront, caption: 'Round Solid Top Cover — Anti-skid Surface' },
    { src: manholeSquare, caption: '600×600 Double Seal Solid Top — D400 Class' },
    { src: manholeBlueRound, caption: 'Round Cover with Frame — Epoxy Coated' },
    { src: manholeBlueGrating, caption: 'Recessed Grating Cover — Blue Coated' },
  ],
  'di-fittings': [
    {
      src: fittingsBendsElbows,
      caption: 'Bends & Elbows',
      description:
        'Available in angles of 11.25°, 22.5°, 45°, and 90° to create directional changes in pipeline systems.',
    },
    {
      src: fittingsTeesCrosses,
      caption: 'Tees & Crosses',
      description: 'Connect three or four pipes at junction points for branch connections or distribution networks.',
    },
    {
      src: fittingsReducers,
      caption: 'Reducers',
      description: 'Connect pipes of different diameters while maintaining flow efficiency and system integrity.',
    },
    {
      src: fittingsFlangedAdapters,
      caption: 'Flanged Adapters',
      description: 'Create connections between spigot ends and flanged components for versatile system integration.',
    },
    {
      src: fittingsSockets,
      caption: 'Sockets',
      description: 'Join pipe sections securely while allowing for easy maintenance and system expansion.',
    },
    {
      src: fittingsEndCaps,
      caption: 'End Caps',
      description: 'Seal the ends of pipelines securely for terminations, testing, or future extensions.',
    },
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
  useSeo({ title: `${product.name} | Rashmi Metaliks UK Limited`, description: `${product.name} technical details, specs, applications, and compliance information.` })
  const productStandards = standards[product.slug] || []
  const gallery = productImageGallery[product.slug] || []

  const heroPhoto =
    product.slug === 'di-fittings'
      ? {
          src: diFittingsHeroBg,
          position: 'object-[center_42%] sm:object-[center_38%]',
        }
      : product.slug === 'di-pipes'
        ? {
            src: diPipesHeroBg,
            position: 'object-[32%_center] sm:object-[28%_center] lg:object-[26%_center]',
          }
        : product.slug === 'di-flanged-pipes'
          ? {
              src: diFlangedPipesHeroBg,
              position: 'object-[56%_center] sm:object-[50%_center] lg:object-[48%_center]',
            }
          : product.slug === 'di-manhole-covers'
            ? {
                src: manholeHeroBg,
                position: 'object-[52%_center] sm:object-[48%_center] lg:object-[46%_center]',
              }
            : null

  const photoHero = Boolean(heroPhoto)

  return (
    <>
      {/* hero banner */}
      <section
        className={`relative overflow-hidden pb-14 pt-18 sm:pb-20 sm:pt-24 ${
          photoHero ? 'min-h-[280px] sm:min-h-[340px]' : 'bg-slate-950 text-white'
        }`}
      >
        {heroPhoto ? (
          <>
            <img
              src={heroPhoto.src}
              alt=""
              aria-hidden
              className={`absolute inset-0 h-full w-full object-cover ${heroPhoto.position}`}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/52 to-transparent sm:from-white/90 sm:via-white/36" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/32 via-transparent to-white/18" />
          </>
        ) : (
          <>
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
            <div className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-red-600/10 blur-[100px]" />
          </>
        )}
        <DWIBannerBadge />

        <div className={`section-shell relative ${photoHero ? 'max-w-[min(100%,42rem)] sm:max-w-none' : ''}`}>
          <nav
            className={`mb-6 flex items-center gap-2 font-condensed text-sm font-semibold uppercase tracking-[0.12em] ${
              photoHero ? 'text-slate-700 [text-shadow:0_1px_8px_rgba(255,255,255,0.9)]' : 'text-slate-400'
            }`}
          >
            <Link
              to="/products"
              className={`transition ${photoHero ? 'text-slate-800 hover:text-red-700' : 'hover:text-red-400'}`}
            >
              Products
            </Link>
            <ChevronRight size={12} className={photoHero ? 'shrink-0 text-slate-600' : ''} />
            <span className={photoHero ? 'text-slate-950' : 'text-slate-300'}>{product.name}</span>
          </nav>

          <p
            className={`font-condensed text-sm font-bold uppercase tracking-[0.22em] ${
              photoHero ? 'text-red-700 [text-shadow:0_1px_8px_rgba(255,255,255,0.85)]' : 'text-red-400'
            }`}
          >
            Rashmi Metaliks UK Limited
          </p>
          <TextReveal
            as="h1"
            text={product.name}
            className={`font-display mt-4 text-3xl leading-tight sm:text-4xl md:text-6xl ${
              photoHero
                ? 'text-slate-950 [text-shadow:0_1px_0_rgba(255,255,255,0.9),0_0_24px_rgba(255,255,255,0.75)]'
                : 'text-white'
            }`}
          />
          <p
            className={`mt-4 max-w-2xl text-sm font-medium leading-7 sm:mt-5 sm:text-base sm:leading-8 ${
              photoHero
                ? 'text-slate-800 [text-shadow:0_1px_12px_rgba(255,255,255,0.85)]'
                : 'text-slate-300'
            }`}
          >
            {product.overview}
          </p>

          {productStandards.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {productStandards.map((std) => (
                std === 'DWI Approved'
                  ? (
                      <span
                        key={std}
                        className={`inline-flex items-center gap-1.5 rounded border px-3 py-1 font-condensed text-sm uppercase tracking-[0.12em] ${
                          photoHero
                            ? 'border-blue-200 bg-blue-50 text-blue-900'
                            : 'border-blue-400/40 bg-blue-500/15 text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.15)]'
                        }`}
                      >
                        <ShieldCheck size={11} /> {std}
                      </span>
                    )
                  : (
                      <span
                        key={std}
                        className={`inline-flex items-center gap-1.5 rounded border px-3 py-1 font-condensed text-sm uppercase tracking-[0.12em] ${
                          photoHero
                            ? 'border-red-200 bg-red-50 text-red-900'
                            : 'border-red-600/30 bg-red-600/10 text-red-300'
                        }`}
                      >
                        <ShieldCheck size={11} /> {std}
                      </span>
                    )
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
                  <p className="font-condensed text-sm font-bold uppercase tracking-[0.15em] text-red-600">Key Specifications</p>
                  <Table rows={product.table} />
                </div>
              </div>

              {/* Image gallery — shown only when product has real photos */}
              {gallery.length > 0 && (
                <div className="mt-14">
                  <p className="font-condensed text-sm font-bold uppercase tracking-[0.18em] text-red-600 mb-6">Product Gallery</p>
                  {/* Main image */}
                  <div
                    className={`overflow-hidden rounded-2xl border border-slate-200 ${product.slug === 'di-fittings' ? 'bg-white' : 'bg-slate-50'}`}
                  >
                    <div className="flex h-80 items-center justify-center p-6 sm:h-96 sm:p-8">
                      <img
                        src={gallery[activeImage].src}
                        alt={gallery[activeImage].caption}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="border-t border-slate-200 bg-white px-5 py-4 sm:px-6">
                      {gallery[activeImage].description ? (
                        <>
                          <p className="font-condensed text-sm font-bold uppercase tracking-[0.08em] text-slate-900">
                            {gallery[activeImage].caption}
                          </p>
                          <p className="mt-2 text-sm leading-7 text-slate-600">{gallery[activeImage].description}</p>
                        </>
                      ) : (
                        <p className="text-sm leading-7 text-slate-600">{gallery[activeImage].caption}</p>
                      )}
                    </div>
                  </div>
                  {/* Thumbnails */}
                  <div
                    className={`mt-4 grid gap-2 sm:gap-3 ${gallery.length === 6 ? 'grid-cols-3 sm:grid-cols-6' : 'grid-cols-5 sm:grid-cols-6'}`}
                  >
                    {gallery.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImage(idx)}
                        className={`overflow-hidden rounded-xl border-2 p-2 transition ${
                          product.slug === 'di-fittings' ? 'bg-white' : 'bg-slate-50'
                        } ${
                          idx === activeImage
                            ? 'border-red-500 shadow-sm'
                            : 'border-slate-200 hover:border-red-300'
                        }`}
                      >
                        <img src={img.src} alt={img.caption} className="h-12 w-full object-contain sm:h-14" />
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
