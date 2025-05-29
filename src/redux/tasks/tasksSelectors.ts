import { AppState } from '../store';

export const getTasksSelector = (state: AppState) => {
    return state.products.tasks;
};

export const getCurrentPage = (state: AppState) => {
    return state.products.currentPage;
};
