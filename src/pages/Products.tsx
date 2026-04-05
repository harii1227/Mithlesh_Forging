import { motion } from 'framer-motion'
import { ChevronRight, Info, Zap, CheckCircle2 } from 'lucide-react'

const Products = () => {
  const screwPressSpecs = [
    { label: 'Nominal Force (Tons)', v1: '100', v2: '250', v3: '500' },
    { label: 'Max. Stroke (mm)', v1: '280', v2: '350', v3: '480' },
    { label: 'Screw Diameter (mm)', v1: '140', v2: '185', v3: '240' },
    { label: 'Blows per Min.', v1: '22', v2: '18', v3: '14' },
    { label: 'Motor Power (HP)', v1: '10', v2: '25', v3: '50' },
  ]

  const powerPressSpecs = [
    { label: 'Frame Type', v1: 'Open Back', v2: 'Pillar Type', v3: 'Bridge Type' },
    { label: 'Stroke Adj. (mm)', v1: '10-100', v2: '20-150', v3: '25-200' },
    { label: 'Crankshaft (RPM)', v1: '60', v2: '45', v3: '35' },
    { label: 'Bed Size (mm)', v1: '700x450', v2: '900x600', v3: '1200x800' },
  ]

  return (
    <div className="overflow-hidden bg-primary text-white">
      {/* Hero Section - Geometric Intense */}
      <section className="relative min-h-[60vh] flex items-center px-6 md:px-12 py-32 overflow-hidden chipka-hero bg-primary">
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

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-end justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-secondary text-white font-headline text-[14px] font-black uppercase tracking-[1em] mb-12 shadow-[0_0_50px_rgba(220,38,38,0.5)]">
              CATALOG 2024
            </div>
            <h1 className="text-6xl md:text-[140px] font-black text-white leading-[0.8] tracking-tighter uppercase mb-6">
              Industrial <br /> <span className="text-tertiary">Endurance.</span>
            </h1>
          </motion.div>
          <div className="max-w-md pb-12 border-l-[16px] border-tertiary pl-12 bg-primary/80 backdrop-blur-md p-10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] relative">
            <div className="absolute top-0 right-0 p-8 technical-grid w-24 h-24 opacity-20" />
            <p className="text-white text-2xl font-black leading-relaxed font-black uppercase tracking-[0.1em] relative z-10">
              Forging infrastructure built for extreme tonnage.
            </p>
          </div>
        </div>
      </section>

      {/* Screw Press Table - High Contrast Palette */}
      <section className="py-40 px-6 md:px-12 bg-primary relative border-secondary border-t-[16px]">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary/5 skew-x-[-12deg] transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
            <div className="lg:col-span-5 relative">
              <span className="text-tertiary font-headline text-[14px] font-black uppercase tracking-[1em] mb-8 block underline decoration-secondary decoration-8 underline-offset-8">SECTION 01</span>
              <h2 className="text-5xl md:text-[85px] font-black text-white uppercase mb-12 tracking-tighter leading-[0.85]">Friction Screw Presses.</h2>
              <p className="text-white/40 text-2xl leading-relaxed font-black uppercase tracking-tight mb-20">
                Manufacturing India's standard for high-volume forging intensity.
              </p>

              <div className="relative group overflow-hidden border-[12px] border-primary-container p-4 shadow-4xl transition-all duration-[2s] bg-white/5">
                <img
                  className="w-full h-[600px] object-cover grayscale brightness-[0.4] contrast-150 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s] group-hover:scale-110"
                  src="/detail.png"
                  alt="Component Detail"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-16 left-16 p-12 bg-secondary text-white text-[14px] font-black uppercase tracking-[0.5em] shadow-4xl group-hover:bg-tertiary">
                  ULTRA-STABILITY FRAME
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-primary-container border-t-[20px] border-secondary shadow-[0_60px_120px_rgba(0,0,0,0.8)] overflow-hidden relative">
                <div className="absolute top-0 right-0 p-12 technical-grid w-48 h-48 opacity-20" />
                <div className="overflow-x-auto custom-scrollbar">
                  <table className="w-full text-left border-collapse relative z-10 min-w-[600px]">
                    <thead>
                      <tr className="bg-secondary text-white uppercase font-headline text-[12px]">
                        <th className="p-10 font-black tracking-widest">METRICS</th>
                        <th className="p-10 font-black tracking-widest text-center bg-tertiary">FSP-100</th>
                        <th className="p-10 font-black tracking-widest text-center bg-tertiary/80">FSP-250</th>
                        <th className="p-10 font-black tracking-widest text-center bg-tertiary/60">FSP-500</th>
                      </tr>
                    </thead>
                    <tbody>
                      {screwPressSpecs.map((spec, idx) => (
                        <tr key={spec.label} className={`${idx % 2 === 0 ? '' : 'bg-primary/30'} border-b border-white/5 transition-all hover:bg-secondary/20`}>
                          <td className="p-10 font-headline text-[15px] font-black text-white uppercase tracking-[0.1em]">{spec.label}</td>
                          <td className="p-10 text-center text-tertiary text-lg font-black tracking-[0.2em]">{spec.v1}</td>
                          <td className="p-10 text-center text-tertiary text-lg font-black tracking-[0.2em]">{spec.v2}</td>
                          <td className="p-10 text-center text-tertiary text-lg font-black tracking-[0.2em]">{spec.v3}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-16 flex items-center gap-10 p-16 bg-secondary text-white border-l-[16px] border-tertiary shadow-4xl">
                <Info size={48} className="text-tertiary shrink-0" />
                <p className="text-[14px] uppercase font-black tracking-[0.4em] leading-relaxed">
                  Technical specifications subject to extreme environment modifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Power Press Table - Geometric Split Over Navy */}
      <section className="py-40 px-6 md:px-12 bg-primary relative border-primary border-y-[24px] overflow-hidden">
        <div className="absolute right-0 bottom-0 w-2/3 h-full bg-secondary geometric-overlay opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center relative z-10">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-primary-container border-t-[20px] border-tertiary shadow-[0_60px_120px_rgba(0,0,0,0.8)] overflow-hidden relative">
              <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-tertiary text-primary font-headline text-[12px] uppercase">
                      <th className="p-10 font-black tracking-widest">CONFIGURATIONS</th>
                      <th className="p-10 font-black tracking-widest text-center bg-secondary text-white">50T</th>
                      <th className="p-10 font-black tracking-widest text-center bg-secondary/80 text-white">100T</th>
                      <th className="p-10 font-black tracking-widest text-center bg-secondary/60 text-white">200T</th>
                    </tr>
                  </thead>
                  <tbody>
                    {powerPressSpecs.map((spec, idx) => (
                      <tr key={spec.label} className={`${idx % 2 === 0 ? '' : 'bg-primary/50'} border-b border-white/5 transition-all hover:bg-tertiary/20`}>
                        <td className="p-10 font-headline text-[15px] font-black text-white uppercase tracking-[0.1em]">{spec.label}</td>
                        <td className="p-10 text-center text-secondary text-lg font-black tracking-[0.2em]">{spec.v1}</td>
                        <td className="p-10 text-center text-secondary text-lg font-black tracking-[0.2em]">{spec.v2}</td>
                        <td className="p-10 text-center text-secondary text-lg font-black tracking-[0.2em]">{spec.v3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-16">
            <div>
              <span className="text-secondary font-headline text-[14px] font-black uppercase tracking-[1em] mb-8 block underline decoration-tertiary decoration-8">SECTION 02</span>
              <h2 className="text-5xl md:text-[85px] font-black text-white uppercase mb-12 tracking-tighter leading-[0.8]">Power Press Systems.</h2>
              <p className="text-white/40 text-2xl leading-relaxed font-black uppercase tracking-tight opacity-100">
                Optimized high-velocity blanking.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 pt-8">
              <IconDetail icon={<Zap className="text-secondary" />} text="Pneumatic Clutch Systems" color="secondary" />
              <IconDetail icon={<CheckCircle2 className="text-secondary" />} text="Central Lubrication Protocol" color="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Model Block - Geometric Intense */}
      <section className="py-40 px-6 md:px-12 bg-primary relative">
        <div className="absolute inset-0 technical-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto p-20 md:p-40 bg-primary-container relative overflow-hidden border-b-[32px] border-secondary shadow-[0_60px_150px_rgba(0,0,0,0.8)] group">
          <div className="absolute top-0 right-0 w-full h-full bg-secondary geometric-overlay opacity-10 -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
            <div className="space-y-16">
              <span className="text-tertiary font-headline font-black text-[14px] uppercase tracking-[1em]">PLATFORM 03</span>
              <h3 className="text-6xl md:text-[100px] font-black text-white uppercase tracking-tighter leading-[0.8]">
                Vanguard <br /> Forging Line.
              </h3>
              <div className="flex flex-wrap gap-10 uppercase font-headline text-[14px] font-black tracking-[0.6em]">
                {["Titanium Alloys", "PLC Sync Control"].map(tag => (
                  <div key={tag} className="px-10 py-6 border-4 border-secondary/30 bg-primary hover:bg-secondary text-white transition-all cursor-default font-black shadow-4xl">{tag}</div>
                ))}
              </div>
              <button className="text-[14px] font-black uppercase tracking-[1em] text-secondary flex items-center gap-6 group hover:text-tertiary underline decoration-primary-container decoration-8 underline-offset-[20px]">
                COMMISSION PROJECT <ChevronRight size={24} className="group-hover:translate-x-10 transition-transform" />
              </button>
            </div>
            <div className="h-[700px] relative overflow-hidden shadow-4xl border-l-[16px] border-secondary">
              <img src="/inspection.png" className="w-full h-full object-cover grayscale brightness-[0.3] contrast-150 group-hover:grayscale-0 group-hover:scale-105 duration-[4s] transition-transform" alt="Detail" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const IconDetail = ({ icon, text, color }: { icon: any, text: string, color: string }) => (
  <div className={`flex items-center gap-10 p-12 bg-primary border-l-[16px] border-${color} group hover:shadow-4xl transition-all shadow-[0_30px_60px_rgba(0,0,0,0.6)]`}>
    <div className="group-hover:scale-150 transition-all duration-700 shadow-2xl">{icon}</div>
    <span className="text-[16px] font-black text-white uppercase tracking-[0.4em]">{text}</span>
  </div>
)

export default Products
