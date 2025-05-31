import { RegistrationParams } from '../../api/authAPI';
import { BaseThunk } from '../store';
import { actions, Actions } from './authReducer';

export const login =
    (login: string, password: string): BaseThunk<Actions> =>
    async (dispatch) => {
        // const response = await authAPI.login(login, password);
        // if (response.status === ResponseStatuses.OK) {
        //     dispatch(actions.login(response.data.token, response.data.user));
        //     localStorage.setItem('token', response.data.token);
        // } else {
        //     dispatch(actions.setError(response.message[0]));
        // }
        // Для тестирования сообшения об ошибке
        // dispatch(actions.setError('Неверный логин или пароль'));
        dispatch(actions.setError(''));
        dispatch(
            actions.login('13420593202', {
                surname: 'Иванов',
                name: 'Иван',
                patronymic: 'Иванович',
                photo: 'https://i.pravatar.cc/300?img=1',
            }),
        );
    };

export const logout = (): BaseThunk<Actions> => async (dispatch) => {
    localStorage.removeItem('token');
    dispatch(actions.logout());
};

export const registration =
    (user: RegistrationParams): BaseThunk<Actions> =>
    async (dispatch) => {
        // const response = await authAPI.registration({...user});
        // if (response.status === ResponseStatuses.OK) {
        //     dispatch(actions.login(response.data.token, response.data.user));
        // } else {
        //     dispatch(actions.setError(response.message[0]));
        // }

        // Для тестирования сообшения об ошибке
        // dispatch(actions.setError('Ошибка при регистрации'));

        dispatch(actions.setError(''));
        dispatch(
            actions.login('13420593202', {
                surname: 'Иванов',
                name: 'Иван',
                patronymic: 'Иванович',
                photo: 'https://i.pravatar.cc/300?img=1',
            }),
        );
    };
