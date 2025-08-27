import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";
import List from "../components/List";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const NextLogo = require("../assets/logos/NextLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const ReduxLogo = require("../assets/logos/ReduxLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");

const skills = [
  {name: "HTML", logo: "https://skillicons.dev/icons?i=html"},
  {name: "CSS", logo: "https://skillicons.dev/icons?i=css"},
  { name: "JavaScript", logo: JsLogo },
  {name: "PHP", logo: "https://skillicons.dev/icons?i=php"},
  {name: "Dart", logo: "https://skillicons.dev/icons?i=dart"},
  {name: "Bootstrap", logo: "https://skillicons.dev/icons?i=bootstrap"},
  {name: "Laravel", logo: "https://skillicons.dev/icons?i=laravel"},
  {name: "Flutter", logo: "https://skillicons.dev/icons?i=flutter"},
  {name: "SCSS", logo: "https://skillicons.dev/icons?i=scss"},
  {name: "Java", logo: "https://skillicons.dev/icons?i=java"},
  {name: "C++", logo: "https://skillicons.dev/icons?i=cpp"},
  { name: "Firebase", logo: FirebaseLogo },
  { name: "SQL", logo: SqlLogo },
  { name: "MongoDB", logo: MongoDBLogo },
  { name: "Docker", logo: DockerLogo },
];

const About = () => {
  return (
    <div
      id="About"
      className="flex mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
              Saya adalah mahasiswa S1 Informatika di Universitas Sulawesi
                  Barat yang memiliki minat kuat dalam pengembangan web,
                  aplikasi seluler, dan analisis data. Saya aktif terlibat dalam
                  organisasi kemahasiswaan dan telah mengerjakan beberapa proyek
                  teknologi menggunakan Laravel dan Figma. Saat ini, saya sedang
                  fokus untuk meningkatkan keterampilan saya dalam Laravel dan
                  Flutter untuk membangun aplikasi yang bermanfaat dan
                  berdampak.
          </code>
          <br />
          <br />
          <code>Skill Yang Saya Kuasai:</code>
          <List list={skills} />
        </div>
      </div>
    </div>
  );
};

export default About;
