import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "x-device-type": "web",
    Authorization: `Bearer ${API_TOKEN}`,
  },
});
