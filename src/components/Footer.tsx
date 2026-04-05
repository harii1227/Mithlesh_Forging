import { MapPin, Phone, Globe, Share2, Mail, Factory } from 'lucide-react'
import logo from '../assets/Screenshot 2026-04-05 at 10.02.09 AM.png'

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-low border-t border-white/5 pt-20 pb-10 px-6 md:px-12 font-body text-sm tracking-wide">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="md:col-span-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white overflow-hidden flex items-center justify-center rounded-sm">
              <img src={logo} alt="Mithlesh Forging Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold font-headline text-white uppercase tracking-tighter">Mithlesh Forging</span>
          </div>
          <p className="text-on-surface-variant leading-relaxed mb-8">
            Setting the global benchmark for high-precision forging and mechanical press machinery since 1985.
          </p>
          <div className="flex gap-3">
            <SocialIcon icon={<Globe size={18} />} />
            <SocialIcon icon={<Share2 size={18} />} />
            <SocialIcon icon={<Mail size={18} />} />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[11px] font-headline">Machinery</h4>
          <ul className="space-y-4">
            <FooterLink text="Friction Screw Press" />
            <FooterLink text="Forging Screw Press" />
            <FooterLink text="Power Press C-Type" />
            <FooterLink text="Power Press H-Type" />
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[11px] font-headline">Contact Details</h4>
          <ul className="space-y-6 text-on-surface-variant">
            <li className="flex items-start gap-4">
              <MapPin size={18} className="text-secondary mt-1 shrink-0" />
              <span className="text-[13px] leading-relaxed uppercase font-black tracking-tight">Plot no - 39/253, Masuri, Ghaziabad (UP) — 245101</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={18} className="text-primary shrink-0" />
              <span className="text-[13px]">+91 98187-76372</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={18} className="text-primary shrink-0" />
              <span className="text-[13px]">rs22201227@gmail.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[11px] font-headline">Accreditations</h4>
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-surface-container machined-edge">
              <Factory size={24} className="text-tertiary" />
              <div>
                <div className="text-white text-xs font-bold uppercase tracking-widest">ISO 9001:2015</div>
                <div className="text-[10px] text-on-surface-variant uppercase mt-1">Quality certified</div>
              </div>
            </div>
            <div className="p-4 bg-surface-container-high machined-edge">
              <div className="text-white text-xs font-bold uppercase tracking-widest mb-1">MSME Registered</div>
              <div className="text-[10px] text-primary uppercase font-bold">Government of India</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[11px] text-on-surface-variant font-bold uppercase tracking-widest">
          © 2024 Mithlesh Forging India Pvt. Ltd. All Rights Reserved.
        </div>
        <div className="flex gap-8 text-[11px] text-on-surface-variant font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Term of Service</a>
        </div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-10 h-10 bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all cursor-pointer machined-edge">
    {icon}
  </div>
)

const FooterLink = ({ text }: { text: string }) => (
  <li>
    <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-[13px] flex items-center gap-2 group">
      <span className="w-1.5 h-1.5 bg-primary/20 scale-0 group-hover:scale-100 transition-transform" />
      {text}
    </a>
  </li>
)

export default Footer
