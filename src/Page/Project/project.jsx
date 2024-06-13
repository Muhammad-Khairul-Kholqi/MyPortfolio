import React, { useEffect, useState } from 'react';
import CardProject from "./cardProject";
import Footer from '../../Template/footer';

import schoolImage from '../../Assets/project/school.png';
import OnlineShop from '../../Assets/project/shop.png';
import GcTools from '../../Assets/project/gc.png';
import Chiken from '../../Assets/project/chiken.png';
import Apotek from '../../Assets/project/apotek.png';
import Agenda from '../../Assets/project/agenda.png';
import Box from '../../Assets/project/box-styler.png';

import Css from '../../Assets/skills/css.png';
import Php from '../../Assets/skills/php.png';
import Mysql from '../../Assets/skills/mysql.png';
import Js from '../../Assets/skills/js.png';
import Tailwind from '../../Assets/skills/tailwind.png';
import ReactJs from '../../Assets/skills/react.png';
import Express from '../../Assets/skills/express.png';
import Vue from '../../Assets/skills/vue.png';
import Laravel from '../../Assets/skills/laravel.png';
import Bootstrap from '../../Assets/skills/bootstrap.png';
import Html from '../../Assets/skills/html.png';

const projectsData = [
  {
    id: 1,
    title: "Web School",
    description: "Web School is a website project that I created as a final semester assignment at school.",
    image: schoolImage,
    technology: ["CSS", "PHP", "MySQL"],
    github: "https://github.com/Muhammad-Khairul-Kholqi/WebsiteSchool",
    demo: "",
    techImages: [
      Css,
      Php,
      Mysql
    ]
  },

  {
    id: 2,
    title: "Dynamic Box Styler",
    description: "Dynamic Box Styler is a project created using DOM Js to make it easier to create a box.",
    image: Box,
    technology: ["Js", "HTML", "CSS"],
    github: "https://github.com/Muhammad-Khairul-Kholqi/DynamicBoxStyler",
    demo: "",
    techImages: [
      Js,
      Html,
      Css
    ]
  },

  {
    id: 3,
    title: "GC Tools",
    description: "GC Tools is a website designed to make it easier for the frontend to develop its website.",
    image: GcTools,
    technology: ["Tailwind", "React Js", "MySQL", "Express Js"],
    github: "https://github.com/Muhammad-Khairul-Kholqi/ApkTools",
    demo: "https://gc-tools.vercel.app/",
    techImages: [
      Tailwind,
      ReactJs,
      Mysql,
      Express
    ]
  },

  {
    id: 4,
    title: "Waroeng Sawaregna",
    description: "Waroeng Sawargena is an online food website that I created when learning Vue JS.",
    image: Chiken,
    technology: ["Vue Js", "Css", "Laravel"],
    github: "https://github.com/Muhammad-Khairul-Kholqi/WaroengSawaregnaVue",
    demo: "",
    techImages: [
      Vue,
      Css,
      Laravel
    ]
  },

  {
    id: 5,
    title: "Apotek App",
    description: "Aptek App is a medication management website that I created when learning Laravel.",
    image: Apotek,
    technology: ["Laravel", "Bootstrap", "MySQL"],
    github: "https://github.com/Muhammad-Khairul-Kholqi/ApotekApp",
    demo: "",
    techImages: [
      Laravel,
      Bootstrap,
      Mysql
    ]
  },

  {
    id: 6,
    title: "Daily Agenda",
    description: "Daily Agenda is a daily agenda website created to organize schedules so that they are organized.",
    image: Agenda,
    technology: ["Php", "Css", "MySQL"],
    github: "https://github.com/Muhammad-Khairul-Kholqi/Agenda-Harian",
    demo: "",
    techImages: [
      Php,
      Css,
      Mysql
    ]
  },

  {
    id: 7,
    title: "Shop Urban Outfitters",
    description: "Shop Urban Outfitters is a simple online shop website.",
    image: OnlineShop,
    technology: ["CSS", "PHP", "MySQL", "Js"],
    github: "https://github.com/Muhammad-Khairul-Kholqi/Shop-Urban",
    demo: "",
    techImages: [
      Css,
      Php,
      Mysql,
      Js
    ]
  },
];

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <>
        <div className="pb-[20px]">
            <p className="text-[24px]">Projects</p>
            <p className="text-[16px] text-[#525252]">Showcasing my passion for technology, design, and problem-solving through code.</p>
        </div>

        <hr className="border-t border-dashed border-gray-500" />

        <div className="project-list flex flex-wrap justify-start">
        {projects.map((project) => (
            <CardProject key={project.id} project={project} />
        ))}
        </div>
        <div className="mt-[50px]">  
          <Footer />
        </div>
    </>
  );
};

export default Project;
