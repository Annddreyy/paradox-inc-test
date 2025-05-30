import { User } from '../../api/authAPI';
import { InferActions } from '../store';

const initialState = {
    token: null as string | null,
    isAuth: false,
    user: null as User | null,
    error: null as string | null,
};

export type InitialState = typeof initialState;

export const authReducer = (
    state = initialState,
    action: Actions,
): InitialState => {
    switch (action.type) {
        case 'paradox-inc-test/auth/LOGIN':
            return {
                ...state,
                isAuth: true,
                token: action.payload.token,
                user: action.payload.user,
            };
        case 'paradox-inc-test/auth/LOGOUT':
            debugger;
            return {
                ...state,
                isAuth: false,
                token: null,
                user: null,
            };
        case 'paradox-inc-test/auth/SET_ERROR':
            return {
                ...state,
                error: 'Неверный логин или пароль',
            };
        default:
            return state;
    }
};

export const actions = {
    login: (token: string, user: User) =>
        ({
            type: 'paradox-inc-test/auth/LOGIN',
            payload: { token, user },
        }) as const,

    logout: () =>
        ({
            type: 'paradox-inc-test/auth/LOGOUT',
        }) as const,

    setError: (error: string) =>
        ({
            type: 'paradox-inc-test/auth/SET_ERROR',
            payload: { error },
        }) as const,
};

export type Actions = InferActions<typeof actions>;
