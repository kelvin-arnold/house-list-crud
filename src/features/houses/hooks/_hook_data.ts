import { useState } from 'react';
import { ApiHomeService } from '../services';
import { House } from '../types';

type UseFetchData = {
  data: House[];
  loading: boolean;
  error: Error | null;
  fecthData: (endpoint: string) => Promise<void>;
};

const useFetchData = (): UseFetchData => {
  const [data, setData] = useState<House[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchApiData = async (endpoint: string) => {
    setLoading(true);
    try {
      const response = await ApiHomeService.fetchData(endpoint);
      setData(response.data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fecthData: fetchApiData,
  };
};

export { useFetchData };
