import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import schoolImage from '../../Assets/project/school.png';
import OnlineShop from '../../Assets/project/shop.png';
import GcTools from '../../Assets/project/gc.png';
import Chiken from '../../Assets/project/chiken.png';
import Apotek from '../../Assets/project/apotek.png';
import Agenda from '../../Assets/project/agenda.png';
import Box from '../../Assets/project/box-styler.png';
import Portfolio from '../../Assets/project/portfolio.png';
import Aksara from '../../Assets/project/aksara.png';

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
    title: "Web Portfolio",
    description: "This is my portfolio website.",
    image: Portfolio,
    technology: ["React Js", "Tailwind"],
    github: "https://github.com/Muhammad-Khairul-Kholqi/MyPortfolio",
    demo: "https://irulsss.vercel.app/",
    techImages: [
      ReactJs,
      Tailwind,
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

  {
    id: 8,
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
    id: 9,
    title: "Aksara Pelajar",
    description: "Aksara Pelajar is a website for teachers and students to manage attendance, assignments, and other academic activities",
    image: Aksara,
    technology: ["Laravel", "Tailwind", "MySQL"],
    github: "https://github.com/Muhammad-Khairul-Kholqi/AksaraPelajar",
    demo: "",
    techImages: [
      Laravel,
      Tailwind,
      Mysql
    ]
  },
];

const ProjectDetail = () => {
  AOS.init();
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === parseInt(id));

  if (!project) return <div>Project not found</div>;

  return (
    <>
      <div 
        className="px-[20px]"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <Link to="/project">
          <div className="flex items-center gap-[5px] justify-center mt-[50px]">
            <IoArrowBackCircleOutline className="text-[#525252] text-[18px]" />
            <p className="text-start max-w-[680px] w-full text-[16px] text-[#525252]">Back</p>
          </div>
        </Link>

        <div className="flex justify-center mt-[15px]">
          <h1 className="text-start max-w-[700px] w-full text-[20px]">{project.title}</h1>
        </div>
        <div className="flex justify-center mt-[10px]">
          <p className="text-start max-w-[700px] w-full text-[#525252] text-[14px]">{project.description}</p>
        </div>

        <hr className="max-w-[700px] border-dashed border-black mx-auto my-[20px]" />

        <div className="flex justify-center">
          <div className="w-[700px] flex gap-[20px] flex-wrap justify-between items-center">
            <div className="flex gap-[5px] items-center">
              <div>
                <p>Tech Stack:</p>
              </div>
              <div className="tech-images flex items-center gap-[15px]">
                {project.techImages.map((image, index) => (
                  <img 
                    className="w-[20px]" 
                    key={index} 
                    src={image} 
                    alt={`tech ${index}`}
                  />
                ))}
              </div>
            </div>
            <div className="links flex gap-[10px] text-[14px]">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                <div className="flex gap-[5px] items-center">
                  <FaGithubAlt className="text-[16px]" />
                  <p>Source Code</p>
                </div>
              </a>
              {project.demo && (
                <>
                  <p>|</p>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <div className="flex gap-[5px] items-center">
                      <FiExternalLink className="text-[16px]" />
                      <p>Live Demo</p>
                    </div>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-[20px]">
          <img 
            className="max-w-[700px] w-full shadow-lg border rounded-[10px]"
            src={project.image}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
