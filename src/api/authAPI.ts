import { DefaultResponse, instance } from './api';

export type User = {
    surname: string;
    name: string;
    patronymic: string | null;
    photo: string | null;
};

export type RegistrationParams = {
    login: string;
    password: string;
    surname: string;
    name: string;
    patronymic: string | null;
    photo: string | null;
};

export const authAPI = {
    async login(login: string, password: string) {
        const response = await instance.post<
            DefaultResponse<{
                token: string;
                user: User;
            }>
        >('/login', { login, password });
        return response.data;
    },

    async registration({
        login,
        password,
        surname,
        name,
        patronymic,
        photo,
    }: RegistrationParams) {
        const response = await instance.post<
            DefaultResponse<{
                token: string;
                user: User;
            }>
        >('/registration', {
            login,
            password,
            surname,
            name,
            patronymic,
            photo,
        });
        return response.data;
    },
};
