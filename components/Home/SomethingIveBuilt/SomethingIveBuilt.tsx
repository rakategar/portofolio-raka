import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Project01_Viboxs from "./projects/Project01_Viboxs";
import Project02_PanJek from "./projects/Project02_PanJek";
import Project03_RategEngineering from "./projects/Project03_RategEngineering";
import Project04_ACTBankBTN from "./projects/Project04_ACTBankBTN";
import Project05_IcuClass from "./projects/Project05_IcuClass";
import Project06_RategFinance from "./projects/Project06_RategFinance";
import Project07_FaisalMaulana from "./projects/Project07_FaisalMaulana";
import Project08_SpeakingPro from "./projects/Project08_SpeakingPro";
import Project09_SpeakingProApp from "./projects/Project09_SpeakingProApp";
import Project10_Gayatama from "./projects/Project10_Gayatama";
import Project11_AutoDM from "./projects/Project11_AutoDM";
import Project12_ThreadAffiliate from "./projects/Project12_ThreadAffiliate";
import Project13_KinantiLMS from "./projects/Project13_KinantiLMS";
import Project14_Kirani from "./projects/Project14_Kirani";
import Project15_WiseAi from "./projects/Project15_WiseAi";
import Project16_Kinanti from "./projects/Project16_Kinanti";
import Project17_Tarla from "./projects/Project17_Tarla";
import Project18_Forwardin from "./projects/Project18_Forwardin";
import Project19_LoveMeter from "./projects/Project19_LoveMeter";
import Project20_CekKodam from "./projects/Project20_CekKodam";
import Project21_ZahraTrans from "./projects/Project21_ZahraTrans";
import Project22_WebUMKMMu from "./projects/Project22_WebUMKMMu";
import Project23_WebWibu from "./projects/Project23_WebWibu";
import Project24_OpenDiary from "./projects/Project24_OpenDiary";
import Project25_Jadwalin from "./projects/Project25_Jadwalin";
import Project26_Dapurin from "./projects/Project26_Dapurin";
import Project27_Stuncare from "./projects/Project27_Stuncare";
import Project28_Sehatin from "./projects/Project28_Sehatin";
import Project29_Moody from "./projects/Project29_Moody";

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
        <Project08_SpeakingPro />
        <Project09_SpeakingProApp />
        <Project10_Gayatama />
        <Project11_AutoDM />
        <Project12_ThreadAffiliate />
        <Project13_KinantiLMS />
        <Project14_Kirani />
        <Project15_WiseAi />
        <Project16_Kinanti />
        <Project17_Tarla />
        <Project18_Forwardin />
        <Project19_LoveMeter />
        <Project20_CekKodam />
        <Project21_ZahraTrans />
        <Project22_WebUMKMMu />
        <Project23_WebWibu />
        <Project24_OpenDiary />
        <Project25_Jadwalin />
        <Project26_Dapurin />
        <Project27_Stuncare />
        <Project28_Sehatin />
        <Project29_Moody />
      </div>
    </div>
  );
}
