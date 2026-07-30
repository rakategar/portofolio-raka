import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full min-h-[24rem] py-8 items-center bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base"> 04.</span>
          <span className=" font-sans text-AAsecondary text-base">Kontak</span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">Hubungi Aku !</span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
      Aku selalu terbuka untuk setiap peluang baru, kotak masuk Ku terbuka. Apakah Kamu memiliki pertanyaan 
      atau hanya ingin menyapa, Aku akan berusaha sebaik mungkin untuk menghubungimu kembali!
      </p>
      <div className="pt-4 flex flex-row space-x-4">
        <a href="mailto:tegarrakaw@gmail.com" target={"_blank"} rel="noreferrer">
          <button
            className="font-mono text-sm text-AAsecondary border-AAsecondary
                            px-8 py-4 border-[1.5px] rounded "
          >
            Hai Raka !
          </button>
        </a>
        <a href="https://wa.link/njvrbh" target={"_blank"} rel="noreferrer">
          <button
            className="font-mono text-sm text-gray-300 border-gray-500 hover:text-AAsecondary
                            hover:border-AAsecondary duration-300 px-8 py-4 border-[1.5px] rounded "
          >
            WhatsApp
          </button>
        </a>
      </div>
      <span className="font-mono text-xs sm:text-sm text-gray-500 pt-2">tegarrakaw@gmail.com</span>
    </div>
  );
}
