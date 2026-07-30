import React from "react";
import { useRouter } from "next/router";
import Img from "../../../smallComp/image/Img";
import ExternalLink from "../../../Icons/ExternalLink";

export default function Project22_WebUMKMMu() {
  const router = useRouter();
  return (
    <div
      data-aos="fade-up"
      className="relative md:grid md:grid-cols-12 w-full md:h-96"
    >
      {/* Left image */}
      <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
        <div className="relative rounded w-full h-full col-span-7">
          <a href="https://kinasihku.com/makanan-2" target="_blank" rel="noreferrer">
            <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"></div>
          </a>
          <Img src="/Webumkmmu.png" alt="Project Screenshot" className="w-full rounded h-full" />
        </div>
      </div>

      {/* Right content */}
      <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
        <div className="absolute w-full h-full bg-opacity-70 z-0">
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
            <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
            <Img src="/Webumkmmu.png" alt="Project Screenshot" className="w-full h-full" />
          </div>
        </div>
        <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-3">
          <div className="flex flex-col space-y-1 md:items-end z-10">
            <span className="text-AAsecondary text-base">Web Dev Project</span>
            <a href="https://kinasihku.com/makanan-2" target="_blank" rel="noreferrer">
              <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                Web UMKM Mu
              </span>
            </a>
          </div>
          <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
            <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
              <span className="text-AAsecondary">Web UMKM Mu</span>, merupakan project aplikasi website yang saya buat secara gratis untuk para pelaku UMKM, dengan dibuatnya website untuk mereka diharap dapat memperluas jangkauan pasar dari usaha yang mereka miliki
            </p>
          </div>
          <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
            <span className="pr-4 z-10">Canva Website</span>
          </ul>
          <div className="z-10 flex flex-row space-x-5">
            <a href="https://kinasihku.com" target="_blank" rel="noreferrer">
              <ExternalLink url="" router={router} />
            </a>
            <a href="https://kinasihku.com/makanan-1" target="_blank" rel="noreferrer">
              <ExternalLink url="" router={router} />
            </a>
            <a href="https://kinasihku.com/makanan-2" target="_blank" rel="noreferrer">
              <ExternalLink url="" router={router} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
