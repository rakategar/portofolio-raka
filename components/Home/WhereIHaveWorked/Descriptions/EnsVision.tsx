import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "2022 - Sekarang | Universitas Negeri Surabaya | S1 Pendidikan Teknologi Informasi",
      keywords: ["S1 Pendidikan Teknologi Informasi"],
    },
    {
      text: "2019 - 2022 | SMA Negeri 1 Tuban | Matematika & Ilmu Pengetahuan Alam\nMemberikan pemahaman peran Sains  dan Teknologi dalam Masyarakat",
      keywords: ["Matematika & Ilmu Pengetahuan Alam"],
    },
    
    
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col space-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Pendidikan ku
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
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
