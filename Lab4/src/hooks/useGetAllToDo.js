import { useState, useEffect } from 'react';
import useLoading from '../hooks/useLoading';

const useGetAllToDo = () => {
  const {isLoading, setIsLoading} = useLoading();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, data, error, setData };
};

export default useGetAllToDo;
