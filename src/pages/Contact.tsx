import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MapPin, Mail, CheckCircle, Send, Navigation, ShieldCheck, BadgeCheck, ChevronDown } from 'lucide-react'
import { Container, Eyebrow, Gear, PageHero, SectionHeading } from '../components/ui'
import { company, mapDirectionsUrl, mapEmbedUrl, products, units, whatsappLink } from '../data/site'

const FORM_ENDPOINT = 'https://formspree.io/f/mithleshforging@gmail.com'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fallbackText, setFallbackText] = useState('')
  const [activeUnitId, setActiveUnitId] = useState(units[0].id)
  const activeUnit = units.find((u) => u.id === activeUnitId) ?? units[0]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    const formData = new FormData(e.currentTarget)
    setFallbackText(
      `Hello Mithlesh Forging,\nName: ${formData.get('name')}\nCompany: ${formData.get('company')}\nPhone: ${formData.get('phone')}\nEmail: ${formData.get('email')}\nInterested in: ${formData.get('machine')}\n\n${formData.get('message')}`,
    )
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const data = await response.json().catch(() => ({}))
        setError(data.error || 'We could not send your enquiry right now.')
      }
    } catch {
      setError('Network error — please check your connection.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="overflow-hidden">
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title={<>Let's forge <span className="text-steel">partnerships.</span></>}
        text="Tell us about your tonnage, component or repair requirement. Our engineering team responds quickly from our NCR plants."
      />

      {/* Contact card */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="grid overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-[0_40px_80px_-50px_rgba(7,28,66,0.55)] lg:grid-cols-[0.85fr_1.15fr]">
            {/* Details panel */}
            <aside className="relative overflow-hidden bg-navy-radial p-7 text-white md:p-10">
              <div className="absolute inset-0 blueprint-grid" />
              <Gear className="absolute -bottom-20 -right-20 h-64 w-64 text-white/[0.06]" teeth={14} />

              <div className="relative flex h-full flex-col">
                <Eyebrow tone="light">Contact details</Eyebrow>
                <h2 className="mt-4 text-2xl font-extrabold uppercase leading-tight">Talk to our engineers</h2>
                <p className="mt-3 text-sm leading-relaxed text-steel-300">
                  Call, email or visit either of our plants in the NCR industrial corridor.
                </p>

                <ul className="mt-8 space-y-6">
                  {units.map((u) => (
                    <DetailRow key={u.id} icon={<MapPin size={17} />} label={`${u.label} · ${u.title}`}>
                      {u.address}
                    </DetailRow>
                  ))}
                  <DetailRow icon={<Phone size={17} />} label="Direct engineering line">
                    <a href={company.phoneHref} className="hover:text-brand-300">{company.phone}</a>
                  </DetailRow>
                  <DetailRow icon={<Mail size={17} />} label="Email">
                    <a href={`mailto:${company.email}`} className="break-all hover:text-brand-300">{company.email}</a>
                  </DetailRow>
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-6 lg:mt-10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-steel-200">
                    <ShieldCheck size={13} className="text-brand-300" /> ISO 9001:2015
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-steel-200">
                    <BadgeCheck size={13} className="text-brand-300" /> MSME Registered
                  </span>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="p-7 md:p-10">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Eyebrow>Request information</Eyebrow>
                    <h2 className="mt-4 text-2xl font-extrabold uppercase text-navy-900">Send an enquiry</h2>
                    <p className="mt-2 text-sm text-steel-500">Fields marked * are required.</p>

                    <form onSubmit={handleSubmit} className="mt-7 grid gap-4 md:grid-cols-2">
                      <InputField label="Full name *" name="name" placeholder="Your name" />
                      <InputField label="Company" name="company" placeholder="Company / unit name" required={false} />
                      <InputField label="Email *" name="email" type="email" placeholder="you@company.com" />
                      <InputField label="Phone *" name="phone" type="tel" placeholder="+91" />

                      <label className="block md:col-span-2">
                        <span className="text-[13px] font-medium text-steel-700">Interested in</span>
                        <div className="relative mt-1.5">
                          <select name="machine" defaultValue="" className={`${fieldClass} appearance-none pr-10`}>
                            <option value="" disabled>Select a machine or service</option>
                            {products.map((p) => <option key={p.id}>{p.name}</option>)}
                            <option>Repair &amp; maintenance</option>
                            <option>Custom machining</option>
                            <option>Other</option>
                          </select>
                          <ChevronDown size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-steel-400" />
                        </div>
                      </label>

                      <label className="block md:col-span-2">
                        <span className="text-[13px] font-medium text-steel-700">Requirement *</span>
                        <textarea
                          name="message"
                          rows={4}
                          required
                          placeholder="Tonnage, quantity, component or repair details…"
                          className={`${fieldClass} mt-1.5 resize-none`}
                        />
                      </label>

                      {error && (
                        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 md:col-span-2">
                          {error}{' '}
                          <a href={whatsappLink(fallbackText)} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                            Send it on WhatsApp instead
                          </a>
                          .
                        </div>
                      )}

                      <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between md:col-span-2">
                        <p className="text-xs text-steel-400">We only use your details to respond to this enquiry.</p>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(20,82,184,0.7)] transition-colors hover:bg-brand-700 disabled:opacity-60 sm:w-auto"
                        >
                          <Send size={16} /> {isLoading ? 'Sending…' : 'Send enquiry'}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex h-full flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <CheckCircle size={32} />
                    </div>
                    <h2 className="mt-6 text-2xl font-extrabold uppercase text-navy-900">Enquiry received</h2>
                    <p className="mx-auto mt-3 max-w-sm text-sm text-steel-600">Thank you. Our engineering team will get back to you shortly.</p>
                    <button onClick={() => setIsSubmitted(false)} className="mt-6 text-sm font-semibold text-brand-600 underline underline-offset-4">
                      Send another enquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </section>

      {/* Plant locations — Google Maps */}
      <section className="relative bg-white py-14 md:py-20">
        <div className="absolute inset-0 blueprint-grid-light" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Visit our plants"
            title={<>Find us on <span className="text-brand-gradient">the map.</span></>}
            text="Strategically positioned within the NCR industrial corridor for optimised logistics and rapid site response."
          />

          <div className="mt-8 overflow-hidden rounded-2xl border border-steel-200 bg-white">
            <div className="flex flex-col border-b border-steel-200 sm:flex-row" role="tablist" aria-label="Plant locations">
              {units.map((u) => {
                const active = u.id === activeUnit.id
                return (
                  <button
                    key={u.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveUnitId(u.id)}
                    className={`relative flex flex-1 items-center gap-3 px-6 py-4 text-left transition-colors ${active ? 'bg-white' : 'bg-steel-50 hover:bg-white'}`}
                  >
                    <MapPin size={18} className={active ? 'text-brand-600' : 'text-steel-400'} />
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.2em] text-steel-500">{u.label} · {u.title}</span>
                      <span className={`block text-sm font-semibold ${active ? 'text-navy-900' : 'text-steel-600'}`}>
                        {u.city}, {u.state}
                      </span>
                    </span>
                    {active && <motion.span layoutId="map-tab" className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-600" />}
                  </button>
                )
              })}
            </div>

            <div className="relative h-[340px] bg-steel-100 md:h-[420px]">
              <iframe
                key={activeUnit.id}
                title={`Google Map — ${activeUnit.label} ${activeUnit.city}`}
                src={mapEmbedUrl(activeUnit.mapQuery)}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-steel-600">
                <span className="font-semibold text-navy-900">{activeUnit.label} — {activeUnit.title}:</span> {activeUnit.address}
              </p>
              <a
                href={mapDirectionsUrl(activeUnit.mapQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                <Navigation size={15} /> Get directions
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

const fieldClass =
  'w-full rounded-lg border border-steel-200 bg-steel-50 px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-steel-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100'

const DetailRow = ({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) => (
  <li className="flex gap-4">
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-300 ring-1 ring-white/15">{icon}</span>
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-steel-400">{label}</div>
      <div className="mt-1 text-sm leading-relaxed text-white">{children}</div>
    </div>
  </li>
)

const InputField = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = true,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) => (
  <label className="block">
    <span className="text-[13px] font-medium text-steel-700">{label}</span>
    <input type={type} name={name} required={required} placeholder={placeholder} className={`${fieldClass} mt-1.5`} />
  </label>
)

export default Contact
