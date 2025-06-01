import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ProjectGrid from '@/components/ProjectGrid';
import StarBackground from '@/components/StarBackground';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { projects } from '@/data/projects';
import Blackhole from '@/components/Blackhole';

const Index: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  const { displayedData: displayedProjects, hasMore } = useInfiniteScroll({
    data: projects,
    initialCount: 6,
    increment: 6,
    filter: activeFilter,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      <StarBackground />
      
      <Navbar 
        activeFilter={activeFilter} 
        setActiveFilter={setActiveFilter}
      />
      <Blackhole/>
      
      <main className="pt-40 pb-20 w-full mx-auto">
        <div className="space-y-10">
          <section>
            <ProjectGrid projects={displayedProjects} />
            
            {hasMore && (
              <div className="flex justify-center mt-12">
                <div className="w-16 h-1 bg-purple-700/50 rounded-full animate-pulse-slow" />
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
