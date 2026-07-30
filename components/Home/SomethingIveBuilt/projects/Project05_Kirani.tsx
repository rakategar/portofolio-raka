import React from "react";
import ProjectImageLeft from "../ProjectImageLeft";

export default function Project05_Kirani() {
  return (
    <ProjectImageLeft
      category="Web Dev & IoT Project"
      title="Kirani"
      href="https://kirani.vercel.app"
      description=", merupakan project IoT yang bertujuan untuk membuat RC Car dapat di remote lewat web socket dengan jarak yang tak terbatas"
      techStack={["NextJS", "Web Socket", "Clerk", "Supabase", "Midtrans"]}
      imageSrc="/Kirani.png"
      githubLink="https://github.com/rakategar/kirani"
      externalHref="https://kirani.vercel.app/"
    />
  );
}
