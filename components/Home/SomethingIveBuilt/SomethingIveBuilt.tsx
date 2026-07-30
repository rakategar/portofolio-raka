import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Project01_CRMBTNN from "./projects/Project01_CRMBTNN";
import Project02_AutoDM from "./projects/Project02_AutoDM";
import Project03_ThreadAffiliate from "./projects/Project03_ThreadAffiliate";
import Project04_KinantiLMS from "./projects/Project04_KinantiLMS";
import Project05_Kirani from "./projects/Project05_Kirani";
import Project06_WiseAi from "./projects/Project06_WiseAi";
import Project07_Kinanti from "./projects/Project07_Kinanti";
import Project08_Tarla from "./projects/Project08_Tarla";
import Project09_Forwardin from "./projects/Project09_Forwardin";
import Project10_LoveMeter from "./projects/Project10_LoveMeter";
import Project11_CekKodam from "./projects/Project11_CekKodam";
import Project12_ZahraTrans from "./projects/Project12_ZahraTrans";
import Project13_WebUMKMMu from "./projects/Project13_WebUMKMMu";
import Project14_WebWibu from "./projects/Project14_WebWibu";
import Project15_OpenDiary from "./projects/Project15_OpenDiary";
import Project16_Jadwalin from "./projects/Project16_Jadwalin";
import Project17_Dapurin from "./projects/Project17_Dapurin";
import Project18_Stuncare from "./projects/Project18_Stuncare";
import Project19_Sehatin from "./projects/Project19_Sehatin";
import Project20_Moody from "./projects/Project20_Moody";

export default function SomethingIveBuilt() {
  return (
    <div
      id="SomethingIveBuiltSection"
      className="flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* Title */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <ArrowIcon
          className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 04.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}Project Ku
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        <Project01_CRMBTNN />
        <Project02_AutoDM />
        <Project03_ThreadAffiliate />
        <Project04_KinantiLMS />
        <Project05_Kirani />
        <Project06_WiseAi />
        <Project07_Kinanti />
        <Project08_Tarla />
        <Project09_Forwardin />
        <Project10_LoveMeter />
        <Project11_CekKodam />
        <Project12_ZahraTrans />
        <Project13_WebUMKMMu />
        <Project14_WebWibu />
        <Project15_OpenDiary />
        <Project16_Jadwalin />
        <Project17_Dapurin />
        <Project18_Stuncare />
        <Project19_Sehatin />
        <Project20_Moody />
      </div>
    </div>
  );
}
