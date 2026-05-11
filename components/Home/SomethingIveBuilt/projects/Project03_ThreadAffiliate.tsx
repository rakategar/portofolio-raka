import React from "react";
import ProjectImageLeft from "../ProjectImageLeft";

export default function Project03_ThreadAffiliate() {
  return (
    <ProjectImageLeft
      category="AI Automation Project"
      title="Threads Affiliate Auto-Poster"
      href="https://github.com/rakategar"
      description=", merupakan sistem otomasi berbasis n8n yang secara otomatis membuat dan memposting konten affiliate ke Threads menggunakan AI. Cukup kirim pesan via Telegram sebagai input, AI akan menganalisis produk, membangun prompt, dan mempublikasikan thread secara otomatis"
      techStack={["n8n", "Gemini AI", "Telegram API", "Threads API"]}
      imageSrc="/threadAffiliate.webp"
    />
  );
}
