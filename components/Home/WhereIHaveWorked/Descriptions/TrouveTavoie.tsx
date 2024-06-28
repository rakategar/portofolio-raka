import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
  const tasks = [
    {
      text: "2024 - Sekarang | Forum Mahasiswa Tuban Ronggolawe | Ketua Umum. | \nBertanggung jawab membantu dan menjalankan organisasi agar tercapai cita cita bersama.",
      keywords: ["Ketua Umum"],
    },
    {
      text: "2024 - Sekarang | Himpunan Mahasiswa Teknik Informatika | Kepala Departemen PSDM. |\nMemimpin Departemen PSDM agar dapat meraih tujuan mahasiswa dalam hal pengembangan diri, baik di bidang akademik maupun non-akademik.",
      keywords: ["Kepala Departemen PSDM"],
    },
    {
      text: "2023 - 2024 | Himpunan Mahasiswa Teknik Informatika | Staff PSDM. |\nMengelola Sumber Daya Mahasiswa dan memaksimalkan potensi sehingga dapat bersaing di era global",
      keywords: ["Staff PSDM."],
    },
    {
      text: "2023 - 2024 | Forum Mahasiswa Tuban Ronggolawe | Staff Kewirausahaan. |\nBertanggung jawab membantu staf terhadap segala upaya Pengadaan Keuangan melalui Kewirausahaan maupun lainnya",
      keywords: ["Staff Kewirausahaan"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
           Organisasi Ku 
          </span>
          
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
