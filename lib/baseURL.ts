import axios from "axios";

export const backendURL = "http://192.168.0.227:1337/api";

export const baseURL = axios.create({
    baseURL: backendURL,
});