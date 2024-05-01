import axios, { AxiosResponse } from "axios";


type Post = {
  request_index: string
}

const SERVER_API_URL = 'http://localhost:3000';
const ROUTE_API_URL = '/api';

const apiAxios = axios.create({
  baseURL: SERVER_API_URL,
  headers: {
  },
  withCredentials: true,
});

export const getResponse = async (request_index: string): Promise<AxiosResponse<Post>> => {
  const res = await apiAxios.post<Post>(ROUTE_API_URL,
    {
      id: request_index
    }, {
    params: { offset: 0 },
    }
  )
  return res ?? '';
}