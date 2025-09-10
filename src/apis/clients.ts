import axios from 'axios';

const client = axios.create({
  baseURL: 'http://43.200.175.33:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use((request) => {
  return request;
});

client.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401)
      window.location.href = '/';
    return Promise.reject(error);
  }
);

export default client;
