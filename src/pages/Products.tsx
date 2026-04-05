import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Zap, CheckCircle2, X, Settings2, Gauge, Shield, Cpu } from 'lucide-react'

interface Product {
  id: string
  name: string
  type: string
  description: string
  image: string
  specs: { label: string; value: string }[]
  features: string[]
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const products: Product[] = [
    {
      id: 'friction-screw-heavy',
      name: 'Heavy-Duty Friction Screw Press',
      type: 'FORGING PRESS',
      description: 'Engineered for high-tonnage forging operations with maximum kinetic energy transfer and ultra-rigid frame stability.',
      image: '/images/friction-screw-press-heavy.jpg',
      features: ['Dual Friction Drive', 'Oversized Screw Diameter', 'Precision Slide Guidance', 'Heavy-Duty Forged Bed'],
      specs: [
        { label: 'Capacity', value: '300 MT — 1000 MT' },
        { label: 'Screw Diameter', value: '250 mm — 400 mm' },
        { label: 'Max Stroke', value: '450 mm — 600 mm' },
        { label: 'Bed Size', value: '1200 x 1200 mm' },
        { label: 'Motor Power', value: '75 HP — 150 HP' }
      ]
    },
    {
      id: 'friction-screw-standard',
      name: 'Standard Friction Screw Press',
      type: 'PRECISION FORGING',
      description: 'The industry workhorse for medium-sized hot and cold forging components, offering perfect balance of speed and force.',
      image: '/images/friction-screw-press-standard.jpg',
      features: ['Adjustable Blow Force', 'Easy Maintenance Access', 'Rapid Cycle Time', 'High Thermal Resistance'],
      specs: [
        { label: 'Capacity', value: '50 MT — 250 MT' },
        { label: 'Screw Diameter', value: '140 mm — 220 mm' },
        { label: 'Max Stroke', value: '250 mm — 400 mm' },
        { label: 'Bed Size', value: '800 x 800 mm' },
        { label: 'Motor Power', value: '15 HP — 40 HP' }
      ]
    },
    {
      id: 'h-type-power-press',
      name: 'H-Type Power Press',
      type: 'MECHANICAL PRESS',
      description: 'Pillar-type structural design for zero-deflection operations in heavy-duty blanking and deep drawing applications.',
      image: '/images/power-press-h-type.jpg',
      features: ['Eight-Point Guidance', 'Geared Drive System', 'Pneumatic Clutch', 'Electronic Overload Protection'],
      specs: [
        { label: 'Capacity', value: '100 T — 500 T' },
        { label: 'Stroke', value: '150 mm — 350 mm' },
        { label: 'Speed', value: '20 — 45 SPM' },
        { label: 'Bed Area', value: '1500 x 1000 mm' },
        { label: 'Drive', value: 'Direct Gear Drive' }
      ]
    },
    {
      id: 'c-type-power-press',
      name: 'C-Type Eccentric Press',
      type: 'GENERAL MACHINING',
      description: 'Versatile "open-back" design for easy material handling and high-speed stamping operations in a compact footprint.',
      image: '/images/power-press-c-type.jpg',
      features: ['Heavy Cast Frame', 'Adjustable Stroke', 'Mechanical Safety Lock', 'Interchangeable Bolster'],
      specs: [
        { label: 'Capacity', value: '5 T — 250 T' },
        { label: 'Stroke Range', value: '5 mm — 120 mm' },
        { label: 'Speed', value: '45 — 70 SPM' },
        { label: 'Drive', value: 'Single Flywheel' },
        { label: 'Frame', value: 'Rigid C-Section' }
      ]
    },
    {
      id: 'shearing-machine',
      name: 'Mechanical Shearing Machine',
      type: 'METAL CUTTING',
      description: 'KIRAN-engineered precision cutting system for heavy metal plates with micron-level accuracy and clean-cut edges.',
      image: '/images/shearing-machine.jpg',
      features: ['High-Carbon Blades', 'Hydraulic Hold-Downs', 'Precision Backgauge', 'Rapid Clearance Adj.'],
      specs: [
        { label: 'Cutting Length', value: '1500 — 4000 mm' },
        { label: 'Max Thickness', value: '4 mm — 25 mm' },
        { label: 'Blade Material', value: 'D2 / HCHCr Steel' },
        { label: 'Backgauge Range', value: '1000 mm' },
        { label: 'Cut Angle', value: '1.5° — 4°' }
      ]
    }
  ]

  return (
    <div className="overflow-hidden bg-primary text-white">
      {/* Hero Section - Refined Proportions */}
      <section className="relative min-h-[50vh] flex items-center px-6 md:px-12 py-24 overflow-hidden chipka-hero bg-primary">
        <div className="absolute inset-0 z-0 technical-grid opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary geometric-overlay opacity-80" />
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-[0.3] contrast-125 grayscale"
            src="/hero.png"
            alt="Products Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-secondary text-white font-headline text-[12px] font-black uppercase tracking-[1em] mb-12 shadow-[0_0_50px_rgba(220,38,38,0.3)]">
              MITHLESH FORGING PRODUCTION 2024
            </div>
            <h1 className="text-5xl md:text-[110px] font-black text-white leading-[0.8] tracking-tighter uppercase mb-6">
              Precision <br /> <span className="text-tertiary italic font-black">Machinery.</span>
            </h1>
            <p className="max-w-xl text-xl text-white/60 font-black uppercase tracking-tight mt-8 border-l-8 border-tertiary pl-8">
              Forging infrastructure built for extreme tonnage and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Gallery - Bento Style */}
      <section className="py-24 px-6 md:px-12 bg-primary relative border-t-8 border-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-tertiary font-headline font-black text-[12px] uppercase tracking-[0.8em] mb-4 block border-l-4 border-secondary pl-6">MACHINERY CATALOG</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Heavy-Duty <br /> <span className="text-secondary italic font-black">Inventory.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedProduct(product)}
                className="group relative bg-primary-container border-b-8 border-secondary overflow-hidden cursor-pointer shadow-4xl hover:shadow-secondary/20 transition-all duration-500"
              >
                <div className="h-[400px] overflow-hidden">
                  <img
                    src={product.image}
                    className="w-full h-full object-cover grayscale brightness-[0.5] contrast-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                    alt={product.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90" />
                </div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[10px] font-black text-secondary tracking-[0.5em] mb-3">{product.type}</div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 leading-none group-hover:text-tertiary transition-colors">{product.name}</h3>
                  <div className="flex items-center gap-4 text-tertiary font-black uppercase text-[11px] tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW SPECIFICATIONS <ChevronRight size={18} />
                  </div>
                </div>

                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-secondary text-white flex items-center justify-center shadow-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <Zap size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-primary/95 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-7xl bg-primary shadow-5xl border-t-[16px] border-secondary flex flex-col lg:flex-row overflow-hidden max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-8 right-8 z-50 p-4 bg-secondary text-white hover:bg-tertiary transition-colors shadow-4xl group"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform" />
              </button>

              <div className="lg:w-1/2 relative min-h-[350px] lg:min-h-full">
                <img 
                  src={selectedProduct.image} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700" 
                  alt={selectedProduct.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />
                <div className="absolute bottom-12 left-12 p-8 bg-secondary/95 backdrop-blur-md text-white border-l-[12px] border-tertiary shadow-3xl">
                  <div className="text-[11px] font-black tracking-[0.5em] mb-2 uppercase">PRODUCTION READY</div>
                  <div className="text-4xl font-black uppercase tracking-tighter">AUTHENTIC UNIT</div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-10 md:p-16 overflow-y-auto custom-scrollbar">
                <div className="inline-block px-6 py-2 bg-secondary/10 text-secondary text-[11px] font-black uppercase tracking-[0.5em] mb-10 border-l-4 border-secondary">
                  TECHNICAL DOSSIER
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                  {selectedProduct.name}
                </h2>
                <p className="text-white/50 text-lg leading-relaxed font-black uppercase tracking-tight mb-12">
                  {selectedProduct.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                  <div className="space-y-8">
                    <h4 className="flex items-center gap-4 text-tertiary text-[12px] font-black uppercase tracking-[0.4em]">
                      <Settings2 size={20} /> CORE METRICS
                    </h4>
                    <div className="space-y-4">
                      {selectedProduct.specs.map(spec => (
                        <div key={spec.label} className="flex justify-between items-end border-b border-white/10 pb-3 group">
                          <span className="text-[11px] font-black text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">{spec.label}</span>
                          <span className="text-md font-black text-secondary tracking-wider">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h4 className="flex items-center gap-4 text-secondary text-[12px] font-black uppercase tracking-[0.4em]">
                      <Shield size={20} /> VANGUARD FEATURES
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedProduct.features.map(feature => (
                        <div key={feature} className="flex items-center gap-4 p-4 bg-primary-container border-l-4 border-tertiary shadow-xl hover:translate-x-2 transition-transform">
                          <CheckCircle2 size={18} className="text-tertiary" />
                          <span className="text-[11px] font-black text-white uppercase tracking-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="flex items-center gap-6 p-8 bg-primary-container border-t-4 border-secondary">
                    <Gauge size={32} className="text-secondary" />
                    <div>
                      <div className="text-[10px] font-black text-white/30 tracking-[0.4em] uppercase">Status</div>
                      <div className="text-md font-black text-white tracking-widest uppercase">OPTIMIZED</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-8 bg-primary-container border-t-4 border-tertiary">
                    <Cpu size={32} className="text-tertiary" />
                    <div>
                      <div className="text-[10px] font-black text-white/30 tracking-[0.4em] uppercase">Control</div>
                      <div className="text-md font-black text-white tracking-widest uppercase">PLC SYNC</div>
                    </div>
                  </div>
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
