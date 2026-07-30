import React from "react";
import ProjectImageRight from "../ProjectImageRight";

export default function Project19_LoveMeter() {
  return (
    <ProjectImageRight
      category="Web Dev Project"
      title="Web Love Meter"
      href="https://love-meter-coral.vercel.app/"
      description=", merupakan aplikasi website yang akan memunculkan presentase kecocokan dari 2 nama yang di input oleh user, web ini dikemas dalam tampilan lovely"
      techStack={["NextJS", "Tailwind", "Daisy UI"]}
      imageSrc="/lovemeter.png"
      githubLink="https://github.com/rakategar/love-meter"
      externalHref="https://love-meter-coral.vercel.app/"
    />
  );
}
