import { ResponseStatuses } from '../../api/api';
import { authAPI } from '../../api/authAPI';
import { BaseThunk } from '../store';
import { actions, Actions } from './authReducer';

type RegistrationParams = {
    login: string;
    password: string;
    surname: string;
    name: string;
    patronymic: string | null;
    photo: string | null;
};

export const login =
    (login: string, password: string): BaseThunk<Actions> =>
    async (dispatch) => {
        const response = await authAPI.login(login, password);
        if (response.status === ResponseStatuses.OK) {
            dispatch(actions.login(response.data.token, response.data.user));
            localStorage.setItem('token', response.data.token);
        } else {
            dispatch(actions.setError(response.message[0]));
        }
    };

export const registration =
    ({
        login,
        password,
        surname,
        name,
        patronymic,
        photo,
    }: RegistrationParams): BaseThunk<Actions> =>
    async (dispatch) => {
        const response = await authAPI.registration(
            login,
            password,
            surname,
            name,
            patronymic,
            photo,
        );
        if (response.status === ResponseStatuses.OK) {
            dispatch(actions.login(response.data.token, response.data.user));
        } else {
            dispatch(actions.setError(response.message[0]));
        }
    };
