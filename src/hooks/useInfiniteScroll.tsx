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
    setDisplayedData(filteredData.slice(0, count));
  }, [filteredData, count]);

  const hasMore = count < filteredData.length;

  const handleScroll = useCallback(() => {
    if (
      !isLoading &&
      window.innerHeight + document.documentElement.scrollTop + 500 >= document.documentElement.offsetHeight
    ) {
      if (hasMore) {
        setIsLoading(true);
        setTimeout(() => {
          setCount(prevCount => Math.min(prevCount + increment, filteredData.length));
          setIsLoading(false);
        }, 300);
      }
    }
  }, [hasMore, increment, filteredData.length, isLoading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { displayedData, hasMore, isLoading };
};

export default useInfiniteScroll;
