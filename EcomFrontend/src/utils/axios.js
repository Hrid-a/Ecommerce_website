import axios from "axios";

export const req = axios.create(
    {
        baseURL: import.meta.env.VITE_ECOM_BACKEND_URL,
        withCredentials: true,

    },
);