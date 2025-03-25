
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

  // Filter data based on the filter type
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
    setCount(initialCount); // Reset count when filter changes
  }, [data, filter, initialCount]);

  // Update displayed data based on count
  useEffect(() => {
    setDisplayedData(filteredData.slice(0, count));
  }, [filteredData, count]);

  // Check if we're at the end of the data
  const hasMore = count < filteredData.length;

  // Handle scroll
  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop + 300 >= document.documentElement.offsetHeight) {
      if (hasMore) {
        setCount(prevCount => Math.min(prevCount + increment, filteredData.length));
      }
    }
  }, [hasMore, increment, filteredData.length]);

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { displayedData, hasMore };
};

export default useInfiniteScroll;
