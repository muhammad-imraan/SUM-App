import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:9000',
    headers: {
        "Content-Type": "application/json",
    }
})

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        // You can add authorization headers or other custom headers here
        const token = 'your-json-web-token'; // Replace with your actual JWT token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: any) => {
        return Promise.reject(error);
    }
)

export default axiosInstance