import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, X, Settings2, Shield, Phone } from 'lucide-react'
import { Button, Container, CtaBand, PageHero } from '../components/ui'
import { company, products, whatsappLink } from '../data/site'

const categories = ['All', ...Array.from(new Set(products.map((p) => p.type)))]

const Products = () => {
  const [params, setParams] = useSearchParams()
  const [category, setCategory] = useState('All')
  const selectedProduct = products.find((p) => p.id === params.get('machine')) ?? null

  const visible = useMemo(() => (category === 'All' ? products : products.filter((p) => p.type === category)), [category])

  const open = (id: string) => setParams({ machine: id }, { replace: true })
  const close = () => setParams({}, { replace: true })

  useEffect(() => {
    if (!selectedProduct) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setParams({}, { replace: true })
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [selectedProduct, setParams])

  return (
    <div className="overflow-hidden">
      <PageHero
        crumb="Products"
        eyebrow="Machinery catalogue"
        title={<>Precision <span className="text-steel">machinery.</span></>}
        text="Forging and sheet-metal machinery built for extreme tonnage and precision. Select a machine for full technical specifications."
        image="/images/power-press-h-type.jpg"
      />

      <section className="py-12 md:py-16">
        <Container>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  category === c ? 'bg-navy-900 text-white' : 'border border-steel-200 bg-white text-steel-600 hover:border-navy-900 hover:text-navy-900'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <motion.button
                  layout
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => open(p.id)}
                  className="group flex flex-col overflow-hidden rounded-xl border border-steel-200 bg-white text-left transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_30px_60px_-30px_rgba(7,28,66,0.45)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-steel-100">
                    <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy-900">{p.type}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold uppercase leading-tight text-navy-900">{p.name}</h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-steel-600">{p.description}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-steel-100 pt-5">
                      <span className="text-sm text-steel-500">Capacity <span className="font-semibold text-brand-600">{p.capacity}</span></span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy-900 group-hover:text-brand-600">
                        Specs <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <CtaBand />

      {/* Detail modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 md:items-center md:p-8" role="dialog" aria-modal="true" aria-label={selectedProduct.name}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl md:rounded-2xl lg:flex-row"
            >
              <button onClick={close} aria-label="Close" className="absolute right-4 top-4 z-10 rounded-full bg-white/95 p-2.5 text-navy-900 shadow hover:bg-steel-100">
                <X size={20} />
              </button>

              <div className="relative h-64 shrink-0 bg-steel-100 sm:h-80 lg:h-auto lg:w-[45%]">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="absolute inset-0 h-full w-full object-cover" />
              </div>

              <div className="thin-scrollbar flex-1 overflow-y-auto p-7 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">{selectedProduct.type}</span>
                <h2 className="mt-3 pr-10 text-2xl font-black uppercase leading-tight text-navy-900 md:text-4xl">{selectedProduct.name}</h2>
                <p className="mt-4 leading-relaxed text-steel-600">{selectedProduct.description}</p>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-navy-900">
                      <Settings2 size={16} className="text-brand-600" /> Specifications
                    </h4>
                    <dl className="mt-4 divide-y divide-steel-100 rounded-lg border border-steel-200">
                      {selectedProduct.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between gap-4 px-4 py-3 text-sm">
                          <dt className="text-steel-500">{spec.label}</dt>
                          <dd className="text-right font-semibold text-navy-900">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-navy-900">
                      <Shield size={16} className="text-brand-600" /> Key features
                    </h4>
                    <ul className="mt-4 space-y-2">
                      {selectedProduct.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 rounded-lg bg-steel-50 px-4 py-3 text-sm font-medium text-navy-900">
                          <CheckCircle2 size={16} className="shrink-0 text-brand-600" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Button href={whatsappLink(`Hello Mithlesh Forging, I would like a quotation for the ${selectedProduct.name}.`)}>
                    Get a quote for this machine
                  </Button>
                  <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-900/20 px-6 py-3.5 text-sm font-semibold text-navy-900 hover:bg-steel-50">
                    <Phone size={16} /> {company.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Products
