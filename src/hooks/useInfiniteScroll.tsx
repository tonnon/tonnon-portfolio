import { useState, useEffect, useCallback } from 'react';
import { Project } from '@/data/projects';

interface UseInfiniteScrollProps {
  data: Project[];
  initialCount: number;
  increment: number;
  filter?: string;
}

const useInfiniteScroll = ({
  data,
  initialCount,
  increment,
  filter,
}: UseInfiniteScrollProps) => {
  const [count, setCount] = useState(initialCount);
  const [filteredData, setFilteredData] = useState<Project[]>([]);
  const [displayedData, setDisplayedData] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let result;
    if (filter === 'Websites') {
      result = data.filter(item => item.type === 'website');
    } else if (filter === 'Jogos') {
      result = data.filter(item => item.type === 'game');
    } else {
      result = [...data];
    }
    
    setFilteredData(result);
    setCount(initialCount);
  }, [data, filter, initialCount]);

  useEffect(() => {
    if (filteredData.length > 0) {
      setDisplayedData(filteredData.slice(0, count));
    }
  }, [filteredData, count]);

  const hasMore = count < filteredData.length;

  const handleScroll = useCallback(() => {
    if (
      !isLoading && 
      hasMore &&
      window.innerHeight + document.documentElement.scrollTop + 400 >= document.documentElement.offsetHeight
    ) {
      setIsLoading(true);
      
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        setCount(prevCount => Math.min(prevCount + increment, filteredData.length));
        setIsLoading(false);
      });
    }
  }, [hasMore, increment, filteredData.length, isLoading]);

  useEffect(() => {
    let ticking = false;
    
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  return { displayedData, hasMore, isLoading };
};

export default useInfiniteScroll;
