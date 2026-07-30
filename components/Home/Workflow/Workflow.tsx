import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

const steps = [
  {
    tag: "input",
    title: "Ide",
    description: "Masalah nyata, engagement Instagram, tugas sekolah, monitoring tim.",
  },
  {
    tag: "build",
    title: "Claude Code",
    description: "Pair programming bareng AI, dari arsitektur sampai baris kode.",
    highlight: true,
  },
  {
    tag: "automate",
    title: "Workflow n8n",
    description: "Trigger, AI node, API, pipeline yang jalan sendiri 24/7.",
  },
  {
    tag: "output",
    title: "Ship",
    description: "Deploy ke Vercel, dipakai user beneran, iterasi lagi.",
  },
];

export default function Workflow() {
  return (
    <div
      id="WorkflowSection"
      data-aos="fade-up"
      className="flex flex-col items-center py-20 bg-AAprimary"
    >
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px]
        md:w-[700px] lg:w-[900px]"
      >
        {/* // ? Title */}
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon
              className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"}
            />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl"> 02.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              Cara Aku Bekerja
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* // ? Description */}
        <div className="font-Header sm:text-base text-sm">
          <span className="text-gray-400">
            Web development bertemu automation, setiap projek mengalir lewat pipeline yang sama,
            ide dieksekusi bareng <span className="text-AAsecondary">AI</span>, dirangkai jadi
            workflow, lalu di ship.
          </span>
        </div>

        {/* // ? Steps */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className={`relative flex-1 rounded p-5 border bg-AAtertiary duration-300 ${
                  step.highlight
                    ? "border-AAsecondary"
                    : "border-gray-600 hover:border-AAsecondary"
                }`}
              >
                <span className="absolute top-3 right-4 font-mono text-[10px] text-gray-500 uppercase">
                  {step.tag}
                </span>
                <div className="flex flex-row items-center space-x-2">
                  <ArrowIcon className={"h-3 w-3 flex-none text-AAsecondary"} />
                  <span
                    className={`font-bold tracking-wide sm:text-base text-sm ${
                      step.highlight ? "text-AAsecondary" : "text-gray-200"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                <p className="mt-2 font-Header text-gray-400 sm:text-sm text-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="font-mono text-gray-500 sm:text-sm text-xs">
          {"// pipeline ini nyata, lihat hasilnya di Auto DM & Threads Affiliate di bawah"}
        </div>
      </div>
    </div>
  );
}
