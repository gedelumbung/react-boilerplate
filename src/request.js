import axios from 'axios';
const isDev = process.env.NODE_ENV !== 'production';

export function getApiHost() {
  if (isDev) {
    return 'http://localhost:4000';
  }
}

export default function api() {
  const request = axios.create({
    baseURL: getApiHost(),
    headers: {
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, PATCH',
    },
  });
  request.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      throw error;
    }
  );
  return request;
}
