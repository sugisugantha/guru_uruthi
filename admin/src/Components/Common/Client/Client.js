import axios from "axios";

//client

const client = axios.create({
  // baseURL: "http://localhost:8000",

  baseURL: "https://guru-uruthi-backend-five.vercel.app",

});

export default client;
