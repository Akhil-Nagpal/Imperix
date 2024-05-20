import axios from "axios";
import config from "../config/config";

const pexelApi = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: config.accessKey,
  },
});

export default pexelApi;
