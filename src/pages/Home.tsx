import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ShieldCheck, Gauge, Wrench, Ruler, Quote, CheckCircle2 } from 'lucide-react'
import logoMark from '../assets/brand/logo-mark.png'
import { Button, Container, CtaBand, Gear, Reveal, SectionHeading } from '../components/ui'
import { company, products, stats, testimonials, whatsappLink } from '../data/site'

const strengths = [
  { icon: ShieldCheck, title: 'Built for endurance', text: 'Every machine is tested beyond its nominal capacity before it leaves our plant.' },
  { icon: Ruler, title: 'Precision engineered', text: 'Close-tolerance machining and slide guidance for accurate, repeatable strokes.' },
  { icon: Gauge, title: 'Built to your tonnage', text: 'From 5 T eccentric presses to 1000 MT friction screw presses, sized to your job.' },
  { icon: Wrench, title: 'Repair & maintenance', text: 'Specialised repair operations and a responsive technical team for running plants.' },
]

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-navy-radial pt-nav text-white">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="absolute inset-y-0 right-0 hidden w-[55%] lg:block">
          <img src="/hero.png" alt="Friction screw press forging hot metal" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/60 to-navy-950/10" />
          <div className="absolute inset-0 bg-brand-700/20 mix-blend-color" />
        </div>
        <Gear className="absolute right-[8%] top-[18%] hidden h-[520px] w-[520px] text-white/[0.07] lg:block animate-[spin_90s_linear_infinite]" teeth={16} />

        <Container className="relative grid min-h-[min(calc(100svh-var(--navbar-height)),720px)] items-center gap-12 py-12 lg:grid-cols-[1.15fr_1fr] lg:py-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-steel-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-brand-400 shadow-[0_0_10px_#4a8af0]" />
              Friction Screw Press Manufacturers · Ghaziabad & Faridabad
            </span>

            <h1 className="mt-8 text-[34px] leading-[1] font-black uppercase sm:text-5xl lg:text-[60px]">
              <span className="text-steel block">Built on</span>
              <span className="text-steel block">Strength.</span>
              <span className="mt-2 block text-brand-400">Driven by</span>
              <span className="block text-brand-400">Quality.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-steel-300 md:text-lg">
              {company.name} designs and manufactures friction screw presses, forging presses, power presses and
              shearing machines — engineered for forging shops across India and international markets.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={whatsappLink()}>Request a Quote</Button>
              <Button to="/products" variant="ghost-light">Explore Machinery</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:mr-0"
          >
            <div className="rounded-2xl bg-white/95 p-7 text-navy-900 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur md:p-9">
              <img src={logoMark} alt="" className="h-16 w-auto" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-brand-600">At a glance</p>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-headline text-2xl font-black text-brand-gradient md:text-3xl" style={{ fontStretch: '112%' }}>{s.value}</div>
                    <div className="mt-1 text-xs leading-snug text-steel-500">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-3 border-t border-steel-200 pt-6 text-sm">
                {['Exported internationally', 'Custom tonnage on request', 'MSME registered'].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-steel-700">
                    <CheckCircle2 size={16} className="text-brand-600" /> {t}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
        <div className="relative h-1 bg-gradient-to-r from-brand-600 via-steel-300 to-brand-600" />
      </section>

      {/* Machinery range */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our machinery"
              title={<>Presses that <span className="text-brand-gradient">carry the load.</span></>}
              text="A complete range of forging and sheet-metal machinery, manufactured in-house at our NCR plants."
            />
            <Button to="/products" variant="ghost-dark" className="shrink-0">View full catalogue</Button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06} className={i === 0 ? 'lg:row-span-2' : ''}>
                <Link
                  to={`/products?machine=${p.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-steel-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_30px_60px_-30px_rgba(7,28,66,0.45)]"
                >
                  <div className={`relative overflow-hidden bg-steel-100 ${i === 0 ? 'aspect-[4/5] lg:aspect-auto lg:flex-1' : 'aspect-[4/3]'}`}>
                    <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy-900">
                      {p.type}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 p-6">
                    <div>
                      <h3 className="text-lg font-bold uppercase leading-tight text-navy-900">{p.name}</h3>
                      <p className="mt-2 text-sm text-steel-500">Capacity <span className="font-semibold text-brand-600">{p.capacity}</span></p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-steel-200 text-navy-900 transition-colors group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="relative bg-white py-14 md:py-20">
        <div className="absolute inset-0 blueprint-grid-light" />
        <Container className="relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-2xl bg-steel-brushed" />
            <img src="/images/mithlesh-forging-press-workshop.jpg" alt="Mithlesh Forging press in our forging workshop" className="relative aspect-square w-full rounded-2xl object-cover shadow-[0_40px_80px_-40px_rgba(7,28,66,0.6)]" />
            <div className="absolute -bottom-6 right-6 rounded-xl bg-navy-900 px-6 py-5 text-white shadow-xl md:right-[-24px]">
              <div className="font-headline text-3xl font-black text-steel" style={{ fontStretch: '112%' }}>Zero-defect</div>
              <div className="mt-1 text-xs uppercase tracking-[0.25em] text-brand-300">Quality policy</div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Why Mithlesh Forging"
              title={<>Building the <span className="text-brand-gradient">standards</span> of heavy industry.</>}
              text="We engineer the backbone of production lines — machines that combine extreme force with precision, and a team that stands behind them long after installation."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {strengths.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="h-full rounded-xl border border-steel-200 bg-steel-50 p-6 transition-colors hover:border-brand-300 hover:bg-white">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <s.icon size={22} />
                    </div>
                    <h3 className="mt-5 text-base font-bold uppercase text-navy-900">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-600">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-14 md:py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Voice of our partners"
            title={<>Trusted on <span className="text-brand-gradient">shop floors</span> across India.</>}
          />
        </Container>
        <div className="mask-fade-x mt-14 overflow-hidden">
          <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <figure key={idx} className="w-[320px] shrink-0 rounded-xl border border-steel-200 bg-white p-7 md:w-[420px]">
                <Quote size={28} className="text-brand-300" />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-steel-700">“{t.text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 font-headline font-bold text-white">{t.name[0]}</span>
                  <span>
                    <span className="block font-semibold text-navy-900">{t.name}</span>
                    <span className="text-sm text-steel-500">{t.company}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}

export default Home
