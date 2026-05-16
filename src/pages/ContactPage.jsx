import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'
import contactHeroBg from '../assets/contact-hero-bg.png'
import { ContactForm } from '../components/ContactForm'
import { DWIBannerBadge } from '../components/DWIBannerBadge'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { TextReveal } from '../components/TextReveal'
import { CountUp } from '../components/CountUp'
import { useSeo } from '../hooks/useSeo'

const contactDetails = [
  {
    icon: MapPin,
    label: 'UK Office Address',
    value: 'Suite 102, Oceanair House, 750–760 High Road, Leytonstone, London, E11 3AW',
  },
  {
    icon: Mail,
    label: 'Email',
    value: (
      <a
        href="mailto:info.uk@rashmigroup.com"
        className="text-red-700 underline-offset-2 hover:underline"
      >
        info.uk@rashmigroup.com
      </a>
    ),
  },
  {
    icon: Phone,
    label: 'Alternative contact',
    value: (
      <>
        <a href="tel:+919830085749" className="text-red-700 underline-offset-2 hover:underline">
          +91 9830085749
        </a>{' '}
        (Indranil Bhattacharya)
        <span className="mt-2 block font-normal text-slate-600">
          Export enquiries:{' '}
          <a
            href="mailto:mahesh.agarwal@rashmigroup.com"
            className="font-medium text-red-700 underline-offset-2 hover:underline"
          >
            mahesh.agarwal@rashmigroup.com
          </a>
        </span>
      </>
    ),
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Monday – Friday, 09:00 – 17:30 GMT',
  },
]

export function ContactPage() {
  useSeo({
    title: 'Contact | Rashmi Metaliks UK Limited',
    description: 'Contact Rashmi Metaliks UK Limited for project enquiries, technical consultations, and product specifications.',
  })

  return (
    <>
      {/* hero */}
      <section className="relative min-h-[260px] overflow-hidden bg-white pb-20 pt-24 text-slate-900 sm:min-h-[300px]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={contactHeroBg}
            alt=""
            aria-hidden
            className="h-full w-full min-h-[380px] object-cover object-[72%_center] sm:min-h-[440px] lg:object-[68%_center]"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/90 via-white/48 to-transparent sm:from-white/85 sm:via-white/28" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/25 via-transparent to-white/18" />
        <DWIBannerBadge />
        <div className="section-shell relative max-w-[min(100%,40rem)] sm:max-w-none">
          <p className="font-condensed text-sm font-bold uppercase tracking-[0.22em] text-red-700 [text-shadow:0_1px_8px_rgba(255,255,255,0.9)]">
            Contact Us
          </p>
          <TextReveal
            as="h1"
            text="Partner with Rashmi Metaliks UK"
            className="font-display mt-4 max-w-3xl text-4xl leading-tight text-slate-950 [text-shadow:0_1px_0_rgba(255,255,255,0.95),0_0_20px_rgba(255,255,255,0.7)] md:text-6xl"
          />
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-800 [text-shadow:0_1px_10px_rgba(255,255,255,0.85)]">
            Whether you're a water utility, contractor, or consultant — our UK team is ready to discuss your project requirements and deliver reliable DI solutions on time.
          </p>
        </div>
      </section>

      {/* contact section */}
      <section className="py-24 bg-white">
        <div className="section-shell">
          <Reveal>
            <SectionHeader label="Get In Touch" title="We're Ready to Help" />
          </Reveal>
          <div className="mt-10 grid gap-12 lg:grid-cols-5 lg:items-start">
            {/* contact info panel — spans 2 of 5 cols */}
            <Reveal className="lg:col-span-2">
              <div className="flex flex-col gap-5">
                <p className="text-sm leading-8 text-slate-500">
                  Send us an enquiry and a member of our UK technical team will respond within one business day.
                </p>

                <div className="flex flex-col gap-3">
                  {contactDetails.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 card-red-hover">
                      <span className="mt-0.5 inline-flex shrink-0 rounded-lg border border-red-200 bg-red-50 p-2 text-red-600">
                        <Icon size={16} />
                      </span>
                      <div>
                        <p className="font-condensed text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">{label}</p>
                        <div className="mt-0.5 text-sm font-medium text-slate-800">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* what to expect */}
                <div className="rounded-2xl border border-red-200 bg-red-50 p-5 card-red-hover">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare size={15} className="text-red-600" />
                    <p className="font-condensed text-sm font-bold uppercase tracking-[0.14em] text-red-600">What to Expect</p>
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Response within 1 business day',
                      'Technical specification support',
                      'Project-specific pricing on request',
                      'Compliance documentation provided',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs leading-6 text-red-900">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* form — spans 3 of 5 cols */}
            <Reveal delay={0.08} className="lg:col-span-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:p-10">
                <p className="font-condensed text-sm font-bold uppercase tracking-[0.16em] text-red-600 mb-6">Send an Enquiry</p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* manufacturing info strip */}
      <section className="border-t border-slate-100 bg-slate-50 py-14">
        <div className="section-shell">
          <Reveal>
            <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: '1 Day', label: 'Response Time Target' },
                { value: 'UK-Based', label: 'Technical Sales Team' },
                { value: 'BS EN 545', label: 'Primary UK Standard' },
                { value: '50+ Countries', label: 'Active Export Markets' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm card-red-hover">
                  {value === 'UK-Based' || value === 'BS EN 545' ? (
                    <p className="font-condensed text-2xl font-bold stat-value">{value}</p>
                  ) : (
                    <CountUp value={value} className="block font-condensed text-2xl font-bold stat-value" />
                  )}
                  <p className="font-condensed text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
