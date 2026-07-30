import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Project01_Viboxs from "./projects/Project01_Viboxs";
import Project02_PanJek from "./projects/Project02_PanJek";
import Project03_RategEngineering from "./projects/Project03_RategEngineering";
import Project04_ACTBankBTN from "./projects/Project04_ACTBankBTN";
import Project05_IcuClass from "./projects/Project05_IcuClass";
import Project06_RategFinance from "./projects/Project06_RategFinance";
import Project07_FaisalMaulana from "./projects/Project07_FaisalMaulana";
import Project08_AutoDM from "./projects/Project08_AutoDM";
import Project09_ThreadAffiliate from "./projects/Project09_ThreadAffiliate";
import Project10_KinantiLMS from "./projects/Project10_KinantiLMS";
import Project11_Kirani from "./projects/Project11_Kirani";
import Project12_WiseAi from "./projects/Project12_WiseAi";
import Project13_Kinanti from "./projects/Project13_Kinanti";
import Project14_Tarla from "./projects/Project14_Tarla";
import Project15_Forwardin from "./projects/Project15_Forwardin";
import Project16_LoveMeter from "./projects/Project16_LoveMeter";
import Project17_CekKodam from "./projects/Project17_CekKodam";
import Project18_ZahraTrans from "./projects/Project18_ZahraTrans";
import Project19_WebUMKMMu from "./projects/Project19_WebUMKMMu";
import Project20_WebWibu from "./projects/Project20_WebWibu";
import Project21_OpenDiary from "./projects/Project21_OpenDiary";
import Project22_Jadwalin from "./projects/Project22_Jadwalin";
import Project23_Dapurin from "./projects/Project23_Dapurin";
import Project24_Stuncare from "./projects/Project24_Stuncare";
import Project25_Sehatin from "./projects/Project25_Sehatin";
import Project26_Moody from "./projects/Project26_Moody";

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
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 03.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}Project Ku
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        <Project01_Viboxs />
        <Project02_PanJek />
        <Project03_RategEngineering />
        <Project04_ACTBankBTN />
        <Project05_IcuClass />
        <Project06_RategFinance />
        <Project07_FaisalMaulana />
        <Project08_AutoDM />
        <Project09_ThreadAffiliate />
        <Project10_KinantiLMS />
        <Project11_Kirani />
        <Project12_WiseAi />
        <Project13_Kinanti />
        <Project14_Tarla />
        <Project15_Forwardin />
        <Project16_LoveMeter />
        <Project17_CekKodam />
        <Project18_ZahraTrans />
        <Project19_WebUMKMMu />
        <Project20_WebWibu />
        <Project21_OpenDiary />
        <Project22_Jadwalin />
        <Project23_Dapurin />
        <Project24_Stuncare />
        <Project25_Sehatin />
        <Project26_Moody />
      </div>
    </div>
  );
}
