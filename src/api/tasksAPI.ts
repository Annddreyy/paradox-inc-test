import { DefaultResponse, instance } from './api';

export enum TaskStatus {
    NEW = 'Новая',
    PROCESSING = 'Выполняется',
    COMPLETED = 'Завершена',
    CLOSE = 'Закрыта',
}

export enum TaskTypes {
    BUG = 'Ошибка',
    FEATURE = 'Новая функциональность',
    FIX = 'Исправление',
}

export enum Priority {
    NOT_IMPORTANT = 'Не важная',
    MEDIUM_IMPORTANT = 'Средняя важность',
    IMPORTANT = 'Важная',
}

export type Author = {
    img: string | null;
    fullName: string;
};

export type NewTask = {
    title: string;
    description: string;
    date: Date;
    status: TaskStatus;
    type: TaskTypes;
    priority: Priority;
    author: Author;
};

export type Task = { id: number } & NewTask;

export const tasksAPI = {
    async getTasks() {
        const response = await instance.get<DefaultResponse<Task[]>>(`/tasks`);
        return response.data;
    },

    async setTask({
        title,
        description,
        status,
        type,
        priority,
        author,
    }: NewTask) {
        const response = await instance.post<DefaultResponse<Object>>(
            '/tasks',
            { title, description, status, type, priority, author },
        );
        return response.data;
    },

    async updateTask(id: number, title: string, description: string) {
        const response = await instance.patch<DefaultResponse<Object>>(
            `/tasks/${id}`,
            {
                title,
                description,
            },
        );
        return response.data;
    },

    async deleteTask(id: number) {
        const response = await instance.delete<DefaultResponse<Object>>(
            `/tasks/${id}`,
        );
        return response.data;
    },
};
