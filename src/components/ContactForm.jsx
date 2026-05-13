import { useState } from 'react'
import { trackEvent } from '../utils/gtm'

export function ContactForm() {
  const [ok, setOk] = useState(false)
  const [errors, setErrors] = useState({})

  const onSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    const next = {}
    if (!/^[A-Za-z\s'-]+$/.test(String(data.name || '').trim())) next.name = true
    if (!/^\S+@\S+\.\S+$/.test(String(data.email || '').trim())) next.email = true
    if (!/^[\d\s+()-]{7,}$/.test(String(data.phone || '').trim())) next.phone = true
    if (!String(data.message || '').trim()) next.message = true
    setErrors(next)
    if (Object.keys(next).length === 0) {
      trackEvent('contact_form_submit', {
        form_name: 'contact',
        form_location: 'contact_page',
      })
      setOk(true)
    }
  }

  if (ok) {
    return <div className="rounded-xl border border-red-300 bg-red-50 p-6 text-red-700">Thank you! Your enquiry has been submitted. Our UK team will be in touch shortly.</div>
  }

  const cls = 'w-full rounded border border-slate-300 px-4 py-3 text-sm outline-none focus:border-red-600'
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div><input className={cls} name="name" placeholder="Your Name *" aria-label="Your Name" />{errors.name ? <p className="mt-1 text-xs text-red-600">Please enter your name (letters only)</p> : null}</div>
        <div><input className={cls} name="phone" placeholder="Phone Number *" aria-label="Phone Number" />{errors.phone ? <p className="mt-1 text-xs text-red-600">Please enter a valid phone number</p> : null}</div>
      </div>
      <div><input className={cls} name="email" placeholder="Contact Email *" aria-label="Contact Email" />{errors.email ? <p className="mt-1 text-xs text-red-600">Please enter a valid email address</p> : null}</div>
      <div><textarea className={cls} rows={5} name="message" placeholder="Greetings of the day. How can we help you?" aria-label="Message" />{errors.message ? <p className="mt-1 text-xs text-red-600">Message is required</p> : null}</div>
      <button className="bronze-glow rounded bg-red-600 px-6 py-3 font-condensed uppercase tracking-[0.08em] text-white hover:bg-red-700">Send Enquiry</button>
    </form>
  )
}
