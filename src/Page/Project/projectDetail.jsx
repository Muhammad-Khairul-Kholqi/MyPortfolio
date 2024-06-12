import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import ProjectsData from "./projectsData.jsx";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = ProjectsData.find((project) => project.id === parseInt(id));

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
      </div>

      <div className="project-detail">
        <img src={project.image} alt={project.title} />
        <div className="links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
        </div>
        <div className="tech-images">
          {project.techImages.map((image, index) => (
            <img key={index} src={image} alt={`tech ${index}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
