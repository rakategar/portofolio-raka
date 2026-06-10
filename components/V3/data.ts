export const SOCIALS = {
  github: "https://github.com/rakategar",
  linkedin: "https://www.linkedin.com/in/rakategar",
  instagram: "https://www.instagram.com/rakategarr_/",
  youtube: "https://www.youtube.com/@26.rakategarw61",
  email: "tegarrakaw@gmail.com",
  whatsapp: "https://wa.link/njvrbh",
  cv: "/cvraka.pdf",
};

export const NAV_ITEMS = [
  { label: "Tentang", target: "about" },
  { label: "Workflow", target: "workflow" },
  { label: "Projek", target: "projects" },
  { label: "Pengalaman", target: "experience" },
  { label: "Kontak", target: "contact" },
];

export const STACK = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "Prisma",
  "MySQL",
  "Firebase",
  "Flutter",
  "Go Lang",
  "n8n",
  "Claude Code",
  "Figma",
];

export type ExperienceItem = {
  date: string;
  place: string;
  role: string;
  desc?: string;
};

export const EDUCATION: ExperienceItem[] = [
  {
    date: "2022 — Sekarang",
    place: "Universitas Negeri Surabaya",
    role: "S1 Pendidikan Teknologi Informasi",
    desc: "IPK 3.91 — aktif dalam organisasi intra & ekstra kampus.",
  },
  {
    date: "2019 — 2022",
    place: "SMA Negeri 1 Tuban",
    role: "Matematika & Ilmu Pengetahuan Alam",
    desc: "Memberikan pemahaman peran Sains dan Teknologi dalam Masyarakat.",
  },
];

export const ORGANIZATIONS: ExperienceItem[] = [
  {
    date: "2024 — Sekarang",
    place: "Forum Mahasiswa Tuban Ronggolawe",
    role: "Ketua Umum",
    desc: "Bertanggung jawab membantu dan menjalankan organisasi agar tercapai cita cita bersama.",
  },
  {
    date: "2024 — Sekarang",
    place: "Himpunan Mahasiswa Teknik Informatika",
    role: "Kepala Departemen PSDM",
    desc: "Memimpin Departemen PSDM agar dapat meraih tujuan mahasiswa dalam hal pengembangan diri, akademik maupun non-akademik.",
  },
  {
    date: "2023 — 2024",
    place: "Himpunan Mahasiswa Teknik Informatika",
    role: "Staff PSDM",
    desc: "Mengelola Sumber Daya Mahasiswa dan memaksimalkan potensi sehingga dapat bersaing di era global.",
  },
  {
    date: "2023 — 2024",
    place: "Forum Mahasiswa Tuban Ronggolawe",
    role: "Staff Kewirausahaan",
    desc: "Membantu segala upaya pengadaan keuangan melalui kewirausahaan maupun lainnya.",
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  link?: string;
};

export type FeaturedProject = Project & {
  chapter: string;
  tagline: string;
  story: string;
};

// 5 chapter utama — diceritakan lewat scrollytelling.
export const FEATURED: FeaturedProject[] = [
  {
    id: "crm-btn",
    chapter: "01",
    tagline: "Dipercaya industri perbankan",
    title: "CRM Bank BTN",
    category: "Web Dev",
    story:
      "Bekerja sama dengan Bank BTN, aku membangun sistem CRM untuk memonitor aktivitas tim marketing — dari akuisisi nasabah sampai pemasaran produk perbankan. Satu dashboard, semua terlihat.",
    description:
      "Aplikasi Customer Relationship Management untuk memonitor dan mengelola aktivitas tim marketing Bank BTN.",
    tech: ["Next.js", "Tailwind", "Supabase"],
    image: "/crmbtn.png",
    github: "https://github.com/rakategar",
  },
  {
    id: "auto-dm",
    chapter: "02",
    tagline: "Ketika AI yang membalas",
    title: "Auto DM & Comment AI",
    category: "AI Automation",
    story:
      "Sistem otomasi serupa ManyChat: AI membalas komentar di feed Instagram secara otomatis, lalu mengirim DM ke pengguna yang berkomentar sesuai keyword tertentu. Engagement naik, tanpa begadang.",
    description:
      "Otomasi Instagram berbasis AI yang membalas komentar dan mengirim DM otomatis sesuai keyword.",
    tech: ["n8n", "Instagram API", "AI"],
    image: "/autodm.png",
    github: "https://github.com/rakategar",
  },
  {
    id: "thread-affiliate",
    chapter: "03",
    tagline: "Dari satu pesan Telegram",
    title: "Threads Affiliate Auto-Poster",
    category: "AI Automation",
    story:
      "Cukup kirim pesan via Telegram — AI menganalisis produk, membangun prompt, dan mempublikasikan konten affiliate ke Threads secara otomatis. Pipeline n8n yang bekerja selagi aku tidur.",
    description:
      "Pipeline n8n yang membuat dan memposting konten affiliate ke Threads menggunakan AI, dengan input dari Telegram.",
    tech: ["n8n", "Gemini AI", "Telegram API", "Threads API"],
    image: "/threadAffiliate.webp",
    github: "https://github.com/rakategar",
  },
  {
    id: "kinanti-lms",
    chapter: "04",
    tagline: "Sekolah bertemu WhatsApp",
    title: "Kinanti LMS",
    category: "Web Dev",
    story:
      "Learning Management System yang terintegrasi dengan WhatsApp Bot Kinanti — guru membagikan tugas, siswa mengumpulkan, progress terpantau. Semua dari aplikasi chat yang sudah mereka pakai tiap hari.",
    description:
      "LMS berbasis web yang terintegrasi WhatsApp Bot untuk pengelolaan tugas, pengumuman, dan monitoring belajar.",
    tech: ["Next.js", "Tailwind", "Next Auth", "Supabase", "Baileys"],
    image: "/kinantiweb.png",
    github: "https://github.com/rakategar/kinanti",
    link: "https://kinantiku.com/",
  },
  {
    id: "kirani",
    chapter: "05",
    tagline: "IoT tanpa batas jarak",
    title: "Kirani",
    category: "Web Dev & IoT",
    story:
      "Project IoT yang membuat RC Car bisa dikendalikan lewat web socket — dari mana saja, dengan jarak yang tak terbatas. Browser jadi remote control.",
    description:
      "RC Car yang dapat diremote lewat web socket dengan jarak tak terbatas.",
    tech: ["Next.js", "Web Socket", "Clerk", "Supabase", "Midtrans"],
    image: "/Kirani.png",
    github: "https://github.com/rakategar/kirani",
    link: "https://kirani.vercel.app/",
  },
];

// Arsip projek lainnya — grid ringkas.
export const ARCHIVE: Project[] = [
  {
    id: "wise-ai",
    title: "Wise.ai",
    category: "AI / Web Dev",
    description: "AI Chat Bot Assistant untuk manajemen efisiensi energi peralatan rumah tangga.",
    tech: ["Next.js", "Go Lang", "Hugging Face"],
    image: "/Wise.png",
    github: "https://github.com/rakategar/wise-ai/",
  },
  {
    id: "kinanti-bot",
    title: "Kinanti WhatsApp Bot",
    category: "WhatsApp Bot",
    description: "Chatbot distribusi dan pengumpulan tugas antara guru dan siswa via WhatsApp.",
    tech: ["Baileys", "Node.js", "Supabase"],
    image: "/Kinanti.png",
    github: "https://github.com/rakategar/kinanti",
    link: "https://kinantiku.com/",
  },
  {
    id: "forwardin",
    title: "Forwardin",
    category: "Web Dev",
    description: "Aplikasi pengelolaan pesan — project seleksi magang front end.",
    tech: ["Next.js", "Tailwind", "MongoDB"],
    image: "/forwardin.png",
    github: "https://github.com/rakategar/forwardin-app",
    link: "https://forwardinapp.vercel.app/",
  },
  {
    id: "tarla",
    title: "Tarla",
    category: "UI/UX Design",
    description: "Aplikasi mobile dengan chat AI untuk monitoring konsumsi gula harian.",
    tech: ["Figma"],
    image: "/Tarla.png",
    link: "https://www.figma.com/design/tFm5k3v7Guccr1xB2tkZX0/Moody?node-id=0-1&p=f&t=OpbMXnee1TlNqyPO-0",
  },
  {
    id: "love-meter",
    title: "Web Love Meter",
    category: "Web Dev",
    description: "Web presentase kecocokan dari 2 nama, dikemas dalam tampilan lovely.",
    tech: ["Next.js", "Tailwind"],
    image: "/lovemeter.png",
    github: "https://github.com/rakategar/love-meter",
    link: "https://love-meter-coral.vercel.app/",
  },
  {
    id: "cek-kodam",
    title: "Web Cek Kodam",
    category: "Web Dev",
    description: "Web random pick nama kodam/hewan berdasarkan nama yang diinput user.",
    tech: ["Next.js", "Tailwind"],
    image: "/cekkodam.png",
    github: "https://github.com/rakategar/web-cek-kodam",
    link: "https://cek-kodam-xi.vercel.app/",
  },
  {
    id: "zahra-trans",
    title: "Zahra Trans",
    category: "Web Dev",
    description: "Website pemesanan bis travel dan rekomendasi wisata.",
    tech: ["Wordpress"],
    image: "/Zahratrans.png",
    link: "https://zahratrans.my.id",
  },
  {
    id: "web-umkm",
    title: "Web UMKM Mu",
    category: "Web Dev",
    description: "Website gratis untuk pelaku UMKM agar jangkauan pasar makin luas.",
    tech: ["Canva Website"],
    image: "/Webumkmmu.png",
    link: "https://kinasihku.com",
  },
  {
    id: "webwibu",
    title: "WebWibu",
    category: "Web Dev",
    description: "Daftar anime via JikanApi + payment gateway MidTrans + mini Youtube Player.",
    tech: ["Next.js", "MySQL", "MidTrans"],
    image: "/Webwibu.png",
    github: "https://github.com/rakategar/web-wibu.git",
  },
  {
    id: "open-diary",
    title: "Open Diary",
    category: "Web Dev",
    description: "Unggah diary atau curhatan dan dapat ditanggapi pengguna lain.",
    tech: ["Next.js", "Supabase", "Clerk"],
    image: "/Opendiary.png",
    github: "https://github.com/rakategar/opendiary",
  },
  {
    id: "jadwalin",
    title: "Jadwalin",
    category: "Mobile Dev",
    description: "Aplikasi mobile manajemen tugas untuk membantu produktivitas.",
    tech: ["Flutter", "Firebase"],
    image: "/Jadwalin.png",
    github: "https://github.com/rakategar/jadwalin",
  },
  {
    id: "dapurin",
    title: "Dapurin",
    category: "UI/UX Design",
    description: "E-Commerce bahan baku masak dengan desain yang membangkitkan mood.",
    tech: ["Figma"],
    image: "/Dapurin.png",
    link: "https://www.figma.com/design/aDbelB2fq38n0KDVW5MyTS/mobile-app?t=7K0hFK4teRdy5Snr-0",
  },
  {
    id: "stuncare",
    title: "Stuncare",
    category: "UI/UX Design",
    description: "Statistik & edukasi stunting di Pamekasan, ramah penyandang disabilitas.",
    tech: ["Figma"],
    image: "/Stuncare.png",
    link: "https://www.figma.com/design/Z4N9baFIypcjaSINpwG6A6/PKM?m=auto&t=XGfOpfea93ZKGmgJ-6",
  },
  {
    id: "sehatin",
    title: "Sehatin",
    category: "UI/UX Design",
    description: "Pola makan sehat: rekomendasi makanan, podcast, kalkulator gizi, konsultasi ahli.",
    tech: ["Figma"],
    image: "/Sehatin.png",
    link: "https://www.figma.com/design/ceRz1Vsrus25FHUAeTuAdH/GEMASTIK?m=auto&t=XGfOpfea93ZKGmgJ-6",
  },
  {
    id: "moody",
    title: "Moody",
    category: "UI/UX Design",
    description: "Pendamping mood berbasis Augmented Reality — plus permen fisiknya.",
    tech: ["Figma"],
    image: "/Moody.png",
    link: "https://www.figma.com/design/tFm5k3v7Guccr1xB2tkZX0/Moody?node-id=0-1&t=f7EhLt5gaCZRpGfD-1",
  },
];
