import axios from "axios";
import { apiPath } from "@constants/env";

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
    let user = localStorage.getItem("user") as any;

    user = JSON.parse(user);

    if (user?.token) {
      config.headers.Authorization = `Bearer ${user?.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
