import { AppState } from "../store";

export const getIsAuth = (state: AppState) => {
    return state.auth.isAuth;
};

export const getErrorMessage = (state: AppState) => {
    return state.auth.error;
};

export const getToken = (state: AppState) => {
    return state.auth.token;
};

export const getUser = (state: AppState) => {
    return state.auth.user;
};
