const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const ApiRoutes = {
  houses: '',
};

const ServiceApi = {
  apiUrl: API_URL,
  fetchData: async (url: string): Promise<unknown> => {
    const response = await fetch(`${API_URL}${url}`);
    if (!response.ok) throw new Error('');
    const data = response.json();
    return { data };
  },
};

export { ApiRoutes, ServiceApi };
