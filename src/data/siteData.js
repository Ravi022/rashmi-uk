// ─── Hero Slides (5 banners as per wireframe) ────────────────────────────────
export const heroSlides = [
  {
    tag: 'Rashmi Metaliks UK Limited',
    title: 'Engineering Lifelines for the United Kingdom',
    subtitle: 'Premium Ductile Iron Infrastructure Solutions from Rashmi Metaliks Ltd.',
    cta: 'Explore Products',
    ctaTo: '/products',
  },
  {
    tag: 'DI Pipes · BS EN 545 · ISO 2531',
    title: 'Ductile Iron Pipes Built for Generations',
    subtitle: 'High-strength, corrosion-resistant DI Pipes conforming to BS EN 545 & ISO standards — ensuring over 100 years of performance.',
    cta: 'View DI Pipes',
    ctaTo: '/products/di-pipes',
  },
  {
    tag: 'DI Fittings · EN 545 · EN 598',
    title: 'Precision DI Fittings for Leak-Proof Networks',
    subtitle: 'Engineered fittings designed for perfect alignment, superior sealing, and long-term reliability across water and sewage systems.',
    cta: 'Explore DI Fittings',
    ctaTo: '/products/di-fittings',
  },
  {
    tag: 'DI Flanged Pipes · PN 10–40',
    title: 'Flanged Pipes for High-Pressure Applications',
    subtitle: 'Welded, screwed, and puddled flanged pipes ensure secure, leak-proof connections in critical infrastructure.',
    cta: 'Discover Flanged Pipes',
    ctaTo: '/products/di-flanged-pipes',
  },
  {
    tag: 'Manhole Covers · BS EN 124',
    title: 'Engineered Access Solutions for Urban Infrastructure',
    subtitle: 'BS EN 124 compliant ductile iron manhole covers with load capacities from A15 to F900 for every application.',
    cta: 'View Manhole Covers',
    ctaTo: '/products/di-manhole-covers',
  },
]

// ─── Stats Bar ────────────────────────────────────────────────────────────────
export const stats = [
  ['2.4M MT', 'Annual DI Pipe Capacity'],
  ['50+', 'Countries Served'],
  ['40+', 'Years of Experience'],
  ['#2', "World's Largest DI Mfr."],
  ['26K MT', 'DI Fittings Capacity'],
]

// ─── Products (4 products as per wireframe) ───────────────────────────────────
export const products = [
  {
    slug: 'di-pipes',
    name: 'Ductile Iron Pipes',
    tagline: 'Centrifugal cast for strength, lifespan & hydraulic efficiency',
    overview:
      "Rashmi Metaliks' DI Pipes are manufactured using advanced centrifugal casting technology, offering exceptional strength, corrosion resistance, and hydraulic efficiency for water and wastewater infrastructure.",
    table: [
      ['Avg. Length', '5.5 meters'],
      ['Diameter Range', 'DN 80 – DN 1200'],
      ['Standards', 'BS EN 545 / ISO 2531'],
      ['Internal Lining', 'Cement Mortar / Seal Coat / PU'],
      ['External Coating', 'Bitumen / Zinc / PU'],
    ],
    imagePlaceholder: 'DI Pipe close-up',
    applications: [
      { title: 'Potable Water Supply', content: 'Safe, hygienic transportation of drinking water across distribution networks — compliant with all potable water contact standards.' },
      { title: 'Wastewater & Sewage Systems', content: 'Handles corrosive sewage environments effectively, maintaining integrity across high-flow and high-pressure conditions.' },
      { title: 'Industrial Pipelines', content: 'Suitable for transporting industrial fluids under high pressure, with coatings tailored to chemical resistance requirements.' },
      { title: 'Irrigation Networks', content: 'Reliable long-distance bulk transfer of water for agricultural and large-scale irrigation schemes.' },
    ],
  },
  {
    slug: 'di-fittings',
    name: 'DI Fittings',
    tagline: 'Comprehensive fittings for perfect alignment & leak-proof sealing',
    overview:
      'A comprehensive range of ductile iron fittings engineered for perfect alignment, superior sealing, and long-term reliability across water and sewage systems.',
    table: [
      ['Range', 'DN 80 – DN 1600'],
      ['Standards', 'EN 545 / EN 598'],
      ['Types', 'Bends & Elbows, Tees & Crosses, Reducers, Flanged Adapters, Sockets, End Caps'],
      ['Coating', 'Epoxy / Cement / Bitumen'],
    ],
    imagePlaceholder: 'DI fittings assortment',
    applications: [
      { title: 'Water Distribution Networks', content: 'Direction changes and branching for complex municipal water distribution systems.' },
      { title: 'Sewage & Drainage Systems', content: 'Corrosion-resistant fittings for wastewater and drainage pipeline networks.' },
      { title: 'Pumping Stations', content: 'High-pressure fittings designed for pumping station headers and manifold connections.' },
      { title: 'Cross-connection Control', content: 'Reducing and branching fittings for multi-source water system interconnections.' },
    ],
  },
  {
    slug: 'di-flanged-pipes',
    name: 'DI Flanged Pipes',
    tagline: 'High-pressure flanged connections for critical infrastructure',
    overview:
      'Flanged pipes designed for high-pressure applications in critical infrastructure. Available in welded, screwed, and puddled configurations ensuring secure, leak-proof connections.',
    table: [
      ['Length', 'Up to 5.4 meters'],
      ['Pressure Classes', 'PN 10 / 16 / 25 / 40'],
      ['Types', 'Welded / Screwed / Puddled'],
      ['Features', 'Leak-proof joints, high pressure tolerance'],
    ],
    imagePlaceholder: 'Flanged pipe joints',
    applications: [
      { title: 'Treatment Plants', content: 'High-pressure interconnects inside water and wastewater treatment facilities.' },
      { title: 'Pumping Infrastructure', content: 'Flanged pipes for pump inlet/outlet connections demanding precision sealing.' },
      { title: 'Valve Chambers', content: 'Secure connections for isolation valves, pressure control, and metering chambers.' },
      { title: 'Above-Ground Installations', content: 'Exposed pipework in plant rooms, tunnels, and bridge crossings requiring bolted flanged systems.' },
    ],
  },
  {
    slug: 'di-manhole-covers',
    name: 'DI Manhole Covers & Gratings',
    tagline: 'BS EN 124 compliant access solutions from A15 to F900',
    overview:
      'High-performance ductile iron manhole covers and gratings engineered for urban infrastructure — offering superior load-bearing capacity, durability, and safety compliance from residential roads to heavy highways.',
    table: [
      ['Standard', 'BS EN 124'],
      ['Load Classes', 'A15 to F900'],
      ['Types', 'Solid Top, Recessed, Sewer, Telecom'],
      ['Features', 'High durability, enhanced safety, lightweight design'],
    ],
    imagePlaceholder: 'Manhole covers in urban road',
    applications: [
      { title: 'Highway & Road Networks', content: 'F900-class covers for heavily trafficked roads, motorways, and industrial zones — engineered for maximum load-bearing performance.' },
      { title: 'Urban & Pedestrian Areas', content: 'A15 and B125 class covers for footpaths, car parks, and light-traffic zones with anti-skid surface finishes.' },
      { title: 'Telecom & Utilities', content: 'Purpose-designed telecom and utilities access covers for subsurface infrastructure maintenance.' },
      { title: 'Sewage & Drainage Access', content: 'Sewer-grade covers with airtight sealing for odour control and safety in wastewater network access points.' },
    ],
  },
]

// ─── Certifications ───────────────────────────────────────────────────────────
export const certifications = [
  { code: 'BS EN 545', description: 'Ductile Iron Pipes, Fittings & Accessories — Water Pipelines' },
  { code: 'BS EN 598', description: 'Ductile Iron Pipes, Fittings & Accessories — Sewerage Applications' },
  { code: 'BS EN 124', description: 'Gully Tops and Manhole Covers for Vehicular & Pedestrian Areas' },
  { code: 'ISO 2531', description: 'Ductile Iron Pipes, Fittings, Accessories & Joints for Water Applications' },
  { code: 'ISO 9001', description: 'Quality Management Systems — certified across all manufacturing units' },
  { code: 'ISO 14001', description: 'Environmental Management Systems — sustainable operations standard' },
]

// ─── Quality Pillars ──────────────────────────────────────────────────────────
export const qualityPillars = [
  {
    icon: 'FlaskConical',
    title: 'In-House Testing Laboratory',
    description:
      'State-of-the-art laboratories conduct hydrostatic, tensile, impact, and chemical composition tests on every production batch — ensuring zero deviation from specification.',
  },
  {
    icon: 'Layers',
    title: 'Advanced Coating Lines',
    description:
      'Multi-stage internal lining (Cement Mortar / Seal Coat / PU) and external coating (Bitumen / Zinc / PE) processes deliver superior corrosion protection across all diameter ranges.',
  },
  {
    icon: 'ScanLine',
    title: 'Real-Time Process Monitoring',
    description:
      'Automated SPC (Statistical Process Control) systems monitor every stage of production — from melt chemistry to final dimensional inspection — in real time.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Third-Party Inspection',
    description:
      'Independent inspection agencies verify production quality at source before export, providing buyers complete confidence and full traceability documentation.',
  },
  {
    icon: 'Microscope',
    title: 'Metallurgical Excellence',
    description:
      'Our dedicated metallurgy team controls nodularity, tensile strength, and elongation parameters at the melt stage for consistent, world-class mechanical properties.',
  },
  {
    icon: 'FileCheck',
    title: 'Full Traceability',
    description:
      'Each pipe and fitting carries complete traceability — from raw material heat number to finished product test certificate — accessible digitally for project records.',
  },
]

// ─── Quality Process Steps ────────────────────────────────────────────────────
export const qualityProcessSteps = [
  { step: 'Melting', icon: 'Flame' },
  { step: 'Casting', icon: 'Cylinder' },
  { step: 'Annealing', icon: 'Thermometer' },
  { step: 'Machining', icon: 'Settings' },
  { step: 'Coating', icon: 'Layers' },
  { step: 'Testing', icon: 'FlaskConical' },
  { step: 'Dispatch', icon: 'Truck' },
]

// ─── Sustainability Pillars ───────────────────────────────────────────────────
export const sustainabilityPillars = [
  {
    icon: 'Flame',
    title: 'Furnace Gas Utilisation',
    category: 'Energy Optimization & Emission Reduction',
    description:
      'Our ISP generates 50,000–70,000 Nm³ of furnace gas, efficiently reused across manufacturing units for heating — reducing fossil fuel dependency and cutting greenhouse gas emissions.',
    stat: '70,000',
    statLabel: 'Nm³ Gas Recovered',
  },
  {
    icon: 'Zap',
    title: 'Captive Power & Energy Integration',
    category: 'Energy Optimization & Emission Reduction',
    description:
      'Integrated operations allow optimised energy consumption across all units — reducing transmission losses, maximising thermal efficiency, and minimising energy wastage.',
    stat: '45 MW',
    statLabel: 'Thermal Power Plant',
  },
  {
    icon: 'Leaf',
    title: 'Biomass Pellet Manufacturing',
    category: 'Renewable & Clean Energy Initiatives',
    description:
      'We operate a 500 MT biomass pellet unit, producing eco-friendly biofuel co-fired with coal in our thermal power plant — reducing coal consumption and carbon emissions.',
    stat: '500 MT',
    statLabel: 'Biomass Capacity',
  },
  {
    icon: 'Droplets',
    title: '100% Water Recycling',
    category: 'Water Conservation & Recycling',
    description:
      'Our nitrile glove manufacturing unit operates on a fully closed-loop water recycling system — zero liquid discharge, continuous reuse, and zero wastage of water resources.',
    stat: '100%',
    statLabel: 'Water Recycled',
  },
  {
    icon: 'Recycle',
    title: 'Zero-Waste & Circular Economy',
    category: 'Waste Management & Circular Economy',
    description:
      'Industrial by-products are reintroduced into the production cycle. Dust and solid waste recovery systems ensure minimal environmental discharge and maximum resource utilisation.',
    stat: 'Zero',
    statLabel: 'Waste to Landfill',
  },
  {
    icon: 'Building2',
    title: 'Responsible Infrastructure',
    category: 'Responsible Infrastructure Solutions',
    description:
      'DI Pipes with 100+ year lifecycle reduce replacement frequency. Leak-proof systems prevent water loss. Manhole covers reduce maintenance waste — all contributing to sustainable development.',
    stat: '100+',
    statLabel: 'Year Product Life',
  },
]

// ─── Industries ───────────────────────────────────────────────────────────────
export const industries = [
  { name: 'Water Utilities', description: 'Trunk mains, distribution networks & service connections' },
  { name: 'Wastewater & Sewerage', description: 'Gravity and pressurised sewerage infrastructure' },
  { name: 'Industrial Process', description: 'Chemical, mining and industrial fluid conveyance' },
  { name: 'Civil & Highways', description: 'Road drainage, highway culverts & utility crossings' },
  { name: 'Power Generation', description: 'Cooling water and process pipework for power facilities' },
  { name: 'Irrigation & Agriculture', description: 'Large-scale bulk water transfer for irrigation schemes' },
]

// ─── Process Steps (How We Work) ─────────────────────────────────────────────
export const processSteps = [
  {
    step: '01',
    title: 'Technical Consultation',
    description: 'Our UK-based engineers review your project specifications, soil conditions, and pressure requirements to recommend the optimal product solution.',
  },
  {
    step: '02',
    title: 'Product Specification',
    description: "We prepare full compliance documentation, technical data sheets, and product submittals aligned to UK standards and your project's design criteria.",
  },
  {
    step: '03',
    title: 'Manufacturing & QC',
    description: 'Products are manufactured at our Kharagpur facility under ISO 9001-certified quality management, with third-party inspection available on request.',
  },
  {
    step: '04',
    title: 'Logistics & Delivery',
    description: 'Our dedicated UK logistics team manages shipping, customs clearance, and last-mile delivery to site — with full supply chain visibility throughout.',
  },
]

// ─── Regional Offices ─────────────────────────────────────────────────────────
export const regionalOffices = [
  {
    region: 'United Kingdom',
    address: 'Suite 102, Oceanair House, 750–760 High Road, Leytonstone, London, E11 3AW',
    role: 'UK Sales & Technical Office',
    highlight: true,
  },
  {
    region: 'India (Manufacturing HQ)',
    address: 'Salboni, Kharagpur, West Bengal, India',
    role: 'Integrated Steel & DI Manufacturing Plant',
    highlight: false,
  },
  {
    region: 'Middle East',
    address: 'Dubai, United Arab Emirates',
    role: 'Regional Distribution & Sales',
    highlight: false,
  },
  {
    region: 'Europe',
    address: 'Continental Europe Operations',
    role: 'Technical Sales & Project Support',
    highlight: false,
  },
]

// ─── Timeline (About Page) ────────────────────────────────────────────────────
export const timelineItems = [
  {
    year: '2004',
    title: 'Founded',
    description: 'Rashmi Metaliks established with an integrated steel manufacturing ecosystem in Kharagpur, West Bengal.',
  },
  {
    year: '2010',
    title: 'Global Expansion',
    description: 'Export operations launched across Middle East, Africa, and South-East Asia — reaching 25+ countries within three years.',
  },
  {
    year: '2016',
    title: 'Capacity Scale-Up',
    description: "Annual DI pipe production capacity expanded to 1.2M MT, cementing position as India's largest DI manufacturer.",
  },
  {
    year: '2020',
    title: 'World #2 Status',
    description: "Rashmi Metaliks achieved the distinction of world's 2nd largest DI pipe manufacturer with 2.4M MT annual capacity.",
  },
  {
    year: '2024',
    title: 'UK Establishment',
    description: 'Rashmi Metaliks UK Limited incorporated in London — bringing world-class DI solutions directly to the UK infrastructure market.',
  },
]
