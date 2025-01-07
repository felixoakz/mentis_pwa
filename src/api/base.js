import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default apiClient;
