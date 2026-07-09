import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../data/projects';
import { useAnimation } from '../contexts/AnimationContext';
import OptimizedImage from './OptimizedImage';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { markAsAnimated, hasBeenAnimated } = useAnimation();

  const delayIndex = index % 8;
  const animationDelay = delayIndex * 100; // milliseconds

  // Check if this project has already been animated
  const alreadyAnimated = hasBeenAnimated(project.id);

  useEffect(() => {
    if (!alreadyAnimated) {
      // Apply staggered animation delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        markAsAnimated(project.id);
      }, animationDelay + 200); // Extra delay for smoother start

      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [project.id, alreadyAnimated, animationDelay, markAsAnimated]);

  return (
    <a
      href={project.projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full transition-[filter] duration-500 hover:[filter:drop-shadow(0_0_10px_rgba(168,85,247,0.35))_drop-shadow(0_0_28px_rgba(126,34,206,0.2))]"
    >
      <div
        ref={cardRef}
        className={`h-full ${isVisible ? 'card-visible' : 'card-hidden'}`}
        style={{
          transitionDelay: alreadyAnimated ? '0ms' : `${animationDelay}ms`,
        }}
      >
        {/* Gradient frame — the 1px padding becomes the neon border */}
        <div className="cyber-clip h-full bg-gradient-to-br from-purple-500/50 via-purple-900/30 to-fuchsia-600/40 p-px transition-colors duration-500 group-hover:from-purple-400/90 group-hover:via-purple-500/40 group-hover:to-fuchsia-400/80">
          <div className="cyber-clip relative flex h-full flex-col overflow-hidden bg-[#0b0613]/95 backdrop-blur-sm">
            {/* Neon accent line sweeping in from the left on hover */}
            <div className="absolute inset-x-0 top-0 z-20 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-fuchsia-500 via-purple-400 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />

            <div className="relative aspect-video overflow-hidden">
              <OptimizedImage
                src={project.imageUrl}
                alt={project.name}
                className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0613] via-black/20 to-transparent" />

              {/* Scanlines overlay */}
              <div className="cyber-scanlines pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Light sweep */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
            </div>

            <div className="flex flex-1 flex-col gap-2 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold tracking-wide text-white transition-colors duration-300 group-hover:text-purple-200">
                  {project.name}
                </h3>
                <span className="pt-1 font-mono text-[10px] tracking-widest text-purple-400/60 transition-colors duration-300 group-hover:text-purple-300">
                  {`//${String(project.id).padStart(2, '0')}`}
                </span>
              </div>

              <p className="line-clamp-3 text-xs font-light leading-relaxed text-gray-400">
                {project.desc}
              </p>

              <div className="mt-auto pt-4">
                <div className="mb-3 h-px w-full bg-gradient-to-r from-purple-500/40 via-purple-500/10 to-transparent transition-colors duration-500 group-hover:from-purple-400/90 group-hover:via-fuchsia-500/30" />
                <span className="cyber-clip-sm inline-block border border-purple-400/40 bg-black/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-purple-200 transition-colors duration-300 group-hover:border-purple-300/80 group-hover:bg-purple-600/40 group-hover:text-white">
                  {project.type === 'website' ? 'Website' : 'Game'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
