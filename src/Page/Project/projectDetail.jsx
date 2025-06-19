import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import NotFound from '../../Template/notFound';

import schoolImage from '../../Assets/project/school.png';
import GcTools from '../../Assets/project/gc.png';
import Apotek from '../../Assets/project/apotek.png';
import Agenda from '../../Assets/project/agenda.png';
import Box from '../../Assets/project/box-styler.png';
import Portfolio from '../../Assets/project/portfolio.png';
import Pokemon from '../../Assets/project/battle-pokemon.png';
import Ppob from '../../Assets/project/ppob.jpeg';
import Marketplace from '../../Assets/project/marketplace.jpeg';

import Css from '../../Assets/skills/css.png';
import Php from '../../Assets/skills/php.png';
import Mysql from '../../Assets/skills/mysql.png';
import Js from '../../Assets/skills/js.png';
import Tailwind from '../../Assets/skills/tailwind.png';
import ReactJs from '../../Assets/skills/react.png';
import Express from '../../Assets/skills/express.png';
import Laravel from '../../Assets/skills/laravel.png';
import Bootstrap from '../../Assets/skills/bootstrap.png';
import Html from '../../Assets/skills/html.png';

const projectsData = [
  {
    slug: 'web-portfolio',
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
    slug: 'dynamic-box-styler',
    title: "Dynamic Box Styler",
    description: "Dynamic Box Styler is a project created using DOM Js to make it easier to create a box.",
    image: Box,
    technology: ["Js", "HTML", "CSS"],
    github: "https://github.com/Muhammad-Khairul-Kholqi/DynamicBoxStyler",
    demo: "https://dynamic-box-styler.vercel.app/",
    techImages: [
      Js,
      Html,
      Css
    ]
  },

  {
    slug: 'gc-tools',
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
    slug: 'apotek-aplication',
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
    slug: 'daily-agenda',
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
    slug: 'school-website',
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
    slug: 'battle-card-pokemon',
    title: "Battle Card Pokemon",
    description: "Battle Card Pokemon is a very simple game where the winning card is determined by the largest number.",
    image: Pokemon,
    technology: ["HTML", "CSS", "JS"],
    github: "https://github.com/Muhammad-Khairul-Kholqi/BattleCardPokemon",
    demo: "https://battle-card-pokemon.vercel.app/",
    techImages: [
      Html,
      Css,
      Js
    ]
  },

  {
    slug: 'ppob-dypedia',
    title: "PPOB Dypedia",
    description: "At Digital Youth Technology, I developed a PPOB website using React JS, including the super admin page, landing page, and various key features.In addition to designing the UI/ UX from the research stage to prototyping in Figma, I also collaborated with the backend team to ensure data integration and system performance ran optimally.",
    image: Ppob,
    technology: ["React JS", "Tailwind", "Express JS"],
    techImages: [
      Tailwind,
      ReactJs,
      Express
    ]
  },

  {
    slug: 'marketplace-website-for-medicines',
    title: "Marketplace Website For Medicines",
    description: "In a joint project with the Ministry of Health, I developed a marketplace website for medicines by building admin, super admin, and landing pages using Laravel. I also designed the UI/UX from user research to prototyping in Figma, and collaborated closely with the backend team to ensure the system ran optimally and met user needs.",
    image: Marketplace,
    technology: ["Laravel", "Tailwind", "MySql"],
    demo: "https://marketplace.casatech.id/",
    techImages: [
      Tailwind,
      Laravel,
      Mysql
    ]
  },
];

const ProjectDetail = () => {
  AOS.init();
  const { slug } = useParams(); 
  const project = projectsData.find((project) => project.slug === slug);

  if (!project) return <NotFound />;

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
