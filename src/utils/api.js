import axios from "axios";

const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xDo4rGF67NtuhvsNp7gu5Lbh38rnFIU8YKvWl30I6U4",
  },
});

export default unsplashApi;
