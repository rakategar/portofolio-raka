import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Project Ku
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a
                href="https://www.figma.com/design/tFm5k3v7Guccr1xB2tkZX0/Moody?node-id=0-1&t=f7EhLt5gaCZRpGfD-1"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/Moody.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/Moody.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Figma Project
                </span>
                <a
                  href="https://www.figma.com/design/tFm5k3v7Guccr1xB2tkZX0/Moody?node-id=0-1&t=f7EhLt5gaCZRpGfD-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Moody
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  <span className="text-AAsecondary">Moody</span>, merupakan
                  aplikasi mobile yang terintegrasi oleh teknologi Augmented
                  Reality, aplikasi ini bertujuan sebagai pendamping untuk
                  seseorang yang mengalami masalah Mood yang tidak teratur,
                  selain aplikasi, output dari Project ini juga berupa Permen
                  yang akan dijual belikan secara konvensional
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Figma</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://www.figma.com/design/tFm5k3v7Guccr1xB2tkZX0/Moody?node-id=0-1&t=f7EhLt5gaCZRpGfD-1"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={
                  "https://www.figma.com/design/ceRz1Vsrus25FHUAeTuAdH/GEMASTIK?m=auto&t=XGfOpfea93ZKGmgJ-6"
                }
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/Sehatin.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/Sehatin.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Figma Project
                </span>
                <a
                  href="https://www.figma.com/design/ceRz1Vsrus25FHUAeTuAdH/GEMASTIK?m=auto&t=XGfOpfea93ZKGmgJ-6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Sehatin
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <span className="text-AAsecondary">Sehatin</span>, merupakan
                  aplikasi mobile yang diperuntukan kepada umum yang bertujuan
                  untuk mengatur pola makan serta hidup sehat para pengguna.
                  Fitur dari Sehatin meliputi rekomendasi makanan sehat, podcast
                  edukasi, kalkulator gizi, hingga konsultasi dengan para ahli
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Figma</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://www.figma.com/design/ceRz1Vsrus25FHUAeTuAdH/GEMASTIK?m=auto&t=XGfOpfea93ZKGmgJ-6"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project  3*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link
                href={
                  "https://www.figma.com/design/Z4N9baFIypcjaSINpwG6A6/PKM?m=auto&t=XGfOpfea93ZKGmgJ-6"
                }
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img
                src={"/Stuncare.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/Stuncare.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Figma Project
                </span>
                <Link
                  href={
                    "https://www.figma.com/design/Z4N9baFIypcjaSINpwG6A6/PKM?m=auto&t=XGfOpfea93ZKGmgJ-6"
                  }
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Stuncare
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  <span className="text-AAsecondary text-base">Stuncare</span>,
                  merupakan aplikasi mobile yang bergerak di bidang statistik
                  dan edukasi mengenai stunting di daerah Pamekasan, selain itu
                  aplikasi ini juga di peruntukan untuk penyandang disabilitas
                  yang mengutamakan kemudahan penggunaan aplikasi, serta
                  fasilitas pengaduan ke dokter ahli
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Figma</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <ExternalLink
                  url={
                    "https://www.figma.com/design/Z4N9baFIypcjaSINpwG6A6/PKM?m=auto&t=XGfOpfea93ZKGmgJ-6"
                  }
                  router={router}
                />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 4 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link
                href={
                  "https://www.figma.com/design/aDbelB2fq38n0KDVW5MyTS/mobile-app?t=7K0hFK4teRdy5Snr-0"
                }
              >
                <div
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img
                src={"/Dapurin.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/Dapurin.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Figma Project
                </span>
                <Link
                  href={
                    "https://www.figma.com/design/aDbelB2fq38n0KDVW5MyTS/mobile-app?t=7K0hFK4teRdy5Snr-0"
                  }
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Dapurin
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <span className="text-AAsecondary">Dapurin</span>, merupakan
                  aplikasi mobile E-Commerce yang bergerak di bidang pengadaan
                  bahan baku masak, terutama sayuran, buah, dan biji. Tampilan
                  dari aplikasi Dapurin ini di desain semenarik mungkin agar
                  meningkatkan Mood untuk mengolah bahan makan
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">FIgma</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <ExternalLink
                  url={
                    "https://www.figma.com/design/aDbelB2fq38n0KDVW5MyTS/mobile-app?t=7K0hFK4teRdy5Snr-0"
                  }
                  router={router}
                />
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 5 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96"
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://github.com/rakategar/Jadwalin-Task-App.git"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 "></div>

              <Img
                src={"/Jadwalin.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/Jadwalin.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>
            <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8">
              <div className="w-full"></div>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Mobile Dev Project
                </span>
                <a
                  href="https://github.com/rakategar/Jadwalin-Task-App.git"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Jadwalin
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  <span className="text-AAsecondary text-base">Jadwalin</span>,
                  merupakan aplikasi mobile yang bertujuan untuk pengelolaan
                  tugas, aplikasi ini hadir agar pengguna mudah dalam
                  memanajemen tugas - tugas yang akan mereka kerjakan, dengan
                  adanya Jadwalin diharap dapat membantu produktivitas pengguna
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Flutter</span>
                <span className="pr-4 z-10">Firebase</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/rakategar/jadwalin" />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 6 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href="https://github.com/rakategar/opendiary"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/Opendiary.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/Opendiary.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Web Dev Project
                </span>
                <a
                  href="https://github.com/rakategar/opendiary"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Open Diary
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <span className="text-AAsecondary">Open Dairy</span>,
                  merupakan aplikasi website yang terintegrasi oleh database
                  Supabase dan autentikasi Clerk, aplikasi ini bertujuan agar
                  pengguna dapat mengunggah Diary atau Curhatan mereka dan dapat
                  ditanggapi oleh pengguna lain
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">NextJS</span>
                <span className="pr-4 z-10">Tailwind</span>
                <span className="pr-4 z-10">Supabase</span>
                <span className="pr-4 z-10">Clerk</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/rakategar/opendiary" />
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 7 */}
        <div
          data-aos="fade-up"
          className="relative  md:grid md:grid-cols-12 w-full md:h-96"
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://github.com/rakategar/web-wibu.git"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 "></div>

              <Img
                src={"/Webwibu.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/Webwibu.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>
            <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8">
              <div className="w-full"></div>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Web Dev Project
                </span>
                <a
                  href="https://github.com/rakategar/web-wibu.git"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    WebWibu
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  <span className="text-AAsecondary text-base">WebWibu</span>,
                  merupakan aplikasi website yang terintegrasi oleh Database
                  JikanApi dan Payment Gateway MidTrans, aplikasi ini bertujuan
                  untuk menyajikan daftar anime baik secara rekomendasi, tingkat
                  popularitas, serta ranking. Aplikasi ini disertai mini Youtube
                  Player yang memudahkan pengguna
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">NextJS</span>
                <span className="pr-4 z-10">Tailwind</span>
                <span className="pr-4 z-10">MySQL</span>
                <span className="pr-4 z-10">MidTrans</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/rakategar/jadwalin" />
                <a
                  href="https://github.com/rakategar/web-wibu.git"
                  target={"_blank"}
                  rel="noreferrer"
                ></a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 8 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href="https://kinaishku.com/makanan-2"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/Webumkmmu.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/Webumkmmu.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Web Dev Project
                </span>
                <a
                  href="https://kinaishku.com/makanan-2"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Web UMKM Mu
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <span className="text-AAsecondary">Web UMKM Mu</span>,
                  merupakan project aplikasi website yang saya buat secara
                  gratis untuk para pelaku UMKM, dengan dibuatnya website untuk
                  mereka diharap dapat memperluas jangkauan pasar dari usaha
                  yang mereka miliki
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Canva Website</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <a
                  href="https://kinasihku.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
                <a
                  href="https://kinasihku.com/makanan-1"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
                <a
                  href="https://kinasihku.com/makanan-2"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 9 */}
        <div
          data-aos="fade-up"
          className="relative  md:grid md:grid-cols-12 w-full md:h-96"
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://zahratrans.my.id"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 "></div>

              <Img
                src={"/Zahratrans.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/Zahratrans.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>
            <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8">
              <div className="w-full"></div>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Web Dev Project
                </span>
                <a
                  href="https://zahratrans.my.id"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Zahra Trans
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  <span className="text-AAsecondary text-base">
                    Zahra Trans
                  </span>
                  , merupakan aplikasi website yang bergerak di bidang bis
                  travel dan wisata, aplikasi ini akan memudahkan pengguna dalam
                  melakukan pemesanan bis travel serta memudahkan dalam
                  pemilihan rekomendasi wisata yang mungkin belum mereka ketahui
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Wordpress</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <a
                  href="https://zahratrans.my.id"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 10 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href="https://cek-kodam-xi.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/cekkodam.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/cekkodam.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Web Dev Project
                </span>
                <a
                  href="https://cek-kodam-xi.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Web Cek Kodam
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <span className="text-AAsecondary">Web Cek Kodam</span>,
                  merupakan aplikasi website yang bertujuan untuk memunculkan
                  nama nama kodam/hewan random pick, berdasarkan nama yang di
                  input oleh user
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">NextJS</span>
                <span className="pr-4 z-10">Tailwind</span>
                <span className="pr-4 z-10">Daisy UI</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/rakategar/web-cek-kodam" />
                <a
                  href="https://cek-kodam-xi.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 11 */}
        <div
          data-aos="fade-up"
          className="relative  md:grid md:grid-cols-12 w-full md:h-96"
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://love-meter-coral.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 "></div>

              <Img
                src={"/lovemeter.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/lovemeter.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>
            <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8">
              <div className="w-full"></div>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Web Dev Project
                </span>
                <a
                  href="https://love-meter-coral.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Web Love Meter
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  <span className="text-AAsecondary text-base">
                    Web Love Meter
                  </span>
                  , merupakan aplikasi website yang akan memunculkan presentase
                  kecocokan dari 2 nama yang di input oleh user, web ini dikemas
                  dalam tampilan lovely
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">NextJS</span>
                <span className="pr-4 z-10">Tailwind</span>
                <span className="pr-4 z-10">Daisy UI</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/rakategar/love-meter" />
                <a
                  href="https://love-meter-coral.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 12 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href="https://forwardinapp.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/forwardin.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/forwardin.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Web Dev Project
                </span>
                <a
                  href="https://forwardinapp.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Forwardin
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <span className="text-AAsecondary">Forwardin</span>, merupakan
                  aplikasi website yang bertujuan pengelolaan pesan yang di
                  desain sedimikian rupa untuk memudahkan pengguna mengelola
                  data pesan yang mereka miliki, ini adalah project front end
                  web dev yang merupakan tugas seleksi magang
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">NextJS</span>
                <span className="pr-4 z-10">Tailwind</span>
                <span className="pr-4 z-10">Daisy UI</span>
                <span className="pr-4 z-10">Next Auth</span>
                <span className="pr-4 z-10">MongoDB</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/rakategar/forwardin-app" />
                <a
                  href="https://forwardinapp.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project  13*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a
                href="https://www.figma.com/design/tFm5k3v7Guccr1xB2tkZX0/Moody?node-id=0-1&t=f7EhLt5gaCZRpGfD-1"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/Tarla.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/Tarla.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Figma Project
                </span>
                <a
                  href="https://www.figma.com/design/tFm5k3v7Guccr1xB2tkZX0/Moody?node-id=0-1&p=f&t=OpbMXnee1TlNqyPO-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Tarla
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  <span className="text-AAsecondary">Tarla</span>, merupakan
                  aplikasi mobile dengan chat AI yang bertujuan untuk membantu
                  pengguna dalam memonitoring konsumsi gula dalam makanan yang
                  mereka konsumsi sehari hari
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Figma</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://www.figma.com/design/tFm5k3v7Guccr1xB2tkZX0/Moody?node-id=0-1&p=f&t=OpbMXnee1TlNqyPO-0"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 14 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href="https://kinantiku.com"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/Kinanti.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/Kinanti.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  WhatsApp Bot Project
                </span>
                <a
                  href="https://kinantiku.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Kinanti
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <span className="text-AAsecondary">Kinanti</span>, merupakan
                  Learning Management System ( LMS ) yang terintegrasi dengan
                  WhatsApp Bot dan website interface yang bertujuan untuk
                  memudahkan distribusi tugas antara guru dan siswa
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">NextJS</span>
                <span className="pr-4 z-10">Tailwind</span>
                <span className="pr-4 z-10">Daisy UI</span>
                <span className="pr-4 z-10">Next Auth</span>
                <span className="pr-4 z-10">Supabase</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/rakategar/kinanti" />
                <a
                  href="https://kinantiku.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project  15*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a
                href="https://github.com/rakategar/wise-ai/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/Wise.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/Wise.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Web Dev Project
                </span>
                <a
                  href="https://github.com/rakategar/wise-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Wise.ai
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  <span className="text-AAsecondary">Wise.ai</span>, merupakan
                  sebuah AI Chat Bot Asistant untuk membantu manajemen efisiensi
                  penggunaan energi pada peralatan rumah tangga.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">NextJS</span>
                <span className="pr-4 z-10">Go Lang</span>
                <span className="pr-4 z-10">Tailwind</span>
                <span className="pr-4 z-10">Daisy UI</span>
                <span className="pr-4 z-10">Next Auth</span>
                <span className="pr-4 z-10">Hugging Face</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://github.com/rakategar/wise-ai/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <GithubIcon url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 14 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href="https://kirani.vercel.app"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/Kirani.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/Kirani.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Web Dev & IoT Project
                </span>
                <a
                  href="https://kirani.vercel.app"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Kirani
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <span className="text-AAsecondary">Kirani</span>, merupakan
                  project IoT yang bertujuan untuk membuat RC Car dapat di
                  remote lewat web socket dengan jarak yang tak terbatas
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">NextJS</span>
                <span className="pr-4 z-10">Tailwind</span>
                <span className="pr-4 z-10">Daisy UI</span>
                <span className="pr-4 z-10">Clerk</span>
                <span className="pr-4 z-10">Supabase</span>
                <span className="pr-4 z-10">Midtrans</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/rakategar/kirani" />
                <a
                  href="https://kirani.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
