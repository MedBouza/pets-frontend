// Replace this with our own backend base URL
import axios, { HeadersDefaults } from "axios";
import { toast } from "react-toastify";

const axiosClient = axios.create();

// Replace this with our own backend base URL
axiosClient.defaults.baseURL = "http://localhost:1337/";

type headers = {
  "Content-Type": string;
  Accept: string;
  Authorization: string;
};
//@ts-ignore
axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
} as headers & HeadersDefaults;

// Adding Authorization header for all requests

axiosClient.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      // Configure this as per your backend requirements
      request.headers!["Authorization"] = token;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    // Access Token was expired
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;

      try {
        const rs = await axios.post("http://localhost:1337/refresh", {
          headers: {
            Authorization: localStorage.getItem("refresh-token")!,
          },
        });

        const access = rs.data.accessToken;
        const refresh = rs.data.refreshToken;

        localStorage.setItem("access-token", access);
        localStorage.setItem("refresh-token", refresh);

        return axiosClient(originalConfig);
      } catch (_error) {
        toast.error("Session time out. Please login again.");
        // Logging out the user by removing all the tokens from local
        localStorage.removeItem("access-token");
        localStorage.removeItem("refresh-token");
        // Redirecting the user to the landing page
        window.location.href = window.location.origin;
        return Promise.reject(_error);
      }
    }

    return Promise.reject(err);
  }
);

export default axiosClient;
