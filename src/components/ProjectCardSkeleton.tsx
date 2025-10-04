import React from 'react';

const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-lg overflow-hidden bg-black/30 animate-pulse">
      <div className="relative aspect-video bg-purple-900/30" />
      <div className="p-4 space-y-3">
        <div className="h-5 bg-purple-800/50 rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-3 bg-purple-800/30 rounded w-full" />
          <div className="h-3 bg-purple-800/30 rounded w-2/3" />
        </div>
        <div className="h-6 bg-purple-800/50 rounded-full w-16" />
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
