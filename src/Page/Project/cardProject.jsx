import React from 'react';
import { Link } from 'react-router-dom';

const CardProject = ({ project }) => {
  return (
    <div className="mt-[40px] px-[20px]">
      <Link to={`/project/${project.slug}`}>
        <div className="border rounded-[10px] hover:scale-105 duration-500 hover:shadow text-[#404040]">
          <div className="border-b">
            <img
              src={project.image}
              className="max-w-[340px] w-full duration-500 rounded-t-[10px]"
              alt={project.title}
            />
          </div>
          <div className="p-[15px]">
            <p className="text-[16px] font-semibold max-w-[300px] w-full capitalize">
              {project.title}
            </p>
            <p className="deksripsi-project max-w-[300px] w-full mt-[8px] text-[13px]">
              {project.description.split(" ").slice(0, 12).join(" ") + "..."}
            </p>
            <div className="flex items-center justify-start gap-[5px] flex-wrap mt-[20px] text-[13px] font-medium">
              {project.technology.map((tech, index) => (
                <React.Fragment key={index}>
                  <span>{tech}</span>
                  {index !== project.technology.length - 1 && <div className="bg-black p-[2px] rounded-[100%]" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProject;
