import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { useSeo } from '../hooks/useSeo'

const contactDetails = [
  {
    icon: MapPin,
    label: 'UK Office Address',
    value: 'Suite 102, Oceanair House, 750–760 High Road, Leytonstone, London, E11 3AW',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+44 (0) 123 456 7890',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@rashmimetaliks.co.uk',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Monday – Friday, 09:00 – 17:30 GMT',
  },
]

export function ContactPage() {
  useSeo({
    title: 'Contact | Rashmi Metaliks UK Ltd.',
    description: 'Contact Rashmi Metaliks UK Ltd. for project enquiries, technical consultations, and product specifications.',
  })

  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden bg-slate-950 pb-20 pt-24 text-white">
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
          <p className="font-condensed text-xs font-bold uppercase tracking-[0.22em] text-amber-400">Contact Us</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-tight text-white md:text-6xl">
            Partner with Rashmi Metaliks UK
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Whether you're a water utility, contractor, or consultant — our UK team is ready to discuss your project requirements and deliver reliable DI solutions on time.
          </p>
        </div>
      </section>

      {/* contact section */}
      <section className="py-24 bg-white">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            {/* contact info panel — spans 2 of 5 cols */}
            <Reveal className="lg:col-span-2">
              <div className="flex flex-col gap-5">
                <SectionHeader label="Get In Touch" title="We're Ready to Help" />
                <p className="text-sm leading-8 text-slate-500">
                  Send us an enquiry and a member of our UK technical team will respond within one business day.
                </p>

                <div className="flex flex-col gap-3">
                  {contactDetails.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
                      <span className="mt-0.5 inline-flex shrink-0 rounded-lg border border-amber-200 bg-amber-50 p-2 text-amber-700">
                        <Icon size={16} />
                      </span>
                      <div>
                        <p className="font-condensed text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">{label}</p>
                        <p className="mt-0.5 text-sm font-medium text-slate-800">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* what to expect */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare size={15} className="text-amber-700" />
                    <p className="font-condensed text-xs font-bold uppercase tracking-[0.14em] text-amber-700">What to Expect</p>
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Response within 1 business day',
                      'Technical specification support',
                      'Project-specific pricing on request',
                      'Compliance documentation provided',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs leading-6 text-amber-900">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
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
                <p className="font-condensed text-xs font-bold uppercase tracking-[0.16em] text-amber-700 mb-6">Send an Enquiry</p>
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
                <div key={label} className="flex flex-col items-center gap-1.5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-condensed text-2xl font-bold text-amber-600">{value}</p>
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
