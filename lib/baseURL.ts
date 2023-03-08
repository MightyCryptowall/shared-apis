import axios from "axios";

export const backendURL = "http://192.168.99.9:1337/api";
export const baseURL = axios.create({
    baseURL: backendURL,
});

export default baseURL;

