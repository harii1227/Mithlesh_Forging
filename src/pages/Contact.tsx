import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react'
import ncrMap from '../assets/delhi-ncr-3d-map-national-600nw-2530527407.webp'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData(e.currentTarget)
    try {
      // Fix: Formspree requires /f/ prefix for email endpoints
      const response = await fetch('https://formspree.io/f/rs22201227@gmail.com', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const data = await response.json()
        alert(data.error || "Submission failed. Please try again.")
      }
    } catch (err) {
      alert("Network error. Please check your connection.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="overflow-hidden bg-primary text-white">
      {/* Hero Section - Refined Proportions */}
      <section className="relative min-h-[50vh] flex items-center px-6 md:px-12 py-24 overflow-hidden chipka-hero bg-primary border-b-4 border-secondary">
        <div className="absolute inset-0 z-0 technical-grid opacity-20" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary geometric-overlay opacity-60" />
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-[0.3] contrast-125 grayscale"
            src="/hero.png"
            alt="Contact Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-secondary text-white font-headline text-[10px] font-black uppercase tracking-[0.6em] mb-10 shadow-3xl"
          >
            GLOBAL INTAKE HUB
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white uppercase mb-8">
            Let's forge <br /><span className="text-tertiary">Partnerships.</span>
          </h1>
          <p className="max-w-2xl text-white/50 text-lg md:text-xl leading-relaxed font-black uppercase tracking-widest opacity-80">
            Industrial consultants ready for high-tonnage deployments.
          </p>
        </div>
      </section>

      {/* Contact Content - High Precision Address Data */}
      <section className="py-24 px-6 md:px-12 bg-primary relative border-b-8 border-primary-container">
        <div className="absolute right-0 top-0 w-1/4 h-full bg-secondary geometric-overlay opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          {/* Details - Strictly matching Business Card */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-12">
              <span className="text-secondary font-headline font-black text-[14px] uppercase tracking-[1em] block border-l-4 border-tertiary pl-6 underline decoration-4 underline-offset-8">Unit Deployment</span>
              <div className="space-y-12">
                <ContactInfo
                  icon={<MapPin size={32} />}
                  title="UNIT 1 — MAIN PLANT"
                  detail="Plot no - 39/253, Masuri, Ghaziabad (UP) — 245101"
                  color="secondary"
                />
                <ContactInfo
                  icon={<MapPin size={32} />}
                  title="UNIT 2 — MANUFACTURING HUB"
                  detail="Ground Floor Industrial Shed No.1, Dabua Pali Road, Faridabad — 121004 (Haryana)"
                  color="tertiary"
                />
                <ContactInfo
                  icon={<Phone size={32} />}
                  title="DIRECT ENGINEERING"
                  detail="+91 98187-76372"
                  color="secondary"
                />
              </div>
            </div>

            <div className="p-12 bg-primary-container border-b-[16px] border-secondary shadow-5xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity"><Send size={100} /></div>
              <div className="flex gap-6 items-center mb-10">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]" />
                <span className="text-[14px] font-black text-white uppercase tracking-[0.6em]">System Online</span>
              </div>
              <p className="text-white text-3xl font-black leading-tight uppercase mb-4 tracking-tighter">Response Priority</p>
              <p className="text-tertiary text-[14px] font-black uppercase tracking-[1em] leading-relaxed opacity-80">GZ — FD — NCR HUB.</p>
            </div>
          </div>

          {/* Form - Enhanced High Visibility Labels */}
          <div className="lg:col-span-7">
            <div className="bg-primary-container p-12 md:p-20 border-t-[20px] border-secondary shadow-5xl relative overflow-hidden min-h-[700px] flex flex-col justify-center">
              <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-20 uppercase tracking-tighter flex items-center gap-8 leading-none underline decoration-8 decoration-secondary/30 underline-offset-[20px]">
                      <MessageSquare size={48} className="text-secondary shadow-2xl" /> Request Information.
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <InputField label="Full Integrity Name" name="name" placeholder="Mithlesh Kuumar" />
                        <InputField label="Corporate Entity" name="company" placeholder="Unit/Organization" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <InputField label="Engineering Email" name="email" type="email" placeholder="direct@unit.com" />
                        <InputField label="Contact Terminal" name="phone" placeholder="+91 XXXX" />
                      </div>
                      <div className="space-y-6">
                        <label className="text-[14px] font-black uppercase tracking-[1em] text-tertiary block mb-4 border-l-4 border-tertiary pl-6">Technical Scope</label>
                        <textarea name="message" rows={5} required className="w-full bg-primary border-4 border-secondary/10 focus:border-tertiary border-r-[12px] transition-all duration-500 py-6 px-8 text-white placeholder-white/20 outline-none text-lg font-black uppercase tracking-tight shadow-2xl hover:bg-white/5" placeholder="SPECIFY TONNAGE, QUANTITY OR REPAIR DETAILS..."></textarea>
                      </div>
                      <motion.button whileHover={{ scale: 1.02, boxShadow: "0 40px 80px rgba(220,38,38,0.5)" }} whileTap={{ scale: 0.98 }} disabled={isLoading} className="w-full py-8 bg-secondary text-white font-headline font-black uppercase tracking-[1em] text-[14px] shadow-5xl hover:bg-tertiary transition-all duration-700">
                        {isLoading ? "TRANSMITTING..." : "SEND REQUEST"}
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-16 relative z-10">
                    <div className="w-32 h-32 bg-secondary text-white rounded-none flex items-center justify-center mx-auto mb-12 shadow-[0_0_80px_rgba(220,38,38,0.6)] border-b-[20px] border-tertiary">
                      <CheckCircle size={64} />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">TRANSMISSION SUCCESSFUL</h2>
                    <p className="text-white/40 text-2xl font-black uppercase tracking-[0.5em] opacity-80 max-w-lg mx-auto leading-relaxed">
                      Engineering response unit dispatched.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="text-[14px] font-black uppercase tracking-[1em] text-secondary hover:text-tertiary underline decoration-primary-container decoration-8 transition-all">
                      NEW INTAKE
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Hubs Section - Refined Proportions & Integrated Design */}
      <section className="px-6 md:px-12 py-32 bg-primary relative overflow-hidden border-t-8 border-secondary">
        <div className="absolute inset-0 technical-grid opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
          {/* Legend Side - Streamlined & Compact */}
          <div className="lg:col-span-4 space-y-12">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-secondary text-white font-headline text-[11px] font-black uppercase tracking-[0.8em] shadow-3xl">
              NATIONWIDE NETWORK
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Strategic <br /> <span className="text-tertiary italic font-black">Industrial Footprint.</span>
            </h2>

            <div className="space-y-6">
              {[
                { label: 'Unit 01', city: 'GHAZIABAD', sub: 'Primary Production', color: 'secondary' },
                { label: 'Unit 02', city: 'FARIDABAD', sub: 'Manufacturing Hub', color: 'tertiary' }
              ].map((loc, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className={`flex gap-6 items-center p-8 bg-primary-container border-l-8 border-${loc.color} shadow-2xl relative group overflow-hidden cursor-default`}
                >
                  <div className={`w-3 h-3 bg-${loc.color} rounded-full animate-pulse shadow-[0_0_15px_rgba(0,0,0,0.5)]`} />
                  <div>
                    <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-1">{loc.label}</div>
                    <div className="text-2xl font-black text-white uppercase tracking-tighter">{loc.city}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-white/40 text-[11px] font-black uppercase tracking-[0.4em] leading-relaxed max-w-xs">
                Strategically positioned within the NCR industrial corridor for optimized logistics and rapid site response.
              </p>
            </div>
          </div>

          {/* Map Side - Strategic NCR Regional Focus with Provided Image */}
          <div className="lg:col-span-7 relative h-[450px] flex items-center justify-center p-4 bg-primary group overflow-hidden border-2 border-white/5">
            {/* Minimalist Tech Frame */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-secondary/20 z-20" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-tertiary/20 z-20" />

            <div className="relative w-full h-full flex items-center justify-center">
              {/* User Provided NCR Image */}
              <motion.img
                src={ncrMap}
                alt="NCR Region Strategic Map"
                className="w-full h-full object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-125"
              />

              {/* Precise markers calibrated to the provided image labels */}
              {/* Unit 1: Ghaziabad — Pinpoint UP Sector (East) */}
              <div className="absolute left-[65%] top-[45%] z-30 group/pin1">
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.6, 0.2, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-secondary rounded-full blur-[12px]"
                />
                <div className="w-3.5 h-3.5 -translate-x-1/2 -translate-y-1/2 bg-secondary rounded-full shadow-[0_0_15px_#dc2626] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                </div>
                <div className="absolute left-6 -top-12 min-w-[200px] p-4 bg-primary/95 border-l-4 border-secondary shadow-5xl backdrop-blur-md opacity-0 group-hover/pin1:opacity-100 transition-all pointer-events-none">
                  <div className="text-[11px] font-black text-white uppercase tracking-tighter">GHAZIABAD (UP)</div>
                  <div className="text-[9px] font-black tracking-[0.2em] text-secondary">INDUSTRIAL UNIT 1</div>
                </div>
              </div>

              {/* Unit 2: Faridabad — Pinpoint Haryana Sector (South-East) */}
              <div className="absolute left-[56%] top-[68%] z-30 group/pin2 delay-1000">
                <motion.div
                  animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0.1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2.2, delay: 0.5 }}
                  className="w-7 h-7 -translate-x-1/2 -translate-y-1/2 bg-tertiary rounded-full blur-[10px]"
                />
                <div className="w-3.5 h-3.5 -translate-x-1/2 -translate-y-1/2 bg-tertiary rounded-full shadow-[0_0_15px_#f97316] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                </div>
                <div className="absolute right-6 top-6 min-w-[200px] p-4 bg-primary/95 border-r-4 border-tertiary shadow-5xl backdrop-blur-md text-right opacity-0 group-hover/pin1:group-hover/pin1:opacity-0 group-hover/pin2:opacity-100 transition-all pointer-events-none">
                  <div className="text-[10px] font-black text-white uppercase tracking-tighter">FARIDABAD (HARYANA)</div>
                  <div className="text-[9px] font-black tracking-[0.2em] text-tertiary">MANUFACTURING UNIT 2</div>
                </div>
              </div>

              {/* Tactical Control Inset */}
              <div className="absolute bottom-6 right-6 text-right p-4 border-r-2 border-secondary bg-primary/60 backdrop-blur-sm z-20">
                <div className="text-xl font-black text-white uppercase tracking-tighter leading-none mb-1">STRATEGIC SYNC</div>
                <div className="text-[8px] font-black text-tertiary uppercase tracking-[0.4em] mt-2">NCR LOGISTICS HUB</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const ContactInfo = ({ icon, title, detail, color }: any) => (
  <div className="flex gap-6 group">
    <div className={`w-14 h-14 bg-primary-container border-l-4 border-${color} flex items-center justify-center text-${color} group-hover:bg-${color} group-hover:text-white transition-all shadow-3xl shrink-0 duration-500`}>
      {icon}
    </div>
    <div className="space-y-2">
      <h4 className={`text-[11px] font-black uppercase tracking-[0.5em] text-${color} opacity-80`}>{title}</h4>
      <p className="text-xl text-white font-black tracking-tighter hover:text-tertiary transition-colors cursor-default leading-tight uppercase">{detail}</p>
    </div>
  </div>
)

const InputField = ({ label, name, type = "text", placeholder }: any) => (
  <div className="space-y-4">
    <label className="text-[11px] font-black uppercase tracking-[0.6em] text-secondary font-headline">{label}</label>
    <input type={type} name={name} required placeholder={placeholder} className="w-full bg-primary border-b-2 border-secondary/20 py-4 px-6 text-white focus:border-secondary transition-all duration-500 placeholder-white/10 outline-none text-md font-black uppercase tracking-tight shadow-inner" />
  </div>
)

export default Contact
