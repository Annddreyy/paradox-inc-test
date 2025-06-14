import { createSelector } from 'reselect';
import { Priority, TaskStatus, TaskTypes } from '../../api/tasksAPI';
import { AppState } from '../store';

export const getTasksSelector = (state: AppState) => {
    return state.tasks.tasks;
};

export const getTasksByStatus = (status: TaskStatus) =>
    createSelector(getTasksSelector, (tasks) =>
        tasks.filter((task) => task.status === status),
    );

export const getTasksByType = (type: TaskTypes) =>
    createSelector(getTasksSelector, (tasks) =>
        tasks.filter((task) => task.type === type),
    );

export const getTasksByPriority = (priority: Priority) =>
    createSelector(getTasksSelector, (tasks) =>
        tasks.filter((task) => task.priority === priority),
    );

export const getIsFetching = (state: AppState) => {
    return state.tasks.isFetching;
};
