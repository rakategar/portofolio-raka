import React from "react";
import ProjectImageRight from "../ProjectImageRight";

export default function Project02_WiseAi() {
  return (
    <ProjectImageRight
      category="Web Dev Project"
      title="Wise.ai"
      href="https://github.com/rakategar/wise-ai/"
      description=", merupakan sebuah AI Chat Bot Asistant untuk membantu manajemen efisiensi penggunaan energi pada peralatan rumah tangga."
      techStack={["NextJS", "Go Lang", "Tailwind", "Daisy UI", "Next Auth", "Hugging Face"]}
      imageSrc="/Wise.png"
      githubLink="https://github.com/rakategar/wise-ai/"
    />
  );
}
