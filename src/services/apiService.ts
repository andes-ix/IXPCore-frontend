import axios from "axios";
import { apiPath } from "../constants/env";

export const apiClient = axios.create({
  baseURL: apiPath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiClientWithAuth = axios.create({
  baseURL: apiPath,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClientWithAuth.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token") as any;

    token = JSON.parse(token);

    if (token) {
      config.headers.Authorization = `token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
