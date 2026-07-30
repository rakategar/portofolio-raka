import React from "react";
import ProjectImageLeft from "../ProjectImageLeft";

export default function Project18_Forwardin() {
  return (
    <ProjectImageLeft
      category="Web Dev Project"
      title="Forwardin"
      href="https://forwardinapp.vercel.app/"
      description=", merupakan aplikasi website yang bertujuan pengelolaan pesan yang di desain sedimikian rupa untuk memudahkan pengguna mengelola data pesan yang mereka miliki, ini adalah project front end web dev yang merupakan tugas seleksi magang"
      techStack={["NextJS", "Tailwind", "Daisy UI", "Next Auth", "MongoDB"]}
      imageSrc="/forwardin.png"
      githubLink="https://github.com/rakategar/forwardin-app"
      externalHref="https://forwardinapp.vercel.app/"
    />
  );
}
