import React from "react";
import ProjectImageRight from "../ProjectImageRight";

export default function Project06_RategFinance() {
  return (
    <ProjectImageRight
      category="Internal Finance Dashboard Project"
      title="Dashboard Keuangan RATEG"
      description=", merupakan dashboard keuangan internal RATEG Engineering untuk memantau arus kas perusahaan secara real time. Merangkum kas masuk dan keluar, saldo, pengeluaran per proyek, prediksi ketahanan sisa kas, hingga modul Kontrak, Jurnal, Piutang, dan Aset Kantor"
      techStack={["NextJS", "Tailwind", "Supabase"]}
      imageSrc="/rategfinance.png"
    />
  );
}
