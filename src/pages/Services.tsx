import { Settings, ShieldCheck, Microscope, Cog, Flame, Wrench, CheckCircle2 } from 'lucide-react'
import { Container, CtaBand, Gear, PageHero, Reveal, SectionHeading } from '../components/ui'

const services = [
  {
    icon: Microscope,
    title: 'Metallurgical audit',
    tag: 'Stress verification protocols',
    text: 'Material and stress checks on critical components so every machine performs to its rated capacity.',
  },
  {
    icon: Cog,
    title: 'Custom machining',
    tag: 'Bespoke forge geometries',
    text: 'Dies, bolsters and components machined to your drawings and forging geometry.',
  },
  {
    icon: Wrench,
    title: 'Repair & maintenance',
    tag: 'Specialised repair operations',
    text: 'Overhaul, rebuild and preventive maintenance for friction screw presses and power presses.',
  },
]

const advantages = [
  { icon: ShieldCheck, title: 'Endurance', text: 'Tested beyond nominal capacity to ensure zero failure.' },
  { icon: Settings, title: 'Support', text: '24/7 technical team for critical production infrastructure.' },
  { icon: Microscope, title: 'Precision', text: 'Micron-level auditing for every forging stroke.' },
]

const Services = () => {
  return (
    <div className="overflow-hidden">
      <PageHero
        crumb="Services"
        eyebrow="What we do"
        title={<>Engineering <span className="text-steel">services.</span></>}
        text="From building new friction screw presses to auditing, machining and repairing the machines already on your shop floor."
        image="/detail.png"
      />

      {/* Core manufacturing */}
      <section className="py-14 md:py-20">
        <Container className="space-y-6">
          <Reveal>
            <div className="grid overflow-hidden rounded-2xl border border-steel-200 bg-white lg:grid-cols-2">
              <div className="p-8 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Core service 01</span>
                <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-navy-900 md:text-4xl">Friction screw presses</h2>
                <p className="mt-5 text-base leading-relaxed text-steel-600">
                  Manufacturing high-velocity friction drive systems for maximum kinetic energy transfer in heavy-duty forge operations.
                </p>
                <div className="mt-10 flex flex-wrap gap-10">
                  <div>
                    <div className="font-headline text-3xl font-black text-brand-gradient md:text-4xl" style={{ fontStretch: '112%' }}>30–500T</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-steel-500">Dynamic force</div>
                  </div>
                  <div>
                    <div className="font-headline text-3xl font-black text-brand-gradient md:text-4xl" style={{ fontStretch: '112%' }}>98.5%</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-steel-500">Sync efficiency</div>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[320px] bg-steel-100">
                <img src="/images/friction-screw-press-standard.jpg" alt="Friction screw press" className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-navy-radial p-8 text-white md:p-10">
              <div className="absolute inset-0 blueprint-grid" />
              <Gear className="absolute -right-20 -bottom-20 h-80 w-80 text-white/[0.07]" teeth={14} />
              <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-300">Core service 02</span>
                  <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-4xl">
                    Forging press <span className="text-steel">technology</span>
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-300">
                    Uncompromising forging infrastructure for automotive and aviation metallurgy.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  {['Zero-flex frame', 'Thermal alloys', 'PLC control'].map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm">
                      <CheckCircle2 size={15} className="text-brand-400" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-steel-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_30px_60px_-30px_rgba(7,28,66,0.4)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-white transition-colors group-hover:bg-brand-600">
                    <s.icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold uppercase text-navy-900">{s.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">{s.tag}</p>
                  <p className="mt-4 leading-relaxed text-steel-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Advantages */}
      <section className="relative bg-white py-14 md:py-20">
        <div className="absolute inset-0 blueprint-grid-light" />
        <Container className="relative">
          <SectionHeading
            align="center"
            eyebrow="Core strengths"
            title={<>Force &amp; <span className="text-brand-gradient">finesse.</span></>}
            text="Heavy-duty machines, held to tight tolerances, backed by people who know them inside out."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-steel-brushed p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm">
                    <a.icon size={26} />
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold uppercase text-navy-900">{a.title}</h3>
                  <p className="mt-3 text-steel-700">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-3 text-sm text-steel-500">
            <Flame size={16} className="text-brand-600" /> Hot &amp; cold forging · Blanking · Deep drawing · Plate shearing
          </div>
        </Container>
      </section>

      <CtaBand />
    </div>
  )
}

export default Services
