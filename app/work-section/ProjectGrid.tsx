import React from "react";
import { devProjects, ProjectProps } from "./projectDetails";
import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  return (
    <>
      <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
        {devProjects.map((project: ProjectProps) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            available={project.available}
            demo={project.demo}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectGrid;
