import axios from "axios";

import { API_URL } from "@env";

const request = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const http = {
  post: async <T>(url: string, data: any) => {
    const result = await request.post<T>(url, data);
    return result;
  }
}

export { http };
