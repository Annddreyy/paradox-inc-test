import { User } from '../../../api/authAPI';
import { actions, authReducer } from '../../../redux/auth/authReducer';
import { InferActions } from '../../../redux/store';

const initialState = {
    token: null as string | null,
    isAuth: false,
    user: null as User | null,
    error: null as string | null,
};

describe('test auth reducer', () => {
    it('test login', () => {
        const action = actions.login('4252t5w5w245', {
            surname: 'Ivanov',
            name: 'Ivan',
            patronymic: 'Ivanovich',
            photo: 'photo',
        });
        const newState = authReducer(initialState, action);

        expect(newState.isAuth).toBeTruthy();
        expect(newState.token).toBe('4252t5w5w245');
        expect(newState.user?.surname).toBe('Ivanov');
        expect(newState.user?.name).toBe('Ivan');
        expect(newState.user?.patronymic).toBe('Ivanovich');
        expect(newState.user?.photo).toBe('photo');
    });

    it('test logout', () => {
        const action = actions.logout();
        const newState = authReducer(initialState, action);

        expect(newState.isAuth).toBeFalsy();
        expect(newState.token).toBeNull();
        expect(newState.user?.surname).toBeUndefined();
        expect(newState.user?.name).toBeUndefined();
        expect(newState.user?.patronymic).toBeUndefined();
        expect(newState.user?.photo).toBeUndefined();
    });

    it('test set error', () => {
        const action = actions.setError('error');
        const newState = authReducer(initialState, action);

        expect(newState.error).toBe('error');
    });
});
