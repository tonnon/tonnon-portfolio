import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '@/data/projects';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="mx-auto grid w-full max-w-[1700px] grid-cols-1 items-stretch gap-6 px-5 py-8 sm:grid-cols-2 md:px-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-7">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectGrid;
