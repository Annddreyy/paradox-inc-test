import axios from 'axios';

const apiUrl = process.env.BASE_API_URL;

export const instance = axios.create({
    withCredentials: true,
    baseURL: apiUrl,
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export enum ResponseStatuses {
    OK = 200,
    NOT_FOUND = 404,
    SERVER_ERROR = 500,
}

export type DefaultResponse<T> = {
    status: ResponseStatuses;
    message: string[]; // Дополнительная информация об ошибке
    data: T;
};
