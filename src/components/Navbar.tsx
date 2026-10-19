import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, ShieldCheck, ArrowRight } from 'lucide-react'
import logo from '../assets/brand/logo.png'
import { company, navLinks, whatsappLink } from '../data/site'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setIsOpen(false), [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }, [isOpen])

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Utility bar */}
      <div className="hidden h-9 bg-navy-950 text-[12px] text-steel-300 lg:block">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-10">
          <span className="tracking-[0.2em] uppercase text-steel-400">{company.tagline}</span>
          <div className="flex items-center gap-7">
            <a href={company.phoneHref} className="flex items-center gap-2 hover:text-white"><Phone size={13} /> {company.phone}</a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-white"><Mail size={13} /> {company.email}</a>
            <span className="flex items-center gap-2 text-brand-300"><ShieldCheck size={13} /> ISO 9001:2015</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className={`relative bg-white transition-shadow duration-300 ${scrolled ? 'shadow-[0_8px_30px_-12px_rgba(7,28,66,0.25)]' : ''}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
          <Link to="/" className="relative z-[60] shrink-0" aria-label={`${company.shortName} — Home`}>
            <img src={logo} alt={company.name} className="h-14 w-auto md:h-16" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-semibold transition-colors ${isActive ? 'text-brand-600' : 'text-navy-900 hover:text-brand-600'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span layoutId="nav-underline" className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-600" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Request Quote <ArrowRight size={15} />
            </a>
          </nav>

          <button
            className="relative z-[60] rounded-md p-2 text-navy-900 hover:bg-steel-100 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <div className="h-[3px] bg-gradient-to-r from-navy-800 via-brand-500 to-steel-300" />
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-[83px] z-[55] flex flex-col overflow-y-auto bg-white px-5 pb-10 pt-6 lg:hidden"
          >
            <nav className="flex flex-col">
              {navLinks.map((link, idx) => (
                <motion.div key={link.name} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}>
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-steel-100 py-5 font-headline text-2xl font-extrabold uppercase ${
                        isActive ? 'text-brand-600' : 'text-navy-900'
                      }`
                    }
                    style={{ fontStretch: '112%' }}
                  >
                    {link.name}
                    <ArrowRight size={20} className="text-steel-300" />
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto space-y-4 pt-10">
              <a href={company.phoneHref} className="flex items-center gap-3 text-lg font-semibold text-navy-900">
                <Phone size={18} className="text-brand-600" /> {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-steel-600">
                <Mail size={18} className="text-brand-600" /> {company.email}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-brand-600 py-4 font-semibold text-white"
              >
                Request a Quote <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
