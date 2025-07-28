import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    ["Next.js", "JavaScript", "Tailwind CSS", "Node.js", "TypeScript"],
    ["MySQL", "Prisma", "Firebase", "Supabase", "Flutter", "Go Lang"],
  ];
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center py-20 bg-AAprimary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              Tentang Aku
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Haloo aku Raka, Mahasiswa semester 4 Program Studi{" "}
                <span className="text-AAsecondary">
                  S1 Pendidikan Teknologi Informasi Universitas Negeri Surabaya
                </span>
                , memiliki banyak Pengalaman Kepemimpinan serta Aktif dalam
                Organisasi ekstra maupun intra kampus, Tekun, Ulet, dan &nbsp;
                <span className="text-AAsecondary">
                  dengan memiliki IPK 3.91 pada semester 6 &nbsp;
                </span>
                menjadikanku Sangat Teliti dan Serius dalam mengerjakan segala
                sesuatu, baik pekerjaan kecil maupun besar, mengutamakan
                kejujuran dan suka berinovasi, maka dari itu aku selalu
                tertantang mencoba hal baru.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Aku sangat suka mencoba hal hal baru, walau basic ku adalah di
                bidang &nbsp;
                <span className="text-AAsecondary">
                  UI/UX designer dan Front End Web Development,
                </span>
                &nbsp;tapi aku juga pernah belajar &nbsp;
                <span className="text-AAsecondary">
                  mobile development dengan Flutter
                </span>
                . selain itu aku juga aktif dalam berkegiatan sosial dan
                organisasi, organisasi yang aku ikuti saat ini yaitu, &nbsp;
                <span className="text-AAsecondary">
                  Himpunan Mahasiswa Teknik Informatika sebagai Kepala
                  Departemen PSDM
                </span>
                , dan &nbsp;
                <span className="text-AAsecondary">
                  Forum Mahasiswa Tuban Ronggolawe sebagai Staff Kewirausahaan
                </span>
              </span>
            </div>
            {/* <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Fast-forward to today, I&apos;ve had the privilege of working at
                <span className="text-AAsecondary"> a huge manufacturing company</span>,
                <span className="text-AAsecondary"> a start-up</span>,{" "}
                <span className="text-AAsecondary">export-import companies</span>, also
                <span className="text-AAsecondary"> freelancing</span> and recently as Lead for the{" "}
                <span className="text-AAsecondary">Google Developer Student club</span>. Experienced in Desktop & Web
                Development, lately with Arduino Development. My main focus these days is creating and testing{" "}
                <span className="text-AAsecondary">Smart Contracts</span> with Hardhat.
              </span>
            </div> */}

            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Berikut skill yang aku punya
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/pasfoto.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/pasfoto.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
