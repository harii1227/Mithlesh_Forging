import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import logo from '../assets/Screenshot 2026-04-05 at 10.02.09 AM.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => setIsOpen(false), [location])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 transition-all duration-300"
    >
      <div className="glass-nav relative flex items-center bg-primary">
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-secondary via-tertiary to-secondary shadow-[0_4px_15px_#dc2626]" />

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group relative z-[60]">
            <div className="w-16 h-16 bg-white overflow-hidden flex items-center justify-center rounded-sm shadow-[0_0_15px_#dc2626] group-hover:scale-105 transition-all duration-500">
              <img src={logo} alt="Mithlesh Forging Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white leading-none tracking-tighter uppercase font-headline">
                Mithlesh Forging
              </span>
              <span className="text-[10px] text-tertiary font-black uppercase tracking-[0.35em] leading-none mt-1">
                Engineering Integrity
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative uppercase text-[11px] font-black tracking-[0.25em] transition-all duration-300 py-2 group ${location.pathname === link.path ? 'text-secondary' : 'text-white/70 hover:text-white'
                  }`}
              >
                {link.name}
                <motion.span
                  className={`absolute bottom-0 left-0 h-[4px] bg-tertiary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                />
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a 
                href="https://wa.me/919818776372?text=Hello%20Mithlesh%20Forging,%20I%20would%20like%20to%20request%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-8 py-3 text-[11px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:bg-tertiary transition-all inline-block"
              >
                Request Quote
              </a>
            </motion.div>
          </nav>

          {/* Hamburger Toggle */}
          <button
            className="lg:hidden relative z-[60] text-white p-2 hover:bg-secondary rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-primary z-[55] flex flex-col pt-32 px-8 overflow-y-auto"
          >
            <div className="absolute inset-0 z-0 technical-grid opacity-20 pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-30 pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`text-6xl font-headline font-black uppercase tracking-tighter flex items-center justify-between group ${location.pathname === link.path ? 'text-secondary' : 'text-white'
                      }`}
                  >
                    {link.name}
                    <ArrowUpRight size={48} className="opacity-20 group-hover:opacity-100 group-hover:text-tertiary transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-12 space-y-10 relative z-10">
              <div className="h-[4px] bg-gradient-to-r from-secondary to-tertiary" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                <div>
                  <span className="text-[12px] font-black text-tertiary uppercase tracking-widest block mb-1">Direct Line</span>
                  <span className="text-3xl font-black">+91 98187-76372</span>
                </div>
              </div>
              <button className="w-full bg-secondary text-white py-6 text-sm font-black uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                Download Catalog
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
