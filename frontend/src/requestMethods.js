import axios from "axios";
const LocalBASE_URL="http://localhost:8001/api/";
const BASE_URL = "http://localhost:8001/api/";

export const pf="http://localhost:8001/api/images";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});