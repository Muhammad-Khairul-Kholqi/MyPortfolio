import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardProject from "./cardProject"
import ProjectsData from "./projectsData.jsx";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(ProjectsData);
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
    </>
  );
};

export default Project;
