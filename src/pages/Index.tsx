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

  const handleFilterChange = (newFilter: string) => {
    if (newFilter !== activeFilter) {
      setActiveFilter(newFilter);
    }
  };

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
        setActiveFilter={handleFilterChange}
      />
      <Blackhole/>
      
      <main className="pt-40 pb-20 w-full mx-auto">
        <div className="space-y-10">
          <section className="transition-opacity duration-500">
            <ProjectGrid projects={displayedProjects} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
