
import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Animation delay based on index
  const animationDelay = `${(index % 6) * 0.1}s`;

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = project.imageUrl;
    img.onload = () => setImageLoaded(true);
  }, [project.imageUrl]);

  return (
    <a href={project.projectUrl} target='__blank'>
      <div 
        ref={cardRef} 
        className={`rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] bg-black/30 relative`}
        style={{ 
          opacity: 0, 
          animation: `fadeIn 0.6s ease-out ${animationDelay} forwards`,
          boxShadow: isHovered 
            ? '0 0 10px 3px rgba(138, 43, 226, 0.6), 0 0 15px 5px rgba(147, 112, 219, 0.3), inset 0 0 5px rgba(147, 112, 219, 0.2)' // Smaller glow
            : 'none',
          transition: 'box-shadow 0.4s ease-in, transform 0.3s ease-in-out' // Added ease-in
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Neon border overlay - only visible on hover */}
        <div 
          className={`absolute inset-0 rounded-lg pointer-events-none z-10 transition-opacity duration-400`}
          style={{
            opacity: isHovered ? 1 : 0,
            borderColor: 'rgba(138, 43, 226, 0.7)',
            borderWidth: '1px', // Thinner border
            boxShadow: 'inset 0 0 8px rgba(138, 43, 226, 0.4)', // Smaller inner glow
            transition: 'opacity 0.4s ease-in' // Ease in
          }}
        />
        
        <div className="relative aspect-video overflow-hidden">
          {/* Blurred placeholder */}
          <div 
            className={`absolute inset-0 bg-purple-900/30 backdrop-blur-md transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}
          />
          
          {/* Actual image */}
          <img 
            src={project.imageUrl}
            alt={project.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-medium text-white truncate">{project.name}</h3>
          <span 
            className={`inline-block mt-2 px-3 py-1 text-xs rounded-full text-purple-200 transition-all duration-300 ${
              isHovered 
                ? 'bg-purple-700/70 shadow-[0_0_5px_rgba(138,43,226,0.5)]' // Smaller shadow 
                : 'bg-purple-900/50'
            }`}
          >
            {project.type === 'website' ? 'Website' : 'Game'}
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
