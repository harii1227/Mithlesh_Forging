import { Target, Eye, CheckCircle2, Factory, Hammer, Wrench } from 'lucide-react'
import mithleshImg from '../assets/mithlesh.jpg'
import { Container, CtaBand, Eyebrow, Gear, PageHero, Reveal, SectionHeading } from '../components/ui'
import { company, stats } from '../data/site'

const About = () => {
  return (
    <div className="overflow-hidden">
      <PageHero
        crumb="About"
        eyebrow="About the company"
        title={<>Forged <span className="text-steel">standards.</span></>}
        text="Decades of experience in high-precision forging technology — building presses that stay in production for a lifetime."
        image="/images/friction-screw-press-heavy.jpg"
      />

      {/* Story */}
      <section className="py-14 md:py-20">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title={<>Decades of <span className="text-brand-gradient">machined perfection.</span></>}
            />
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-steel-600 md:text-base">
              <p>
                {company.name} was founded with a singular vision: to produce machinery whose durability defies industry age.
              </p>
              <p>
                From our main plant in Ghaziabad and our manufacturing hub in Faridabad, we build friction screw presses,
                forging screw presses and power presses — and our evolution has set benchmarks at every stage of mechanical design.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-steel-200 bg-white p-5">
                  <div className="font-headline text-2xl font-black text-brand-gradient md:text-3xl" style={{ fontStretch: '112%' }}>{s.value}</div>
                  <div className="mt-1 text-xs leading-snug text-steel-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <Reveal className="relative">
            <div className="absolute -right-6 -bottom-6 h-48 w-48 rounded-2xl bg-steel-brushed" />
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
              alt="Precision industrial engineering"
              className="relative aspect-square w-full rounded-2xl object-cover shadow-[0_40px_80px_-40px_rgba(7,28,66,0.6)]"
            />
          </Reveal>
        </Container>
      </section>

      {/* Mission & vision */}
      <section className="relative bg-navy-radial py-14 text-white md:py-20">
        <div className="absolute inset-0 blueprint-grid" />
        <Container className="relative">
          <SectionHeading tone="light" eyebrow="What drives us" title={<>Mission <span className="text-steel">&amp; vision.</span></>} />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <Reveal>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:p-9">
                <Target size={36} className="text-brand-400" />
                <h3 className="mt-6 text-2xl font-extrabold uppercase md:text-3xl">Strategic mission</h3>
                <p className="mt-4 text-base leading-relaxed text-steel-300 md:text-lg">
                  To eliminate production downtime by providing forging machinery that combines{' '}
                  <span className="font-semibold text-white">extreme force</span> with{' '}
                  <span className="font-semibold text-white">millimetric precision.</span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl bg-white p-8 text-navy-900 md:p-9">
                <Eye size={36} className="text-brand-600" />
                <h3 className="mt-6 text-2xl font-extrabold uppercase md:text-3xl">Vision 2030</h3>
                <p className="mt-4 text-base leading-relaxed text-steel-600">
                  Becoming the benchmark for zero-defect industrial machinery and high-tonnage engineering globally.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Quality */}
      <section className="py-14 md:py-20">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="ISO QA / QC excellence"
              title={<>Zero <span className="text-brand-gradient">defect.</span></>}
              text="Every machine is a testament to our compromise-free engineering policy."
            />
            <ul className="mt-10 space-y-4">
              {['Component traceability', 'Advanced spectro lab', 'Zero-defect policy', 'ISO 9001:2015 certified processes'].map((item) => (
                <li key={item} className="flex items-center gap-4 rounded-lg border border-steel-200 bg-white px-5 py-4 font-semibold text-navy-900">
                  <CheckCircle2 size={20} className="shrink-0 text-brand-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-steel-brushed p-10 md:p-10">
              <Gear className="absolute -right-10 -top-10 h-56 w-56 text-navy-900/10" />
              <Factory size={48} className="relative text-navy-800" />
              <h3 className="relative mt-8 text-3xl font-extrabold uppercase text-navy-900">Facility ready</h3>
              <p className="relative mt-4 max-w-sm text-steel-700">
                Our facilities are always open for technical audits and pre-dispatch verification by our clients.
              </p>
              <div className="relative mt-10 inline-flex items-center gap-3 rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" /> Quality pass
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Director */}
      <section className="bg-white py-14 md:py-20">
        <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.5fr]">
          <Reveal className="relative mx-auto w-full max-w-xs">
            <div className="absolute -inset-3 rounded-[20px] bg-gradient-to-br from-brand-600 via-steel-300 to-navy-800" />
            <img src={mithleshImg} alt={company.director} className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top" />
          </Reveal>
          <div>
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="mt-5 text-3xl font-black uppercase text-navy-900 md:text-5xl">{company.director}</h2>
            <p className="mt-2 text-lg font-semibold text-brand-600">Director &amp; Founder</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel-600">
              Pioneering industrial precision for over three decades, specialising in high-tonnage mechanical press
              architecture and global forging standards.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-steel-200 bg-steel-50 p-6">
                <Hammer size={22} className="text-brand-600" />
                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-steel-500">Core manufacturing scope</div>
                <p className="mt-2 font-semibold text-navy-900">Friction Screw Press, Forging Screw Press &amp; High-Performance Power Press machines.</p>
              </div>
              <div className="rounded-xl border border-steel-200 bg-steel-50 p-6">
                <Wrench size={22} className="text-brand-600" />
                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-steel-500">Technical integrity</div>
                <p className="mt-2 font-semibold text-navy-900">Specialised repair operations &amp; maintenance systems.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </div>
  )
}

export default About
