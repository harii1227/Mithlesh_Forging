import { motion } from 'framer-motion'
import { ArrowRight, Drill, ShieldCheck, Zap, Factory, Quote } from 'lucide-react'

const testimonials = [
  { name: "Rajesh Kumar", company: "Steel Industries", text: "Mithlesh Forging's screw presses have increased our production efficiency by 40%." },
  { name: "Amit Sharma", company: "Auto Parts India", text: "The reliability of their C-Type presses is unmatched in the Indian market." },
  { name: "Sanjay Gupta", company: "ForgeTech Solutions", text: "Exceptional technical support and high-precision machinery. Highly recommended." },
  { name: "Vikram Singh", company: "Heavy Gear Corp", text: "Their H-Type presses are built for extreme endurance. Zero downtime in over 2 years." },
  { name: "Deepak Verma", company: "Precision Metals", text: "Modern engineering meets industrial strength. A trusted partner for our forging needs." },
]

const Home = () => {
  return (
    <div className="overflow-hidden bg-primary text-white">
      {/* Hero Section - Geometric Intense */}
      <section className="relative min-h-screen flex items-center overflow-hidden chipka-hero bg-primary">
        <div className="absolute inset-0 z-0 technical-grid opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary geometric-overlay opacity-80" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-tertiary geometric-overlay opacity-40 rotate-180" />

        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-[0.4] contrast-125 grayscale"
            src="/hero.png"
            alt="Industrial Machinery"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary text-white font-headline text-[12px] font-black uppercase tracking-[0.4em] mb-12 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              <div className="w-2 h-2 bg-white animate-ping" />
              INDUSTRIALLY FORGED
            </div>

            <h1 className="text-6xl md:text-[120px] font-black leading-[0.85] mb-12 uppercase tracking-tighter">
              Engineered <br /><span className="text-tertiary">Integrity.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-xl mb-16 leading-relaxed font-bold uppercase tracking-tight">
              Manufacturing India's most advanced <span className="text-secondary underline decoration-tertiary decoration-8 underline-offset-8">Friction Screw Presses</span> for the global market.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                className="bg-secondary text-white font-headline font-black uppercase tracking-[0.3em] px-16 py-7 text-[12px] shadow-[0_0_40px_rgba(220,38,38,0.6)] hover:bg-tertiary transition-all"
              >
                Request Quote
              </motion.button>
              <button className="bg-transparent border-4 border-white/20 text-white font-headline font-black uppercase tracking-[0.3em] px-16 py-7 text-[12px] hover:bg-white hover:text-primary transition-all">
                The Catalog
              </button>
            </div>
          </motion.div>

          <div className="flex lg:justify-end relative mt-20 lg:mt-0">
            <div className="absolute -inset-20 bg-secondary/20 blur-[150px] rounded-full" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative p-2 bg-gradient-to-br from-secondary via-tertiary to-secondary shadow-[0_0_80px_rgba(220,38,38,0.4)] w-full max-w-md mx-auto lg:mx-0"
            >
              <div className="bg-primary p-8 md:p-12 space-y-8 md:space-y-12 relative border border-white/10">
                <div className="space-y-4">
                  <div className="text-5xl md:text-6xl font-headline font-black text-secondary tracking-tighter text-center lg:text-left">1985</div>
                  <div className="text-[10px] md:text-[12px] text-tertiary font-black uppercase tracking-[0.5em] text-center lg:text-left">ESTABLISHED LEGACY</div>
                </div>
                <div className="h-[2px] bg-gradient-to-r from-secondary to-transparent" />
                <div className="grid grid-cols-1 gap-6 md:gap-8">
                  {[
                    "500+ Delivered Units",
                    "Exported Internationally",
                    "Infinite Tonnage Support"
                  ].map(stat => (
                    <div key={stat} className="flex items-center gap-6">
                      <div className="w-3 h-3 bg-secondary shadow-[0_0_15px_#dc2626] shrink-0" />
                      <span className="text-[11px] md:text-[12px] text-white font-black uppercase tracking-widest">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities - High Contrast Navy/Red Split */}
      <section className="py-40 bg-primary relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-[-12deg] transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-3xl">
              <span className="text-tertiary font-headline font-black text-[14px] uppercase tracking-[0.8em] mb-6 block border-l-8 border-secondary pl-6">ENGINEERING DIVISIONS</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">The Modern <br /><span className="text-secondary italic">Heavyweight</span> Standard.</h2>
            </div>
            <div className="font-headline text-[12px] uppercase font-black tracking-[0.4em] text-tertiary group flex items-center gap-6 cursor-pointer">
              TECH STACK <ArrowRight className="group-hover:translate-x-4 transition-transform text-secondary" size={24} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: 'Friction Press', desc: 'Powerful impact for high-speed forging output.', icon: <Zap size={32} />, color: 'secondary' },
              { name: 'Forging Press', desc: 'Precision engineered for cold forging metallurgy.', icon: <Drill size={32} />, color: 'tertiary' },
              { name: 'Power Press C', desc: 'Rigid C-frame design for specialized punching.', icon: <ShieldCheck size={32} />, color: 'secondary' },
              { name: 'Power Press H', desc: 'Ultimate stability for high-tonnage stamping.', icon: <Factory size={32} />, color: 'tertiary' },
            ].map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-16 bg-primary-container border-b-[12px] border-secondary shadow-2xl hover:translate-y-[-20px] transition-all duration-700 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 technical-grid opacity-20" />
                <div className={`text-${item.color} group-hover:scale-125 duration-700 mb-12 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-3xl font-black uppercase mb-6 tracking-tighter">{item.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-12 font-bold uppercase tracking-tight">{item.desc}</p>
                <button className={`text-[11px] font-black uppercase tracking-[0.3em] text-${item.color} flex items-center gap-3 group-hover:underline`}>Technical Specs <ArrowRight size={14} /></button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Intense Red Geometric */}
      <section className="py-40 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0 technical-grid opacity-20" />
        <div className="absolute top-0 left-0 w-full h-[12px] bg-primary" />
        <div className="max-w-7xl mx-auto px-6 mb-32 text-center relative z-10">
          <span className="text-white font-headline font-black text-[12px] uppercase tracking-[1em] mb-8 block">VOICE OF PARTNERS</span>
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none text-primary">
            Global <br />Trust.
          </h2>
        </div>

        <div className="relative flex gap-10 mask-testimonials">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex gap-10 whitespace-nowrap min-w-full hover:[animation-play-state:paused]"
          >
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="inline-block p-16 bg-primary w-[500px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-l-[16px] border-tertiary shrink-0"
              >
                <Quote size={60} className="text-secondary/20 mb-10" />
                <p className="text-white font-body text-xl leading-relaxed italic mb-12 whitespace-normal font-medium tracking-tight">"{t.text}"</p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-secondary text-white rounded-none flex items-center justify-center font-headline font-black text-2xl shadow-xl">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-lg font-black text-white uppercase tracking-[0.2em]">{t.name}</div>
                    <div className="text-[11px] text-tertiary font-black uppercase tracking-[0.4em] mt-1">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Narrative Section - Extreme High Contrast */}
      <section className="py-40 bg-primary relative">
        <div className="absolute left-0 top-0 w-full h-full geometric-split opacity-50" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-10 bg-secondary/30 blur-[150px] rounded-full rotate-45" />
            <img
              src="/inspection.png"
              className="relative z-10 w-full h-[800px] object-cover shadow-[0_60px_100px_rgba(0,0,0,0.8)] border-8 border-white/5 grayscale group-hover:grayscale-0 transition-all duration-[2s]"
              alt="Quality Inspection"
            />
            <div className="absolute top-20 right-[-40px] z-20 p-20 bg-secondary shadow-[0_0_100px_rgba(220,38,38,0.8)] border-b-[24px] border-tertiary">
              <div className="text-6xl font-black text-white mb-2 tracking-tighter">QC-EX</div>
              <div className="text-[14px] text-primary font-black uppercase tracking-[0.8em]">QUALITY ZERO-DEFECT</div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-20"
          >
            <h2 className="text-7xl md:text-[100px] font-black text-white uppercase leading-[0.8] tracking-tighter">
              Building <br /><span className="text-secondary underline decoration-tertiary decoration-[12px] underline-offset-[20px]">Standards.</span>
            </h2>
            <p className="text-white/60 text-2xl leading-relaxed font-black uppercase tracking-tight">
              Mithlesh Forging remains the uncompromising core of heavy industry. We engineer the backbone of global production lines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-16 bg-primary-container border-l-[20px] border-secondary shadow-3xl">
                <div className="text-7xl font-headline font-black text-white leading-none mb-4">500+</div>
                <div className="text-[12px] font-black text-tertiary uppercase tracking-[0.6em]">DELIVERIES</div>
              </div>
              <div className="p-16 bg-primary-container border-l-[20px] border-tertiary shadow-3xl">
                <div className="text-7xl font-headline font-black text-white leading-none mb-4">25+</div>
                <div className="text-[12px] font-black text-secondary uppercase tracking-[0.6em]">MARKETS</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Home
