export const company = {
  name: 'Mithlesh Forging India Pvt. Ltd.',
  shortName: 'Mithlesh Forging',
  tagline: 'Built on Strength. Driven by Quality.',
  phone: '+91 98187-76372',
  phoneHref: 'tel:+919818776372',
  whatsappNumber: '919818776372',
  email: 'mithleshforging@gmail.com',
  director: 'Mithlesh Kuumar',
}

export const units = [
  {
    id: 'ghaziabad',
    label: 'Unit 01',
    title: 'Main Plant',
    city: 'Ghaziabad',
    state: 'Uttar Pradesh',
    address: 'Plot no - 39/253, Masuri, Ghaziabad (UP) — 245101',
    mapQuery: 'Plot No 39/253, Masuri, Ghaziabad, Uttar Pradesh 245101',
  },
  {
    id: 'faridabad',
    label: 'Unit 02',
    title: 'Manufacturing Hub',
    city: 'Faridabad',
    state: 'Haryana',
    address: 'Ground Floor Industrial Shed No.1, Dabua Pali Road, Faridabad — 121004 (Haryana)',
    mapQuery: 'Industrial Shed No 1, Dabua Pali Road, Faridabad, Haryana 121004',
  },
]

export const mapEmbedUrl = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`

export const mapDirectionsUrl = (query: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`

export const stats = [
  { value: '30+', label: 'Years of forging expertise' },
  { value: '500+', label: 'Machines delivered' },
  { value: '25+', label: 'Markets served' },
  { value: 'ISO', label: '9001:2015 certified' },
]

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
]

export const whatsappLink = (text = 'Hello Mithlesh Forging, I would like to request a quote.') =>
  `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(text)}`

export interface Product {
  id: string
  name: string
  type: string
  capacity: string
  description: string
  image: string
  specs: { label: string; value: string }[]
  features: string[]
}

export const products: Product[] = [
  {
    id: 'friction-screw-heavy',
    name: 'Heavy-Duty Friction Screw Press',
    type: 'Forging Press',
    capacity: '300 — 1000 MT',
    description:
      'Engineered for high-tonnage forging operations with maximum kinetic energy transfer and ultra-rigid frame stability.',
    image: '/images/friction-screw-press-heavy.jpg',
    features: ['Dual Friction Drive', 'Oversized Screw Diameter', 'Precision Slide Guidance', 'Heavy-Duty Forged Bed'],
    specs: [
      { label: 'Capacity', value: '300 MT — 1000 MT' },
      { label: 'Screw Diameter', value: '250 mm — 400 mm' },
      { label: 'Max Stroke', value: '450 mm — 600 mm' },
      { label: 'Bed Size', value: '1200 x 1200 mm' },
      { label: 'Motor Power', value: '75 HP — 150 HP' },
    ],
  },
  {
    id: 'friction-screw-standard',
    name: 'Standard Friction Screw Press',
    type: 'Precision Forging',
    capacity: '50 — 250 MT',
    description:
      'The industry workhorse for medium-sized hot and cold forging components, offering a perfect balance of speed and force.',
    image: '/images/friction-screw-press-standard.jpg',
    features: ['Adjustable Blow Force', 'Easy Maintenance Access', 'Rapid Cycle Time', 'High Thermal Resistance'],
    specs: [
      { label: 'Capacity', value: '50 MT — 250 MT' },
      { label: 'Screw Diameter', value: '140 mm — 220 mm' },
      { label: 'Max Stroke', value: '250 mm — 400 mm' },
      { label: 'Bed Size', value: '800 x 800 mm' },
      { label: 'Motor Power', value: '15 HP — 40 HP' },
    ],
  },
  {
    id: 'h-type-power-press',
    name: 'H-Type Power Press',
    type: 'Mechanical Press',
    capacity: '100 — 500 T',
    description:
      'Pillar-type structural design for zero-deflection operations in heavy-duty blanking and deep drawing applications.',
    image: '/images/power-press-h-type.jpg',
    features: ['Eight-Point Guidance', 'Geared Drive System', 'Pneumatic Clutch', 'Electronic Overload Protection'],
    specs: [
      { label: 'Capacity', value: '100 T — 500 T' },
      { label: 'Stroke', value: '150 mm — 350 mm' },
      { label: 'Speed', value: '20 — 45 SPM' },
      { label: 'Bed Area', value: '1500 x 1000 mm' },
      { label: 'Drive', value: 'Direct Gear Drive' },
    ],
  },
  {
    id: 'c-type-power-press',
    name: 'C-Type Eccentric Press',
    type: 'Mechanical Press',
    capacity: '5 — 250 T',
    description:
      'Versatile open-back design for easy material handling and high-speed stamping operations in a compact footprint.',
    image: '/images/power-press-c-type.jpg',
    features: ['Heavy Cast Frame', 'Adjustable Stroke', 'Mechanical Safety Lock', 'Interchangeable Bolster'],
    specs: [
      { label: 'Capacity', value: '5 T — 250 T' },
      { label: 'Stroke Range', value: '5 mm — 120 mm' },
      { label: 'Speed', value: '45 — 70 SPM' },
      { label: 'Drive', value: 'Single Flywheel' },
      { label: 'Frame', value: 'Rigid C-Section' },
    ],
  },
  {
    id: 'shearing-machine',
    name: 'Mechanical Shearing Machine',
    type: 'Metal Cutting',
    capacity: 'Up to 25 mm plate',
    description:
      'KIRAN-engineered precision cutting system for heavy metal plates with micron-level accuracy and clean-cut edges.',
    image: '/images/shearing-machine.jpg',
    features: ['High-Carbon Blades', 'Hydraulic Hold-Downs', 'Precision Backgauge', 'Rapid Clearance Adj.'],
    specs: [
      { label: 'Cutting Length', value: '1500 — 4000 mm' },
      { label: 'Max Thickness', value: '4 mm — 25 mm' },
      { label: 'Blade Material', value: 'D2 / HCHCr Steel' },
      { label: 'Backgauge Range', value: '1000 mm' },
      { label: 'Cut Angle', value: '1.5° — 4°' },
    ],
  },
]

export const testimonials = [
  { name: 'Rajesh Kumar', company: 'Steel Industries', text: "Mithlesh Forging's screw presses have increased our production efficiency by 40%." },
  { name: 'Amit Sharma', company: 'Auto Parts India', text: 'The reliability of their C-Type presses is unmatched in the Indian market.' },
  { name: 'Sanjay Gupta', company: 'ForgeTech Solutions', text: 'Exceptional technical support and high-precision machinery. Highly recommended.' },
  { name: 'Vikram Singh', company: 'Heavy Gear Corp', text: 'Their H-Type presses are built for extreme endurance. Zero downtime in over 2 years.' },
  { name: 'Deepak Verma', company: 'Precision Metals', text: 'Modern engineering meets industrial strength. A trusted partner for our forging needs.' },
]
