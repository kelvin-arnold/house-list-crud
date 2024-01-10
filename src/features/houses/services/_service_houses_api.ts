import { DataFetchHouse } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const ApiHomeService = {
  apiUrl: API_URL,
  fetchData: async (url: string): Promise<DataFetchHouse> => {
    const response = await fetch(`${API_URL}${url}`);
    if (!response.ok) throw new Error('');
    const data = await response.json();
    return { data };
  },
};

export { ApiHomeService };
