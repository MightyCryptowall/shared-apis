import axios from "axios";

export const backendURL = "http://localhost:1337/api";

export const baseURL = axios.create({
    baseURL: backendURL,
});