import React, { useEffect, useState } from 'react';
import CardProject from "./cardProject";

import schoolImage from '../../Assets/project/school.png';
import githubImage from '../../Assets/skills/github.png';

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit nam esse at? Ipsam, perferendis.",
    image: schoolImage,
    technology: ["React", "Node.js"],
    github: "https://github.com/user/project1",
    demo: "https://project1.demo",
    techImages: [
      githubImage,
      githubImage
    ]
  },
  {
    id: 2,
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit nam esse at? Ipsam, perferendis.",
    image: schoolImage,
    technology: ["Vue", "Firebase"],
    github: "https://github.com/user/project2",
    demo: "https://project2.demo",
    techImages: [
      githubImage,
      githubImage
    ]
  }
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
    </>
  );
};

export default Project;
