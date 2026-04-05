import { motion } from 'framer-motion'
import { Rocket, Eye, CheckCircle2, Factory } from 'lucide-react'
import mithleshImg from '../assets/mithlesh.jpg'

const About = () => {
  return (
    <div className="overflow-hidden bg-primary text-white">
      {/* Hero Section - Geometric Intense */}
      <header className="relative min-h-[60vh] flex items-center px-6 md:px-12 py-32 overflow-hidden chipka-hero bg-primary">
        <div className="absolute inset-x-0 bottom-0 h-[100px] bg-secondary geometric-overlay opacity-80" />
        <div className="absolute inset-0 z-0 technical-grid opacity-30" />
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-[0.3] contrast-125 grayscale"
            src="/hero.png"
            alt="Engineering Detail"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left"
          >
            <div className="inline-block bg-secondary text-primary border-t-[8px] border-tertiary px-10 py-4 mb-12 shadow-[0_0_50px_rgba(220,38,38,0.4)]">
              <div className="inline-block w-3 h-3 bg-white rounded-full mr-5 animate-ping shadow-[0_0_15px_#fff]" />
              <span className="font-headline font-black text-white text-[14px] uppercase tracking-[0.6em]">EST. 1994</span>
            </div>
            <h1 className="text-6xl md:text-[110px] font-black leading-[0.85] mb-12 uppercase tracking-tighter">
              Forged <br /><span className="text-tertiary">Standards.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-black uppercase tracking-[0.2em] leading-relaxed">
              Leading the global industrial vanguard with high-precision <span className="text-secondary underline underline-offset-8">forging technology.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-4 border-4 border-secondary opacity-30 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative overflow-hidden border-b-[20px] border-secondary shadow-5xl">
              <img 
                src="/images/friction-screw-press-heavy.jpg" 
                className="w-full h-[500px] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s]" 
                alt="Forging Unit" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 p-6 bg-secondary text-white font-black uppercase text-[12px] tracking-[0.5em]">
                HEAVY DUTY VANGUARD
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Narrative Section - High Contrast Split */}
      <section className="py-40 px-6 md:px-12 bg-primary relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary/5 skew-x-[-15deg] transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <span className="text-tertiary font-headline font-black text-[14px] uppercase tracking-[1em] block border-l-[12px] border-secondary pl-10">HERITAGE VANGUARD</span>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]">
              Decades of <br /> <span className="text-secondary italic">Machined Perfection.</span>
            </h2>
            <div className="space-y-10 text-white/60 leading-relaxed text-2xl font-black uppercase tracking-tighter opacity-80">
              <p>Mithlesh Forging India Pvt. Ltd. was founded with a singular vision: to produce material durability that defies industry age.</p>
              <p className="text-tertiary">Our evolution has defining benchmarks at every stage of mechanical design.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <StatBlock value="30+" label="Industrial Lifespan" color="secondary" />
              <StatBlock value="500+" label="Precision Units" color="tertiary" />
            </div>
          </motion.div>

          <div className="relative group">
            <div className="absolute -inset-10 border-[12px] border-secondary opacity-20 transform rotate-3" />
            <img
              className="relative z-10 w-full h-[800px] object-cover shadow-[0_60px_120px_rgba(0,0,0,0.8)] border-[20px] border-white/5 grayscale group-hover:grayscale-0 transition-all duration-[3s] transform group-hover:scale-[1.02] bg-primary"
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="High Precision Industrial Forging"
            />
          </div>
        </div>
      </section>

      {/* Values Section - Aggressive Blocking */}
      <section className="py-40 px-6 md:px-12 bg-secondary relative border-primary border-y-[24px]">
        <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          <ValueCard
            colSpan="lg:col-span-8"
            icon={<Rocket size={80} className="text-tertiary" />}
            title="Strategic Mission"
            text="To eliminate production downtime globally by providing forging machinery that combines extreme force with millimetric precision."
            color="primary"
          />
          <ValueCard
            colSpan="lg:col-span-4"
            icon={<Eye size={80} className="text-white" />}
            title="Vision 2030"
            text="Becoming the absolute benchmark for zero-defect industrial machinery."
            color="tertiary"
          />
        </div>
      </section>

      {/* Certification Section - Geometric Intense */}
      <section className="py-40 px-6 md:px-12 bg-primary overflow-hidden relative border-secondary border-t-[12px]">
        <div className="absolute left-0 bottom-0 w-1/3 h-full technical-lines opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <div className="space-y-16">
            <span className="text-secondary font-headline font-black text-[14px] uppercase tracking-[1em] block">ISO QA/QC EXCELLENCE</span>
            <h2 className="text-6xl md:text-[110px] font-black text-white uppercase tracking-tighter leading-[0.8]">
              ZERO <br /> <span className="text-tertiary">DEFECT.</span>
            </h2>
            <p className="text-white/60 text-2xl leading-relaxed font-black uppercase tracking-tight max-w-lg">
              Every machine is a testament to our compromise-free engineering policy.
            </p>
            <ul className="space-y-12">
              {['Component Traceability', 'Advanced Spectro Lab', 'Zero-Defect Policy'].map(item => (
                <li key={item} className="flex items-center gap-10 text-white font-headline text-[16px] font-black uppercase tracking-[0.5em] group">
                  <CheckCircle2 size={40} className="text-secondary shadow-[0_0_20px_#dc2626] shrink-0 group-hover:scale-125 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-secondary/20 blur-[150px] rounded-full scale-150 rotate-45" />
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0 60px 120px -20px rgba(0,0,0,0.8)" }}
              className="p-20 bg-primary-container border-b-[24px] border-secondary shadow-4xl relative max-w-lg w-full"
            >
              <div className="absolute top-0 right-0 p-12 technical-grid w-48 h-48 opacity-20" />
              <Factory size={100} className="text-secondary mb-16 opacity-100 shadow-2xl" />
              <h3 className="text-4xl font-black text-white uppercase mb-8 tracking-tighter">Facility Ready</h3>
              <p className="text-[14px] text-tertiary font-black uppercase tracking-[0.4em] leading-relaxed mb-16">
                Our facility is always open for technical audits and zero-failure verification.
              </p>
              <div className="h-32 bg-secondary border border-white/20 flex items-center justify-center shadow-3xl">
                <span className="text-[14px] text-white uppercase font-black tracking-[1.2em] animate-pulse">QUALITY PASS</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Mission & Vision - Redesigned for High Impact */}
      <section className="py-32 px-6 md:px-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 technical-grid opacity-5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 bg-white/5 border border-white/10 shadow-6xl backdrop-blur-sm overflow-hidden">
            {/* Mission Sector */}
            <div className="lg:col-span-8 p-12 md:p-20 relative group">
              <div className="absolute top-0 left-0 w-32 h-[4px] bg-secondary" />
              <div className="absolute top-0 left-0 w-[4px] h-32 bg-secondary" />
              
              <Rocket className="text-secondary w-20 h-20 mb-12 opacity-50 group-hover:opacity-100 transition-opacity" />
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-10 leading-none">
                Strategic <br /> <span className="text-secondary italic">Mission.</span>
              </h2>
              <p className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight max-w-2xl opacity-90">
                To eliminate production downtime globally by providing forging machinery that combines <span className="text-secondary">extreme force</span> with <span className="text-tertiary underline decoration-secondary">millimetric precision.</span>
              </p>
            </div>

            {/* Vision Sector */}
            <div className="lg:col-span-4 p-12 md:p-20 bg-primary-container relative border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="absolute bottom-0 right-0 w-32 h-[4px] bg-tertiary" />
              <div className="absolute bottom-0 right-0 w-[4px] h-32 bg-tertiary" />

              <Eye className="text-tertiary w-16 h-16 mb-12 opacity-50 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                Vision <br /> <span className="text-tertiary italic">2030.</span>
              </h3>
              <p className="text-lg font-black text-white/70 uppercase tracking-widest leading-relaxed border-l-4 border-tertiary pl-6">
                Becoming the absolute benchmark for zero-defect industrial machinery and high-tonnage engineering globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Profile Section - Enhanced Original Quality */}
      <section className="py-40 px-6 md:px-12 bg-primary relative border-t-8 border-secondary overflow-hidden">
        <div className="absolute inset-0 technical-grid opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 relative z-10 items-center">
          <div className="lg:col-span-4 relative group">
            <div className="absolute -inset-10 border-[12px] border-tertiary opacity-40 transform skew-y-3" />
            <div className="relative z-10 aspect-square bg-primary-container border-[12px] border-white/10 flex items-center justify-center overflow-hidden shadow-6xl">
              <img 
                src={mithleshImg} 
                alt="Mithlesh Kuumar" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          <div className="lg:col-span-8 space-y-16">
            <div>
              <div className="inline-block px-10 py-5 bg-secondary text-white font-headline text-[12px] font-black uppercase tracking-[0.8em] mb-12 shadow-3xl">
                Vanguard Leadership
              </div>
              <h2 className="text-6xl md:text-[90px] font-black text-white uppercase tracking-tighter leading-[0.8] mb-8">
                Mithlesh <br /> <span className="text-secondary italic">Kuumar.</span>
              </h2>
              <div className="text-3xl font-black text-tertiary uppercase tracking-widest mt-4 border-l-8 border-tertiary pl-10 underline decoration-8 underline-offset-[20px]">
                Director & Founder
              </div>
            </div>
            
            <p className="text-white/60 text-2xl font-black uppercase tracking-tight leading-relaxed max-w-3xl">
              Pioneering industrial precision for over three decades, specializing in high-tonnage mechanical press architecture and global forging standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 opacity-90">
              <div className="space-y-6 p-10 bg-primary-container border-t-8 border-secondary shadow-2xl">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em] block">Core Manufacturing Scope</span>
                <p className="text-xl font-black text-white uppercase leading-relaxed tracking-tight underline decoration-4 decoration-tertiary underline-offset-8">
                  Friction Screw Press, Forging Screw Press, & High-Performance Power Press Machine.
                </p>
              </div>
              <div className="space-y-6 p-10 bg-primary-container border-t-8 border-tertiary shadow-2xl">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em] block">Technical Integrity</span>
                <p className="text-xl font-black text-white uppercase leading-relaxed tracking-tight underline decoration-4 decoration-secondary underline-offset-8">
                   Specialized Repair Operations & Global Maintenance Systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const StatBlock = ({ value, label, color }: { value: string, label: string, color: string }) => (
  <div className={`p-16 bg-primary-container border-l-[16px] border-${color} shadow-[0_30px_60px_rgba(0,0,0,0.4)] hover:scale-105 transition-all relative overflow-hidden group`}>
    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 technical-grid opacity-10" />
    <div className={`text-7xl font-black text-white mb-4 tracking-tighter`}>{value}</div>
    <div className={`text-[12px] font-black text-${color} uppercase tracking-[0.5em]`}>{label}</div>
  </div>
)

const ValueCard = ({ colSpan, icon, title, text, color }: any) => (
  <div className={`${colSpan} p-20 bg-primary border border-white/5 border-b-[16px] border-${color} group hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)] transition-all duration-700 relative overflow-hidden`}>
    <div className={`absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] -z-10`} />
    <div className="mb-16 group-hover:scale-110 transition-transform duration-700 shadow-3xl">{icon}</div>
    <h3 className="text-5xl font-black text-white uppercase mb-10 tracking-tighter group-hover:text-tertiary transition-colors">{title}</h3>
    <p className="text-white/60 text-2xl font-black uppercase tracking-tight leading-relaxed group-hover:text-white transition-colors">{text}</p>
  </div>
)

export default About
