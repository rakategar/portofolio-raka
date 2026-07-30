import React from "react";
import ProjectImageRight from "../ProjectImageRight";

export default function Project11_AutoDM() {
  return (
    <ProjectImageRight
      category="AI Automation Project"
      title="Auto DM & Comment AI"
      href="https://github.com/rakategar"
      description=", merupakan sistem otomasi serupa ManyChat yang membalas komentar di feed Instagram secara otomatis menggunakan AI, serta mengirimkan DM kepada pengguna yang berkomentar sesuai keyword tertentu, meningkatkan engagement dan konversi secara efisien"
      techStack={["n8n", "Instagram API", "AI"]}
      imageSrc="/autodm.png"
    />
  );
}
