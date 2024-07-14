import React, { useEffect, useState } from 'react';
import CardProject from "./cardProject";
import Footer from '../../Template/footer';
// import SearchProject from '../../Utils/searchProject'; 

import schoolImage from '../../Assets/project/school.png';
import GcTools from '../../Assets/project/gc.png';
import Apotek from '../../Assets/project/apotek.png';
import Agenda from '../../Assets/project/agenda.png';
import Box from '../../Assets/project/box-styler.png';
import Portfolio from '../../Assets/project/portfolio.png';
import Pokemon from '../../Assets/project/battle-pokemon.png';

const projectsData = [
  {
    slug: 'web-portfolio',
    title: "Web Portfolio",
    description: "This is my portfolio website.",
    image: Portfolio,
    technology: ["React Js", "Tailwind"],
  },
  {
    slug: 'dynamic-box-styler',
    title: "Dynamic Box Styler",
    description: "Dynamic Box Styler is a project created using DOM Js to make it easier to create a box.",
    image: Box,
    technology: ["Js", "HTML", "CSS"],
  },
  {
    slug: 'gc-tools',
    title: "GC Tools",
    description: "GC Tools is a website designed to make it easier for the frontend to develop its website.",
    image: GcTools,
    technology: ["Tailwind", "React Js", "MySQL", "Express Js"],
  },
  {
    slug: 'apotek-aplication',
    title: "Apotek App",
    description: "Aptek App is a medication management website that I created when learning Laravel.",
    image: Apotek,
    technology: ["Laravel", "Bootstrap", "MySQL"],
  },
  {
    slug: 'daily-agenda',
    title: "Daily Agenda",
    description: "Daily Agenda is a daily agenda website created to organize schedules so that they are organized.",
    image: Agenda,
    technology: ["Php", "Css", "MySQL"],
  },
  {
    slug: 'school-website',
    title: "Web School",
    description: "Web School is a website project that I created as a final semester assignment at school.",
    image: schoolImage,
    technology: ["CSS", "PHP", "MySQL"],
  },
  {
    slug: 'battle-card-pokemon',
    title: "Battle Card Pokemon",
    description: "Battle Card Pokemon is a very simple game where the winning card is determined by the largest number.",
    image: Pokemon,
    technology: ["HTML", "CSS", "JS"],
  },
];

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 4; // Number of projects to display per page

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate the current projects to display
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

    // Calculate total pages
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <div className="pb-[20px] mt-[25px]">
                <p className="text-[24px]">Projects</p>
                <p className="text-[16px] text-[#525252]">Showcasing my passion for technology, design, and problem-solving through code.</p>
            </div>

            <hr className="border-t border-dashed border-gray-500" />

            <p className="text-[16px] text-[#525252] mt-[20px]">Total Projects: {projectsData.length}</p>

            {/* <div className="mt-[20px]">
              <SearchProject setSearchQuery={setSearchQuery} />
            </div> */}

            <div className="project-list flex gap-[20px] flex-wrap justify-start">
                {currentProjects.map((project) => (
                    <CardProject key={project.slug} project={project} />
                ))}
            </div>

            <div className="flex mt-[20px]">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 mx-2 border rounded disabled:opacity-50 hover:shadow"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 mx-2 border rounded disabled:opacity-50 hover:shadow"
                >
                    Next
                </button>
            </div>

            <div className="mt-[50px]">
                <Footer />
            </div>
        </>
    );
};

export default Project;
