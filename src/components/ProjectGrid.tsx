import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '@/data/projects';

interface ProjectGridProps {
  projects: Project[];
}

const getColumnCount = (width: number) => {
  if (width >= 1280) return 4;
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
};

const useColumnCount = () => {
  const [count, setCount] = useState(() => getColumnCount(window.innerWidth));

  useEffect(() => {
    const onResize = () => setCount(getColumnCount(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return count;
};

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const columnCount = useColumnCount();

  // Round-robin split keeps each card in a fixed column, so loading more
  // projects appends at the bottom instead of reshuffling the columns
  const columns = Array.from({ length: columnCount }, (_, col) =>
    projects
      .map((project, index) => ({ project, index }))
      .filter(({ index }) => index % columnCount === col)
  );

  return (
    <div className="mx-auto flex w-full max-w-[1700px] items-start gap-6 px-5 py-8 md:px-8 xl:gap-7">
      {columns.map((column, col) => (
        <div key={col} className="flex min-w-0 flex-1 flex-col gap-6 xl:gap-7">
          {column.map(({ project, index }) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
