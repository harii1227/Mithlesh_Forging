import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react'

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

      {/* Contact Content - Refined 5:7 Split */}
      <section className="py-24 px-6 md:px-12 bg-primary relative border-b-8 border-primary-container">
        <div className="absolute right-0 top-0 w-1/4 h-full bg-secondary geometric-overlay opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          {/* Details - Compact & Precise */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-12">
              <span className="text-tertiary font-headline font-black text-[12px] uppercase tracking-[0.8em] block border-l-4 border-secondary pl-6">VANGUARD HUB</span>
              <div className="space-y-12">
                <ContactInfo
                  icon={<MapPin size={28} />}
                  title="Campus"
                  detail="Plot No. 39/253, Masuri, Parson Jindal Nagar, Ghaziabad, UP"
                  color="secondary"
                />
                <ContactInfo
                  icon={<Phone size={28} />}
                  title="Direct Engineering"
                  detail="+91 98187-76372"
                  color="tertiary"
                />
                <ContactInfo
                  icon={<Mail size={28} />}
                  title="Corporate"
                  detail="rs22201227@gmail.com"
                  color="secondary"
                />
              </div>
            </div>

            <div className="p-10 bg-primary-container border-b-8 border-tertiary shadow-3xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Send size={80} /></div>
              <div className="flex gap-4 items-center mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                <span className="text-[11px] font-black text-white uppercase tracking-[0.4em]">Operations Active</span>
              </div>
              <p className="text-white text-xl font-black leading-tight uppercase mb-2 tracking-tighter">Response Matrix</p>
              <p className="text-tertiary text-[12px] font-black uppercase tracking-widest leading-relaxed">Mon-Sat, 9AM — 6PM IST.</p>
            </div>
          </div>

          {/* Form - Refined Card Approach */}
          <div className="lg:col-span-7">
            <div className="bg-primary-container p-8 md:p-16 border-t-8 border-secondary shadow-4xl relative overflow-hidden min-h-[650px] flex flex-col justify-center">
              <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10">
                    <h2 className="text-4xl font-black text-white mb-16 uppercase tracking-tighter flex items-center gap-6 leading-none">
                      <MessageSquare size={32} className="text-secondary shadow-2xl" /> FILL CONTACT FORM IF YOU ARE INTERESTED
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <InputField label="Full Name" name="name" placeholder="John Doe" />
                        <InputField label="Company" name="company" placeholder="Organization" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <InputField label="Email Address" name="email" type="email" placeholder="john@company.com" />
                        <InputField label="Phone Number" name="phone" placeholder="+91 XXXX" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[11px] font-black uppercase tracking-[0.4em] text-tertiary">Specifications</label>
                        <textarea name="message" rows={4} required className="w-full bg-primary border-b-4 border-secondary/20 focus:border-tertiary transition-all duration-500 py-4 px-6 text-white placeholder-white/10 outline-none text-md font-black uppercase tracking-tight shadow-inner" placeholder="Detailed machinery specs..."></textarea>
                      </div>
                      <motion.button whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(220,38,38,0.4)" }} whileTap={{ scale: 0.98 }} disabled={isLoading} className="w-full py-6 bg-secondary text-white font-headline font-black uppercase tracking-[0.5em] text-[12px] shadow-3xl hover:bg-tertiary transition-all duration-500">
                        {isLoading ? "SENDING..." : "SEND REQUEST"}
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-12 relative z-10">
                    <div className="w-24 h-24 bg-secondary text-white rounded-none flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(220,38,38,0.6)] border-b-4 border-tertiary">
                      <CheckCircle size={48} />
                    </div>
                    <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">TRANSMISSION SUCCESS</h2>
                    <p className="text-white/40 text-lg font-black uppercase tracking-[0.3em] opacity-80 max-w-sm mx-auto">
                      Engineering response imminent.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="text-[12px] font-black uppercase tracking-[0.6em] text-secondary hover:text-tertiary underline decoration-primary-container decoration-4 transition-all">
                      NEW INTAKE
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Refined Proportions */}
      <section className="px-6 md:px-12 py-24 bg-primary relative">
        <div className="absolute inset-x-0 top-0 h-2 bg-secondary/20" />
        <div className="max-w-7xl mx-auto h-[500px] bg-primary relative overflow-hidden shadow-4xl group border-l-8 border-secondary">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            className="w-full h-full object-cover grayscale brightness-[0.2] contrast-200 group-hover:brightness-[0.4] transition-all duration-[5s]"
            alt="Location"
          />
          <div className="absolute inset-0 flex items-center justify-center z-10 p-6">
            <div className="bg-primary/95 text-white p-12 md:p-16 shadow-4xl flex flex-col items-center border-t-8 border-secondary max-w-sm w-full">
              <MapPin size={60} className="text-tertiary mb-6 animate-bounce" />
              <h3 className="text-4xl font-black uppercase mb-6 tracking-tighter leading-none text-center">Global Hub</h3>
              <div className="h-1 w-16 bg-secondary mb-6" />
              <p className="text-[12px] font-black text-tertiary uppercase tracking-[0.6em] text-center">GHAZIABAD INDIA</p>
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
