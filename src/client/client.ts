import axios from "axios";

export const client = axios.create({ baseURL: "http://localhost:8000/" });
export const geocode = axios.create({
  baseURL: `https://api.geoapify.com/v1/geocode/reverse`,
});

export const userClient = axios.create({ baseURL: "http://localhost:5000/" });
