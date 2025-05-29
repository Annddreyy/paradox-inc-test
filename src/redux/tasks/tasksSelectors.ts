import { AppState } from '../store';

export const getTasks = (state: AppState) => {
    return state.products.tasks;
};
