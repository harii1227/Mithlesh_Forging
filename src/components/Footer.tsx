import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ShieldCheck, BadgeCheck } from 'lucide-react'
import logo from '../assets/brand/logo.png'
import { company, navLinks, products, units } from '../data/site'
import { Gear } from './ui'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-steel-300">
      <div className="h-1 bg-gradient-to-r from-brand-600 via-steel-300 to-brand-600" />
      <Gear className="pointer-events-none absolute -left-32 -bottom-32 h-[420px] w-[420px] text-white/[0.04]" teeth={14} />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 pt-10 pb-8 md:grid-cols-2 md:gap-12 md:px-10 md:pt-16 md:pb-12 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
        {/* Brand */}
        <div className="flex items-center justify-between gap-4 md:block">
          <div className="inline-block rounded-lg bg-white px-3 py-2.5 md:px-5 md:py-4">
            <img src={logo} alt={company.name} className="h-12 w-auto md:h-20" />
          </div>
          <p className="mt-6 hidden max-w-xs text-sm leading-relaxed text-steel-400 md:block">
            Manufacturers of friction screw presses, forging presses, power presses and shearing machines for forging shops in India and abroad.
          </p>
          <div className="flex flex-col gap-2 md:mt-6 md:flex-row md:flex-wrap md:gap-3">
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-[11px] text-white md:py-2 md:text-xs">
              <ShieldCheck size={14} className="text-brand-400" /> ISO 9001:2015
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-[11px] text-white md:py-2 md:text-xs">
              <BadgeCheck size={14} className="text-brand-400" /> MSME Registered
            </span>
          </div>
        </div>

        {/* Machinery — desktop only; on mobile the Products link covers it */}
        <div className="hidden md:block">
          <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-white">Machinery</h4>
          <ul className="space-y-3 text-sm">
            {products.map((p) => (
              <li key={p.id}>
                <Link to={`/products?machine=${p.id}`} className="transition-colors hover:text-white">{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company links — inline row on mobile, list on desktop */}
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-white md:mb-5">Company</h4>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm md:block md:space-y-3">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="transition-colors hover:text-white">{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-white md:mb-5">Get in touch</h4>

          {/* Mobile: compact plant cards + tap-to-contact buttons */}
          <div className="space-y-3 md:hidden">
            <div className="grid grid-cols-2 gap-3">
              {units.map((u) => (
                <Link key={u.id} to="/contact" className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] text-steel-400">
                    <MapPin size={12} className="text-brand-400" /> {u.label}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-white">{u.city}</span>
                  <span className="block text-xs text-steel-400">{u.state}</span>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a href={company.phoneHref} className="flex items-center justify-center gap-2 rounded-lg bg-brand-600 py-3 text-sm font-semibold text-white">
                <Phone size={15} /> Call us
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center justify-center gap-2 rounded-lg border border-white/15 py-3 text-sm font-semibold text-white">
                <Mail size={15} /> Email us
              </a>
            </div>
          </div>

          {/* Desktop: full addresses */}
          <ul className="hidden space-y-5 text-sm md:block">
            {units.map((u) => (
              <li key={u.id} className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-brand-400" />
                <span>
                  <span className="block font-semibold text-white">{u.label} · {u.city}</span>
                  <span className="leading-relaxed">{u.address}</span>
                </span>
              </li>
            ))}
            <li>
              <a href={company.phoneHref} className="flex items-center gap-3 hover:text-white">
                <Phone size={17} className="text-brand-400" /> {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 break-all hover:text-white">
                <Mail size={17} className="shrink-0 text-brand-400" /> {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-5 pr-20 md:items-center text-[11px] text-steel-500 md:flex-row md:px-10 md:py-6 md:text-xs">
          <span>© {new Date().getFullYear()} {company.name} All rights reserved.</span>
          <span>
            Designed &amp; developed by{' '}
            <a
              href="https://arh-consultancy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-steel-300 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              ARH Consultancy Private Limited
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
