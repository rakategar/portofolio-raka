import React from "react";
import ProjectImageRight from "../ProjectImageRight";

export default function Project02_PanJek() {
  return (
    <ProjectImageRight
      category="Landing Page & PWA Project"
      title="PAN-JEK"
      description=", merupakan platform pesan antar berbasis UMKM lokal untuk warga Panimbang, Pandeglang. Aku mengembangkan landing page sekaligus web app yang dapat dipasang sebagai Progressive Web App, mencakup layanan multi kategori mulai dari Food, Ride, Send, Mart, Laundry, hingga Top Up dan E-wallet"
      techStack={["NextJS", "Tailwind", "Supabase", "PWA"]}
      imageSrc="/panjek.png"
    />
  );
}
