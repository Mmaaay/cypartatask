// utils/axiosInstance.js

import axios from "axios";

// Create an instance of axios
const axiosInstance = axios.create();

// Set up an interceptor to add the Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the access token from local storage or cookies
    const accessToken = localStorage.getItem("accessToken"); // or get from cookies if stored there

    if (accessToken) {
      // Add the access token to the Authorization header
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    // Handle any errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
