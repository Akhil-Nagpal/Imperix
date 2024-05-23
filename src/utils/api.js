import axios from "axios";
import config from "../config/config";

export const pexelApi = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: config.accessKey,
  },
});

export const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${config.unsplashAccessKey}`,
  },
});
