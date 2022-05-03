import axios from "axios";
import { getToken, logout } from "./auth";

const Api = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
    withCredentials: false,
});

Api.interceptors.request.use((config) => {
    const token = getToken();
    config.headers = {
        "x-access-token": `${token}`,
    };
    return config;
});



export default Api;
