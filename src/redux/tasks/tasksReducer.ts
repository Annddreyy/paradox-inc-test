import { InferActions } from '../store';
import { Priority, Task, TaskStatus, TaskTypes } from './../../api/tasksAPI';

const initialState = {
    tasks: [] as Task[],
    isFetching: false,
    currentPage: 1,
};

export type InitialState = typeof initialState;

export const tasksReducer = (
    state = initialState,
    action: Actions,
): InitialState => {
    switch (action.type) {
        case 'paradox-inc-test/tasks/SET_TASKS':
            return {
                ...state,
                tasks: action.payload.tasks,
            };
        case 'paradox-inc-test/tasks/SET_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload.task],
            };
        case 'paradox-inc-test/tasks/UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id !== action.payload.id
                        ? task
                        : {
                              ...task,
                              ...action.payload,
                          },
                ),
            };
        case 'paradox-inc-test/tasks/DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(
                    (task) => task.id !== action.payload.id,
                ),
            };
        case 'paradox-inc-test/tasks/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload.currentPage,
            };
        case 'paradox-inc-test/tasks/SET_IS_FETCHING':
            return {
                ...state,
                isFetching: action.payload.isFetching,
            };
        default:
            return state;
    }
};

export const actions = {
    setTasks: (tasks: Task[]) =>
        ({
            type: 'paradox-inc-test/tasks/SET_TASKS',
            payload: { tasks },
        }) as const,

    setTask: (task: Task) =>
        ({
            type: 'paradox-inc-test/tasks/SET_TASK',
            payload: { task },
        }) as const,

    updateTask: (
        id: number,
        title: string,
        description: string,
        status: TaskStatus,
        type: TaskTypes,
        priority: Priority,
    ) =>
        ({
            type: 'paradox-inc-test/tasks/UPDATE_TASK',
            payload: { id, title, description, status, type, priority },
        }) as const,

    deleteTask: (id: number) =>
        ({
            type: 'paradox-inc-test/tasks/DELETE_TASK',
            payload: { id },
        }) as const,

    setIsFetching: (isFetching: boolean) =>
        ({
            type: 'paradox-inc-test/tasks/SET_IS_FETCHING',
            payload: { isFetching },
        }) as const,

    setCurrentPage: (currentPage: number) =>
        ({
            type: 'paradox-inc-test/tasks/SET_CURRENT_PAGE',
            payload: { currentPage },
        }) as const,
};

export type Actions = InferActions<typeof actions>;
