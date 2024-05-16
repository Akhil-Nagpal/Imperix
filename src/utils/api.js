import axios from "axios";
import config from "../config/config";

const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${config.accessKey}`,
  },
});

export default unsplashApi;
