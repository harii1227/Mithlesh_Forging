import { motion } from 'framer-motion'
import { Settings, ShieldCheck, Microscope, Cog } from 'lucide-react'

const Services = () => {
  return (
    <div className="overflow-hidden bg-primary text-white">
      {/* Hero Section - Refined Proportions */}
      <section className="relative min-h-[50vh] flex items-center px-6 md:px-12 py-20 overflow-hidden chipka-hero bg-primary">
        <div className="absolute inset-0 z-0 technical-grid opacity-30" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-secondary geometric-overlay opacity-80" />
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-[0.3] contrast-125 grayscale"
            src="/hero.png"
            alt="Process hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-tertiary font-headline font-black tracking-[1em] uppercase text-[12px] mb-8 block border-y-2 border-secondary/10 py-3 max-w-sm mx-auto">VANGUARD SERVICES</span>
            <h1 className="text-5xl md:text-[110px] font-black text-white leading-[0.8] tracking-tighter uppercase mb-8">
              Machined <br /><span className="text-secondary italic">Velocity.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/70 leading-relaxed font-black uppercase tracking-tight">
              Extreme engineering solutions for the <br /> global forging matrix.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Bento Redesign - Refined Scale */}
      <section className="py-24 px-6 md:px-12 bg-primary relative border-t-[8px] border-secondary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Box 01 */}
            <div className="lg:col-span-12 bg-primary-container p-12 md:p-20 border-l-[16px] border-secondary group hover:shadow-[0_40px_80px_rgba(220,38,38,0.2)] transition-all duration-700 shadow-4xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 technical-grid opacity-10" />
              <span className="text-[11px] font-black text-tertiary uppercase tracking-[0.6em] mb-8 block underline decoration-secondary decoration-4 underline-offset-4">CORE STRATEGY 01</span>
              <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.8] group-hover:text-secondary transition-colors">Friction Screw Presses.</h2>
              <p className="text-white/60 text-xl leading-relaxed font-black uppercase mb-12 tracking-tight max-w-3xl">
                Manufacturing high-velocity friction drive systems for maximum kinetic energy transfer in heavy-duty forge operations.
              </p>
              <div className="flex flex-wrap gap-12">
                <StatItem value="30—500T" label="Dynamic Force" />
                <StatItem value="98.5%" label="Sync Efficiency" />
              </div>
            </div>

            <div className="lg:col-span-6 bg-secondary p-12 border-t-[12px] border-tertiary flex flex-col justify-between group min-h-[400px] shadow-4xl relative overflow-hidden">
              <div className="absolute inset-0 technical-grid opacity-30" />
              <div className="w-16 h-16 bg-primary text-white flex items-center justify-center shadow-3xl mb-12 group-hover:scale-110 transition-transform">
                <Microscope size={32} />
              </div>
              <div>
                <h3 className="text-4xl font-black text-primary uppercase tracking-tighter mb-4 leading-none group-hover:text-white transition-colors">Metallurgical Audit.</h3>
                <p className="text-[10px] text-white font-black uppercase tracking-[0.4em] leading-relaxed opacity-60">STRESS VERIFICATION PROTOCOLS</p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-primary-container p-12 border-t-[12px] border-secondary flex flex-col justify-between group min-h-[400px] shadow-4xl relative overflow-hidden">
              <div className="absolute inset-0 technical-lines opacity-10" />
              <div className="w-16 h-16 bg-secondary text-white flex items-center justify-center shadow-3xl mb-12 group-hover:rotate-12 transition-transform">
                <Cog size={32} />
              </div>
              <div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4 leading-none group-hover:text-tertiary transition-colors">Custom Machining.</h3>
                <p className="text-[10px] text-secondary font-black uppercase tracking-[0.4em] leading-relaxed">BESPOKE FORGE GEOMETRIES</p>
              </div>
            </div>

            <div className="lg:col-span-12 h-[1px] bg-secondary/10 my-4" />

            <div className="lg:col-span-12 bg-white/5 p-12 md:p-20 border-r-[16px] border-tertiary group transition-all duration-700 min-h-[500px] flex flex-col justify-between shadow-4xl relative overflow-hidden">
              <div className="absolute inset-0 bg-primary opacity-95 -z-10" />
              <div className="absolute top-0 right-0 w-full h-full bg-secondary geometric-overlay opacity-5 -z-10" />
              <div className="py-8">
                <span className="text-[11px] font-black text-secondary uppercase tracking-[0.6em] mb-8 block">STRATEGY 02</span>
                <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.85] group-hover:text-secondary transition-colors">Forging Press <br /> Technology.</h2>
                <p className="text-white/60 text-xl font-black uppercase tracking-tight leading-relaxed max-w-4xl">
                  Uncompromising forging infrastructure for aviation and automotive metallurgy.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 uppercase font-headline text-[12px] font-black tracking-[0.4em] mb-4">
                {["Zero-Flex Frame", "Thermal Alloys", "PLC Control"].map(tag => (
                  <div key={tag} className="px-8 py-4 border-2 border-secondary/20 bg-primary hover:bg-secondary text-white transition-all cursor-default font-black shadow-xl">{tag}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Grid - Refined Slabs */}
      <section className="py-24 px-6 md:px-12 bg-secondary relative border-primary border-y-[12px]">
        <div className="absolute inset-0 technical-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <span className="text-primary font-headline font-black text-[12px] uppercase tracking-[0.8em] mb-6 block underline decoration-white decoration-4 underline-offset-4">CORE SUPREMACY</span>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">Force & <br /> <span className="text-primary italic font-black">Finesse.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AdvantageBlock
              icon={<ShieldCheck size={48} strokeWidth={3} />}
              title="Endurance"
              text="Tested beyond nominal capacity to ensure zero failure."
              color="primary"
            />
            <AdvantageBlock
              icon={<Settings size={48} strokeWidth={3} />}
              title="Vanguard"
              text="24/7 technical strike team for critical infrastructure."
              color="tertiary"
            />
            <AdvantageBlock
              icon={<Microscope size={48} strokeWidth={3} />}
              title="Precision"
              text="Micron-level auditing for every forging stroke."
              color="primary"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const StatItem = ({ value, label }: { value: string, label: string }) => (
  <div className="space-y-3">
    <div className="text-5xl md:text-6xl font-black text-secondary leading-none tracking-tighter font-headline">{value}</div>
    <div className="text-[10px] font-black text-tertiary uppercase tracking-[0.4em]">{label}</div>
  </div>
)

const AdvantageBlock = ({ icon, title, text, color }: any) => (
  <div className={`p-10 bg-${color} text-white border border-white/10 hover:translate-y-[-10px] transition-transform duration-700 shadow-[0_20px_40px_rgba(0,0,0,0.4)] group`}>
    <div className="mb-8 group-hover:scale-110 transition-transform duration-700">{icon}</div>
    <h3 className="text-3xl font-black uppercase mb-6 tracking-tighter">{title}</h3>
    <p className="text-white/60 text-lg leading-relaxed font-black uppercase tracking-tighter">{text}</p>
  </div>
)

export default Services
