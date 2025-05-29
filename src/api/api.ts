import axios from 'axios';

const apiUrl = process.env.BASE_API_URL;

export const instance = axios.create({
    withCredentials: true,
    baseURL: apiUrl,
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
