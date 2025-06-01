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
    if (window.innerHeight + document.documentElement.scrollTop + 300 >= document.documentElement.offsetHeight) {
      if (hasMore) {
        setCount(prevCount => Math.min(prevCount + increment, filteredData.length));
      }
    }
  }, [hasMore, increment, filteredData.length]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { displayedData, hasMore };
};

export default useInfiniteScroll;
