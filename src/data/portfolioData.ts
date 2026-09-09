import { ProjectItem, SkillCategory, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: 'Danial Habib Abdillah',
  role: 'Developer & Creative Technologist',
  subRole: 'Video Editor (3+ Years CapCut Desktop)',
  institution: 'Universitas Ahmad Dahlan (UAD), Yogyakarta',
  major: 'Teknik Informatika',
  location: 'Yogyakarta, Indonesia',
  availability: 'Open for Collaboration & Digital Projects',
  heroHeadline: 'Building digital products that transform raw ideas into functional, real-world experiences.',
  heroBio: 'Mahasiswa Teknik Informatika UAD yang menggabungkan software engineering, ekosistem multi-platform (Web, Android, iOS), otomasi, serta 3 tahun pengalaman video editing dengan CapCut Desktop.',
  aboutQuote: 'Bagi saya, development bukan hanya tentang menulis kode. Proses terbaik adalah mengubah ide menjadi produk digital yang nyata, fungsional, dan memberikan nilai tinggi bagi penggunanya.',
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'tanabrew',
    title: 'Tanabrew',
    category: 'Mobile App',
    featured: true,
    tagline: 'Multi-platform Business & Inventory Management Platform',
    description: 'Platform digital terintegrasi (Web App, Android, dan iOS) yang dikembangkan untuk menyederhanakan kebutuhan operasional bisnis kopi dan roastery, mulai dari pencatatan stok, pengelolaan inventory bahan baku, hingga pembuatan invoice otomatis.',
    detailedCaseStudy: {
      overview: 'Tanabrew dirancang sebagai solusi end-to-end bagi operasional bisnis roastery yang memerlukan sinkronisasi data instan antara area produksi, gudang penyimpanan, dan kasir penjualan.',
      challenge: 'Pengelolaan inventory roastery sering mengalami disparitas antara stok hijau (green beans) dan roasted beans, pencatatan manual faktur transaksi yang rentan selisih, serta perlunya akses mobilitas tinggi bagi staf di berbagai platform (Web, Android, dan iOS).',
      solution: 'Membangun arsitektur terpadu berbasis cloud dengan Firestore, state management modular, antarmuka cepat berbasis React + Tailwind CSS, serta aplikasi mobile native/cross-platform untuk operasional staf yang ringkas.',
      keyFeatures: [
        'Real-time Inventory & Roasted Beans Stock Ledger',
        'Automated Invoice & Nota Penjualan Generator',
        'Multi-Platform Operational Access (Web, Android & iOS)',
        'Cloud Database Synchronization with Firebase Firestore',
        'Business Report & Inflow-Outflow Audit Trail'
      ],
      architecture: [
        'Frontend: React, TypeScript, Tailwind CSS',
        'Database & Auth: Google Cloud Firebase & Firestore',
        'Platforms: Responsive Web App + Android & iOS Client Apps',
        'Design System: Custom Ergonomic UI dirancang via Figma'
      ]
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Firestore', 'Android', 'iOS'],
    statusText: 'Internal Business Platform / Case Study',
    isPrivateClient: true,
    instagramUrl: 'https://www.instagram.com/tanabrew.tm/',
    imagePlaceholderText: 'Tanabrew Business Ecosystem (Web, Android & iOS)',
    imageSrc: '/images/tanabrew-preview.png'
  },
  {
    id: 'lensa-shafa',
    title: 'Lensa Shafa',
    category: 'Agency Website',
    featured: false,
    tagline: 'Modern Digital Landing Platform for Umrah & Travel Agency',
    description: 'Website resmi agensi travel umroh yang menyajikan informasi paket ibadah, jadwal keberangkatan, rincian akomodasi, dan jalur konsultasi interaktif yang cepat, elegan, serta ramah pengguna.',
    detailedCaseStudy: {
      overview: 'Lensa Shafa adalah kehadiran digital resmi untuk agensi travel umroh yang berfokus pada kemudahan akses calon jamaah dari berbagai generasi, kecepatan loading, serta kejelasan informasi paket ibadah.',
      challenge: 'Calon jamaah membutuhkan tata letak informasi yang transparan, navigasi sederhana yang tidak membingungkan pada layar ponsel, dan tombol panggilan WhatsApp langsung ke customer care tanpa hambatan.',
      solution: 'Desain web bersih dengan hierarki visual terarah, visual resolusi optimal, dan alur konversi WhatsApp satu kali klik.',
      keyFeatures: [
        'Katalog Paket Umroh Lengkap & Transparan',
        'Responsive Mobile-First Interface',
        'Direct One-Click WhatsApp Consultation Booking',
        'Optimized Page Load Performance di Vercel Edge Network'
      ],
      architecture: [
        'Frontend: React, Tailwind CSS',
        'Deployment: Vercel Edge Infrastructure',
        'UX Prototyping: Figma'
      ]
    },
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Figma'],
    statusText: 'Production / Live Website',
    liveUrl: 'https://lensa-shafa.vercel.app/',
    imagePlaceholderText: 'Lensa Shafa Umrah Travel Agency',
    imageSrc: '/images/lensa-shafa-preview.png'
  },
  {
    id: 'nostra-caffe',
    title: 'Nostra-Caffe',
    category: 'Web App',
    featured: false,
    tagline: 'Tempat ternyaman untuk menikmati kopi terbaik',
    description: 'Platform web dan katalog menu digital interaktif untuk Nostra-Caffe (Noka Nostra Kaff). Dilengkapi sistem navigasi kategori menu, integrasi lokasi, serta portal akses Admin/Kasir.',
    detailedCaseStudy: {
      overview: 'Nostra-Caffe adalah aplikasi web modern untuk coffee shop yang memudahkan pelanggan menjelajahi katalog menu digital secara interaktif tanpa harus mengunduh file menu fisik/PDF.',
      challenge: 'Pelanggan membutuhkan akses menu yang cepat di smartphone tanpa lag, kejelasan harga dan varian kopi/minuman, serta kemudahan navigasi ke lokasi fisik.',
      solution: 'Membangun web app modern berbasis React, Vite, dan Tailwind CSS dengan pengelompokan menu interaktif (Berbasis Kopi, Susu, Espresso & Teh, Camilan, Signature & Yakult) dan tautan lokasi.',
      keyFeatures: [
        'Katalog Menu Digital Interaktif Multi-Kategori',
        'Navigasi Responsif untuk Pengunjung Mobile & Desktop',
        'Integrasi Lokasi Google Maps & Saluran Kontak Pemesanan',
        'Portal Manajemen Admin / Kasir',
        'Deploy Cepat & Ringan di Vercel Edge Infrastructure'
      ],
      architecture: [
        'Frontend: React, TypeScript, Tailwind CSS',
        'Build Tool: Vite',
        'Hosting & Deployment: Vercel'
      ]
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    statusText: 'Production / Live Website',
    liveUrl: 'https://nostra-caffe.vercel.app/',
    imagePlaceholderText: 'Nostra-Caffe Modern Digital Menu',
    imageSrc: '/images/nostra-caffe-preview.png'
  },
  {
    id: 'automation-creative-lab',
    title: 'Automation & Creative Experiments',
    category: 'Automation & AI',
    featured: false,
    tagline: 'Workflow Optimization, AI-Assisted Tooling & Content Pipelines',
    description: 'Kumpulan riset dan script otomasi yang dirancang untuk mengoptimalkan alur kerja digital, pemrosesan data, integrasi AI, serta otomasi persiapan aset visual konten.',
    detailedCaseStudy: {
      overview: 'Eksplorasi berkelanjutan dalam menggabungkan kemampuan pemrograman dengan otomatisasi tugas berulang untuk mempercepat proses kreasi dan deployment.',
      challenge: 'Tugas-tugas repetitif seperti formatting aset video media sosial, sinkronisasi data berkala, dan penanganan alur konten sering memakan waktu produktif.',
      solution: 'Mengembangkan bot otomasi modular dan pipeline terstruktur yang memanfaatkan Node.js, API eksternal, dan AI tools.',
      keyFeatures: [
        'Custom Workflow Automation Scripts',
        'Social Media Content Pipeline Assist',
        'AI Assisted Development Integration'
      ],
      architecture: [
        'Runtime: Node.js & TypeScript',
        'Integration: AI APIs, Task Schedulers, Automation Hooks'
      ]
    },
    technologies: ['Node.js', 'TypeScript', 'Git', 'GitHub'],
    statusText: 'Active Lab / In Development',
    imagePlaceholderText: 'Automation & Creative Pipeline Engine'
  }
];

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    categoryName: 'Core Web & Frontend',
    description: 'Fondasi arsitektur web modern yang responsif, terstruktur, dan type-safe.',
    skills: [
      { name: 'TypeScript', category: 'Language', iconKey: 'typescript', level: 'Daily Driver', highlight: 'Strict Typing & Scalability' },
      { name: 'JavaScript', category: 'Language', iconKey: 'javascript', level: 'Advanced', highlight: 'ESNext & Async Architecture' },
      { name: 'React', category: 'Frontend', iconKey: 'react', level: 'Production', highlight: 'Hooks, State & Component Design' },
      { name: 'Vite', category: 'Build Tool', iconKey: 'vite', level: 'Fast Dev', highlight: 'Lightning Fast Bundling' },
      { name: 'Tailwind CSS', category: 'Styling', iconKey: 'tailwindcss', level: 'Proficient', highlight: 'Utility-first & Bespoke Design' }
    ]
  },
  {
    categoryName: 'Mobile & Cloud Infrastructure',
    description: 'Pengembangan ekosistem cross-platform dan backend realtime serverless.',
    skills: [
      { name: 'Firebase', category: 'BaaS & Cloud', iconKey: 'firebase', level: 'Production', highlight: 'Auth, Storage & Cloud Services' },
      { name: 'Firestore', category: 'NoSQL Database', iconKey: 'firestore', level: 'Production', highlight: 'Realtime Data & Security Rules' },
      { name: 'Android', category: 'Mobile Platform', iconKey: 'android', level: 'Application', highlight: 'Client Apps Ecosystem' },
      { name: 'iOS', category: 'Mobile Platform', iconKey: 'ios', level: 'Application', highlight: 'Mobile UX & Deployment' },
      { name: 'Node.js', category: 'Backend & Runtime', iconKey: 'nodejs', level: 'Core', highlight: 'Tooling, APIs & Automation' }
    ]
  },
  {
    categoryName: 'Creative Technology & Tooling',
    description: 'Kombinasi desain antarmuka, version control, dan 3 tahun produksi video desktop.',
    skills: [
      { name: 'CapCut', category: 'Video Editing', iconKey: 'capcut', level: '3+ Years Desktop', highlight: 'Video Pacing, Motion, Content Creation' },
      { name: 'Figma', category: 'UI/UX Design', iconKey: 'figma', level: 'Prototyping', highlight: 'Wireframes, Design Systems & Handoff' },
      { name: 'Git', category: 'Version Control', iconKey: 'git', level: 'Workflow', highlight: 'Branching, Clean Commits & Merges' },
      { name: 'GitHub', category: 'Collaboration', iconKey: 'github', level: 'CI/CD & Repos', highlight: 'Repository & Code Management' }
    ]
  }
];

export const CREATIVE_EXPERIENCE = {
  title: 'Video Editing & Content Creation',
  experienceDuration: '3+ Tahun Pengalaman',
  primaryTool: 'CapCut Desktop',
  description: 'Di luar penulisan kode, saya telah mendalami video editing selama lebih dari 3 tahun menggunakan CapCut Desktop. Keahlian ini memungkinkan saya menyusun footage, mengatur ritme narasi (pacing), merancang motion visual sederhana, serta memproduksi konten promosi dan media sosial yang menarik dan berbobot.',
  capabilities: [
    { title: 'Timeline Precision & Pacing', desc: 'Pemotongan ritmis yang menjaga retensi penonton dan kejelasan cerita.' },
    { title: 'Visual Motion & Typography', desc: 'Penerapan animasi teks, transisi halus, dan hierarki grafis informatif.' },
    { title: 'Brand & Promotional Videos', desc: 'Produksi video promosi produk (seperti Tanabrew) dan materi visual kampanye digital.' },
    { title: 'High-Bitrate Export & Quality', desc: 'Workflow ekspor terkalibrasi untuk platform YouTube, Instagram Reels, dan TikTok.' }
  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', label: 'github.com/danialgobel', href: 'https://github.com/danialgobel', iconName: 'github', isAvailable: true },
  { platform: 'Instagram', label: '@danialgobell', href: 'https://www.instagram.com/danialgobell/', iconName: 'instagram', isAvailable: true },
  { platform: 'TikTok', label: '@danialgobelll', href: 'https://www.tiktok.com/@danialgobelll', iconName: 'tiktok', isAvailable: true },
  { platform: 'Email', label: 'danialgobel26@gmail.com', href: 'mailto:danialgobel26@gmail.com', iconName: 'mail', isAvailable: true }
];
