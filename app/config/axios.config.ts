import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers.common["X-Frame-Options"] = "sameorigin";

axios.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      //
    }
    return response;
  },
  (error) => {
    return new Promise((_, reject) => {
      reject(error);
    });
  }
);
