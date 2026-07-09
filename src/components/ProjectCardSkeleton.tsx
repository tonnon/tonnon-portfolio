import React from 'react';

const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="cyber-clip h-full animate-pulse bg-gradient-to-br from-purple-500/30 via-purple-900/20 to-fuchsia-600/20 p-px">
      <div className="cyber-clip flex h-full flex-col bg-[#0b0613]/95">
        <div className="aspect-video bg-purple-900/30" />
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="h-5 w-3/4 rounded bg-purple-800/50" />
            <div className="h-3 w-8 rounded bg-purple-800/30" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-full rounded bg-purple-800/30" />
            <div className="h-3 w-full rounded bg-purple-800/30" />
            <div className="h-3 w-2/3 rounded bg-purple-800/30" />
          </div>
          <div className="mt-auto pt-4">
            <div className="mb-3 h-px w-full bg-purple-500/20" />
            <div className="h-6 w-20 rounded bg-purple-800/40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
