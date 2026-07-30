import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Pekerjaan() {
  const tasks = [
    {
      text: "April 2026 - Sekarang | PT. Ekosistem Pelosok Hub / VIBOXS | Automation & AI Integration Specialist. |\nMerancang dan mengintegrasikan solusi berbasis AI untuk operasional internal maupun project klien, serta membangun workflow otomasi kompleks 10-20 task per bulan lengkap dengan dokumentasi teknis.",
      keywords: ["Automation & AI Integration Specialist"],
    },
    {
      text: "Maret 2025 - Sekarang | Remot.in | Full-Stack Developer. |\nMengembangkan sistem remote control real time berbasis Web Socket dengan latensi di bawah 100ms, serta infrastruktur cloud yang tetap stabil saat trafik tinggi pada live streaming TikTok.",
      keywords: ["Full-Stack Developer"],
    },
    {
      text: "Maret 2025 - Sekarang | Kinanti Learning Management System | Full-Stack Developer. |\nMembangun LMS full-stack dengan Next.js, Supabase, dan WhatsApp Web.js. Dipakai 200+ guru dan siswa di SMKN 3 Buduran Sidoarjo, memangkas beban administrasi lebih dari 60%.",
      keywords: ["Full-Stack Developer"],
    },
    {
      text: "Maret 2025 - Sekarang | SMKN 3 Buduran, Sidoarjo | Guru Informatika (PLP). |\nMengajar Informatika dan Rekayasa Perangkat Lunak untuk kelas 10 dan 11, menyampaikan materi dasar web development dengan HTML, CSS, dan JavaScript ke dua kelas berisi 40 siswa.",
      keywords: ["Guru Informatika (PLP)"],
    },
    {
      text: "Sept 2024 - Jan 2025 | Ruangguru, Kampus Merdeka | Mentor Assistant Fullstack Golang & AI. |\nMengembangkan Wise.ai dengan Next.js dan Golang, mengimplementasikan model AI Tapas, Phi ChatBot, dan Black Forest. Nilai akhir 3.97/4.00, peringkat 5% teratas peserta.",
      keywords: ["Mentor Assistant Fullstack Golang & AI"],
    },
    {
      text: "Des 2022 - Sekarang | Kinasih Media Store | Owner. |\nMenjual akun aplikasi premium untuk kebutuhan media sosial, mencatat 300+ order dalam satu tahun dengan margin keuntungan 20-35% setiap bulan.",
      keywords: ["Owner"],
    },
    {
      text: "Mar 2023 - Mar 2024 | WEBUMKMMU | Owner. |\nMenyediakan jasa pembuatan website, migrasi domain server, dan hosting dengan potongan harga 90%, rata-rata 1-2 project per bulan dan tingkat kepuasan pelanggan 80%.",
      keywords: ["Owner"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col space-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Pengalaman Kerja ku
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description */}
          {tasks.map((item, index) => {
            const textLines = item.text.split("\n").map((line, lineIndex) => (
              <span
                key={lineIndex}
                className="block"
                dangerouslySetInnerHTML={{
                  __html: getTasksTextWithHighlightedKeyword(line, item.keywords),
                }}
              ></span>
            ));
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                <div className="text-gray-500 sm:text-sm text-xs">{textLines}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
