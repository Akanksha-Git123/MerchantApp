import axios from "axios";

const API = axios.create({
  baseURL: "https://merchantapp-1.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

export default API;