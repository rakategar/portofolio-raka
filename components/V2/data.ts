export const SOCIALS = {
  github: "https://github.com/rakategar",
  linkedin: "https://www.linkedin.com/in/rakategar",
  instagram: "https://www.instagram.com/rakategarr_/",
  youtube: "https://www.youtube.com/@26.rakategarw61",
  email: "tegarrakaw@gmail.com",
  whatsapp: "https://wa.link/njvrbh",
  cv: "/cvraka.pdf",
};

export const SKILLS = [
  { name: "Next.js", level: 92 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 93 },
  { name: "Node.js", level: 84 },
  { name: "MySQL", level: 80 },
  { name: "Prisma", level: 82 },
  { name: "Firebase", level: 78 },
  { name: "Supabase", level: 86 },
  { name: "Flutter", level: 72 },
  { name: "Go Lang", level: 68 },
  { name: "UI/UX Design", level: 90 },
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
    desc: "IPK 3.91 — Aktif dalam organisasi intra & ekstra kampus.",
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
    desc: "Memimpin Departemen PSDM agar dapat meraih tujuan mahasiswa dalam hal pengembangan diri, baik di bidang akademik maupun non-akademik.",
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
    desc: "Bertanggung jawab membantu staf terhadap segala upaya Pengadaan Keuangan melalui Kewirausahaan maupun lainnya.",
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
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "crm-btn",
    title: "CRM Bank BTN",
    category: "Web Dev",
    description:
      "Aplikasi CRM (Customer Relationship Management) yang dikembangkan bekerja sama dengan Bank BTN, dirancang khusus untuk memonitor dan mengelola aktivitas tim marketing dalam proses akuisisi nasabah dan pemasaran produk perbankan.",
    tech: ["NextJS", "Tailwind", "Supabase"],
    image: "/crmbtn.png",
    github: "https://github.com/rakategar",
    featured: true,
  },
  {
    id: "auto-dm",
    title: "Auto DM & Comment AI",
    category: "AI Automation",
    description:
      "Sistem otomasi serupa ManyChat yang membalas komentar di feed Instagram secara otomatis menggunakan AI, serta mengirimkan DM kepada pengguna yang berkomentar sesuai keyword tertentu, meningkatkan engagement dan konversi secara efisien.",
    tech: ["n8n", "Instagram API", "AI"],
    image: "/autodm.png",
    github: "https://github.com/rakategar",
    featured: true,
  },
  {
    id: "thread-affiliate",
    title: "Threads Affiliate Auto-Poster",
    category: "AI Automation",
    description:
      "Sistem otomasi berbasis n8n yang secara otomatis membuat dan memposting konten affiliate ke Threads menggunakan AI. Cukup kirim pesan via Telegram sebagai input, AI akan menganalisis produk, membangun prompt, dan mempublikasikan thread secara otomatis.",
    tech: ["n8n", "Gemini AI", "Telegram API", "Threads API"],
    image: "/threadAffiliate.webp",
    github: "https://github.com/rakategar",
    featured: true,
  },
  {
    id: "kinanti-lms",
    title: "Kinanti LMS",
    category: "Web Dev",
    description:
      "Learning Management System berbasis website yang terintegrasi dengan WhatsApp Bot Kinanti, memudahkan guru dan siswa dalam pengelolaan tugas, pengumuman, dan monitoring progress belajar melalui antarmuka web yang modern.",
    tech: ["NextJS", "Tailwind", "Daisy UI", "Next Auth", "Supabase"],
    image: "/kinantiweb.png",
    github: "https://github.com/rakategar/kinanti",
    link: "https://kinantiku.com/",
    featured: true,
  },
  {
    id: "kirani",
    title: "Kirani",
    category: "Web Dev & IoT",
    description:
      "Project IoT yang bertujuan untuk membuat RC Car dapat di remote lewat web socket dengan jarak yang tak terbatas.",
    tech: ["NextJS", "Tailwind", "Daisy UI", "Clerk", "Supabase", "Midtrans"],
    image: "/Kirani.png",
    github: "https://github.com/rakategar/kirani",
    link: "https://kirani.vercel.app/",
  },
  {
    id: "wise-ai",
    title: "Wise.ai",
    category: "AI / Web Dev",
    description:
      "AI Chat Bot Assistant untuk membantu manajemen efisiensi penggunaan energi pada peralatan rumah tangga.",
    tech: ["NextJS", "Go Lang", "Tailwind", "Daisy UI", "Next Auth", "Hugging Face"],
    image: "/Wise.png",
    github: "https://github.com/rakategar/wise-ai/",
  },
  {
    id: "kinanti-bot",
    title: "Kinanti WhatsApp Bot",
    category: "WhatsApp Bot",
    description:
      "WhatsApp Chatbot yang bertujuan untuk memudahkan distribusi dan pengumpulan tugas antara guru dan siswa langsung melalui WhatsApp.",
    tech: ["Baileys", "Node.js", "Supabase"],
    image: "/Kinanti.png",
    github: "https://github.com/rakategar/kinanti",
    link: "https://kinantiku.com/",
  },
  {
    id: "tarla",
    title: "Tarla",
    category: "UI/UX Design",
    description:
      "Aplikasi mobile dengan chat AI yang bertujuan untuk membantu pengguna dalam memonitoring konsumsi gula dalam makanan yang mereka konsumsi sehari hari.",
    tech: ["Figma"],
    image: "/Tarla.png",
    link: "https://www.figma.com/design/tFm5k3v7Guccr1xB2tkZX0/Moody?node-id=0-1&p=f&t=OpbMXnee1TlNqyPO-0",
  },
  {
    id: "forwardin",
    title: "Forwardin",
    category: "Web Dev",
    description:
      "Aplikasi website untuk pengelolaan pesan yang di desain sedemikian rupa untuk memudahkan pengguna mengelola data pesan yang mereka miliki. Project front end web dev sebagai tugas seleksi magang.",
    tech: ["NextJS", "Tailwind", "Daisy UI", "Next Auth", "MongoDB"],
    image: "/forwardin.png",
    github: "https://github.com/rakategar/forwardin-app",
    link: "https://forwardinapp.vercel.app/",
  },
  {
    id: "love-meter",
    title: "Web Love Meter",
    category: "Web Dev",
    description:
      "Aplikasi website yang akan memunculkan presentase kecocokan dari 2 nama yang di input oleh user, web ini dikemas dalam tampilan lovely.",
    tech: ["NextJS", "Tailwind", "Daisy UI"],
    image: "/lovemeter.png",
    github: "https://github.com/rakategar/love-meter",
    link: "https://love-meter-coral.vercel.app/",
  },
  {
    id: "cek-kodam",
    title: "Web Cek Kodam",
    category: "Web Dev",
    description:
      "Aplikasi website yang bertujuan untuk memunculkan nama nama kodam/hewan random pick, berdasarkan nama yang di input oleh user.",
    tech: ["NextJS", "Tailwind", "Daisy UI"],
    image: "/cekkodam.png",
    github: "https://github.com/rakategar/web-cek-kodam",
    link: "https://cek-kodam-xi.vercel.app/",
  },
  {
    id: "zahra-trans",
    title: "Zahra Trans",
    category: "Web Dev",
    description:
      "Aplikasi website yang bergerak di bidang bis travel dan wisata, memudahkan pengguna dalam melakukan pemesanan bis travel serta pemilihan rekomendasi wisata.",
    tech: ["Wordpress"],
    image: "/Zahratrans.png",
    link: "https://zahratrans.my.id",
  },
  {
    id: "web-umkm",
    title: "Web UMKM Mu",
    category: "Web Dev",
    description:
      "Project aplikasi website yang dibuat secara gratis untuk para pelaku UMKM, diharapkan dapat memperluas jangkauan pasar dari usaha yang mereka miliki.",
    tech: ["Canva Website"],
    image: "/Webumkmmu.png",
    link: "https://kinasihku.com",
  },
  {
    id: "webwibu",
    title: "WebWibu",
    category: "Web Dev",
    description:
      "Aplikasi website yang terintegrasi dengan JikanApi dan Payment Gateway MidTrans, menyajikan daftar anime secara rekomendasi, popularitas, dan ranking, disertai mini Youtube Player.",
    tech: ["NextJS", "Tailwind", "MySQL", "MidTrans"],
    image: "/Webwibu.png",
    github: "https://github.com/rakategar/web-wibu.git",
  },
  {
    id: "open-diary",
    title: "Open Diary",
    category: "Web Dev",
    description:
      "Aplikasi website terintegrasi Supabase dan autentikasi Clerk, pengguna dapat mengunggah Diary atau Curhatan mereka dan dapat ditanggapi oleh pengguna lain.",
    tech: ["NextJS", "Tailwind", "Supabase", "Clerk"],
    image: "/Opendiary.png",
    github: "https://github.com/rakategar/opendiary",
  },
  {
    id: "jadwalin",
    title: "Jadwalin",
    category: "Mobile Dev",
    description:
      "Aplikasi mobile untuk pengelolaan tugas, hadir agar pengguna mudah memanajemen tugas-tugas yang akan dikerjakan dan membantu produktivitas pengguna.",
    tech: ["Flutter", "Firebase"],
    image: "/Jadwalin.png",
    github: "https://github.com/rakategar/jadwalin",
  },
  {
    id: "dapurin",
    title: "Dapurin",
    category: "UI/UX Design",
    description:
      "Aplikasi mobile E-Commerce di bidang pengadaan bahan baku masak — sayuran, buah, dan biji. Di desain semenarik mungkin agar meningkatkan mood untuk mengolah bahan makan.",
    tech: ["Figma"],
    image: "/Dapurin.png",
    link: "https://www.figma.com/design/aDbelB2fq38n0KDVW5MyTS/mobile-app?t=7K0hFK4teRdy5Snr-0",
  },
  {
    id: "stuncare",
    title: "Stuncare",
    category: "UI/UX Design",
    description:
      "Aplikasi mobile di bidang statistik dan edukasi mengenai stunting di daerah Pamekasan, diperuntukan juga untuk penyandang disabilitas dengan fasilitas pengaduan ke dokter ahli.",
    tech: ["Figma"],
    image: "/Stuncare.png",
    link: "https://www.figma.com/design/Z4N9baFIypcjaSINpwG6A6/PKM?m=auto&t=XGfOpfea93ZKGmgJ-6",
  },
  {
    id: "sehatin",
    title: "Sehatin",
    category: "UI/UX Design",
    description:
      "Aplikasi mobile untuk mengatur pola makan serta hidup sehat — rekomendasi makanan sehat, podcast edukasi, kalkulator gizi, hingga konsultasi dengan para ahli.",
    tech: ["Figma"],
    image: "/Sehatin.png",
    link: "https://www.figma.com/design/ceRz1Vsrus25FHUAeTuAdH/GEMASTIK?m=auto&t=XGfOpfea93ZKGmgJ-6",
  },
  {
    id: "moody",
    title: "Moody",
    category: "UI/UX Design",
    description:
      "Aplikasi mobile terintegrasi teknologi Augmented Reality sebagai pendamping untuk seseorang yang mengalami masalah mood yang tidak teratur, disertai output berupa permen yang dijual secara konvensional.",
    tech: ["Figma"],
    image: "/Moody.png",
    link: "https://www.figma.com/design/tFm5k3v7Guccr1xB2tkZX0/Moody?node-id=0-1&t=f7EhLt5gaCZRpGfD-1",
  },
];

export const NAV_ITEMS = [
  { id: "01", label: "Tentang", target: "about" },
  { id: "02", label: "Pengalaman", target: "experience" },
  { id: "03", label: "Projek", target: "projects" },
  { id: "04", label: "Kontak", target: "contact" },
];
