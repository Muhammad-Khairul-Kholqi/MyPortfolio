import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

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

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === parseInt(id));

  if (!project) return <div>Project not found</div>;

  return (
    <>
      <div className="px-[20px]">
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
              <div className="tech-images flex items-center gap-[5px]">
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
              <p>|</p>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:underline">
                <div className="flex gap-[5px] items-center">
                  <FiExternalLink className="text-[16px]" />
                  <p>Live Demo</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-[20px]">
          <img 
            className="max-w-[700px] w-full"
            src={project.image}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
