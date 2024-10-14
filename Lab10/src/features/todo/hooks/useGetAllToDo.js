import { useState, useEffect } from 'react';
import useLoading from './useLoading';

const useGetAllToDo = () => {
  const {isLoading, setIsLoading} = useLoading();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { isLoading, data, setData };
};

export default useGetAllToDo;
