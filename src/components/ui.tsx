import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Phone } from 'lucide-react'
import { company, whatsappLink } from '../data/site'

export const Container = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`max-w-7xl mx-auto px-5 md:px-10 ${className}`}>{children}</div>
)

/* Small label with the flanking rules used in the logo tagline */
export const Eyebrow = ({ children, tone = 'brand' }: { children: ReactNode; tone?: 'brand' | 'light' }) => (
  <span
    className={`inline-flex items-center gap-3 text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em] ${
      tone === 'light' ? 'text-brand-300' : 'text-brand-600'
    }`}
  >
    <span className={`h-px w-8 ${tone === 'light' ? 'bg-brand-300/60' : 'bg-brand-600/50'}`} />
    {children}
  </span>
)

export const SectionHeading = ({
  eyebrow,
  title,
  text,
  align = 'left',
  tone = 'dark',
}: {
  eyebrow: string
  title: ReactNode
  text?: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
}) => (
  <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    <Eyebrow tone={tone === 'light' ? 'light' : 'brand'}>{eyebrow}</Eyebrow>
    <h2
      className={`mt-5 text-2xl md:text-4xl font-extrabold uppercase leading-[1.05] ${
        tone === 'light' ? 'text-white' : 'text-navy-900'
      }`}
    >
      {title}
    </h2>
    {text && (
      <p className={`mt-5 text-[15px] md:text-base leading-relaxed ${tone === 'light' ? 'text-steel-300' : 'text-steel-600'}`}>
        {text}
      </p>
    )}
  </div>
)

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost-light' | 'ghost-dark'
  className?: string
}

const buttonStyles = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-[0_10px_30px_-10px_rgba(20,82,184,0.7)]',
  secondary: 'bg-white text-navy-900 hover:bg-steel-100 shadow-sm',
  'ghost-light': 'border border-white/25 text-white hover:bg-white/10',
  'ghost-dark': 'border border-navy-900/20 text-navy-900 hover:bg-navy-900 hover:text-white',
}

export const Button = ({ children, to, href, variant = 'primary', className = '' }: ButtonProps) => {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ${buttonStyles[variant]} ${className}`
  const content = (
    <>
      {children}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
    </>
  )
  if (to) return <Link to={to} className={cls}>{content}</Link>
  return (
    <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={cls}>
      {content}
    </a>
  )
}

export const Reveal = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
)

/* Gear outline, the logo's second motif. Pure SVG so it stays crisp at any size. */
export const Gear = ({ className = '', teeth = 12 }: { className?: string; teeth?: number }) => {
  const outer = 100
  const inner = 84
  const pts: string[] = []
  for (let i = 0; i < teeth; i++) {
    const a = (i / teeth) * Math.PI * 2
    const step = (Math.PI * 2) / teeth
    const corners = [
      [inner, a - step * 0.5],
      [inner, a - step * 0.22],
      [outer, a - step * 0.15],
      [outer, a + step * 0.15],
      [inner, a + step * 0.22],
    ]
    corners.forEach(([r, t]) => pts.push(`${(110 + r * Math.cos(t)).toFixed(2)},${(110 + r * Math.sin(t)).toFixed(2)}`))
  }
  return (
    <svg viewBox="0 0 220 220" className={className} aria-hidden="true">
      <polygon points={pts.join(' ')} fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="110" cy="110" r="52" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="110" cy="110" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

/* Compact hero used on inner pages */
export const PageHero = ({
  eyebrow,
  title,
  text,
  crumb,
  image = '/hero.png',
}: {
  eyebrow: string
  title: ReactNode
  text: ReactNode
  crumb: string
  image?: string
}) => (
  <section className="relative overflow-hidden bg-navy-radial pt-nav text-white">
    <div className="absolute inset-0 blueprint-grid" />
    <img src={image} alt="" className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-30 mix-blend-luminosity lg:block" />
    <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-r from-navy-950 to-transparent lg:block" />
    <Gear className="absolute -right-24 -bottom-24 h-[420px] w-[420px] text-white/[0.06]" teeth={14} />

    <Container className="relative py-12 md:py-16">
      <nav className="mb-8 flex items-center gap-2 text-xs text-steel-400">
        <Link to="/" className="hover:text-white">Home</Link>
        <ChevronRight size={14} />
        <span className="text-brand-300">{crumb}</span>
      </nav>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1 className="mt-5 text-3xl md:text-5xl font-extrabold uppercase leading-[1.02]">{title}</h1>
        <p className="mt-6 max-w-2xl text-[15px] md:text-base leading-relaxed text-steel-300">{text}</p>
      </motion.div>
    </Container>
    <div className="h-1 bg-gradient-to-r from-brand-600 via-steel-300 to-brand-600" />
  </section>
)

/* Closing call-to-action shared by every page */
export const CtaBand = () => (
  <section className="px-5 md:px-10 py-12 md:py-16">
    <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-navy-radial px-6 py-10 md:px-14 md:py-12 text-white">
      <div className="absolute inset-0 blueprint-grid" />
      <Gear className="absolute -right-16 -top-16 h-72 w-72 text-white/[0.07] animate-[spin_60s_linear_infinite]" />
      <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Eyebrow tone="light">Let's build together</Eyebrow>
          <h2 className="mt-5 text-2xl md:text-4xl font-extrabold uppercase leading-[1.05]">
            Need a press built <span className="text-steel">to your tonnage?</span>
          </h2>
          <p className="mt-5 max-w-xl text-steel-300">
            Share your component, capacity and quantity. Our engineers will recommend the right machine and send a quotation.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
          <Button href={whatsappLink()} className="w-full sm:w-auto lg:w-72">Request a Quote</Button>
          <a
            href={company.phoneHref}
            className="inline-flex w-full items-center justify-center gap-3 rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold hover:bg-white/10 sm:w-auto lg:w-72"
          >
            <Phone size={16} /> {company.phone}
          </a>
        </div>
      </div>
    </div>
  </section>
)
