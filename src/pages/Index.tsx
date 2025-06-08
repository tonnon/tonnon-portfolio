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
  
  const { displayedData: displayedProjects, hasMore, isLoading } = useInfiniteScroll({
    data: projects,
    initialCount: 8,
    increment: 8,
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
            
            {(hasMore || isLoading) && (
              <div className="flex justify-center mt-12">
                <div 
                  className={`w-20 h-1 bg-purple-700/50 rounded-full ${isLoading ? 'animate-pulse' : 'animate-pulse-slow'}`} 
                  style={{ 
                    boxShadow: isLoading ? '0 0 8px 2px rgba(138, 43, 226, 0.5)' : 'none' 
                  }}
                />
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
