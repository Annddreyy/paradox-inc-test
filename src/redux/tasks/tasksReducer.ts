import {
    Priority,
    Task,
    TaskStatus,
    TaskTypes,
} from '../../components/pages/tasks/TaskCard/TaskCard';

const initialState = {
    tasks: [
        {
            id: 1,
            title: 'Сделать компонент TaskCard',
            description:
                'Разработать компонент для отображения карточки задачи.',
            date: new Date('2024-01-20'),
            status: TaskStatus.NEW,
            type: TaskTypes.FEATURE,
            priority: Priority.IMPORTANT,
            author: {
                img: 'https://i.pravatar.cc/300?img=1',
                fullName: 'John Doe',
            },
        },
        {
            id: 2,
            title: 'Исправить баг с формой',
            description: 'Форма не отправляется при нажатии кнопки.',
            date: new Date(1682952503539),
            status: TaskStatus.PROCESSING,
            type: TaskTypes.BUG,
            priority: Priority.MEDIUM_IMPORTANT,
            author: {
                img: null,
                fullName: 'Jane Smith',
            },
        },
        {
            id: 3,
            title: 'Добавить функциональность поиска',
            description: 'Реализовать поиск задач по названию и описанию.',
            date: new Date('2024-01-25'),
            status: TaskStatus.COMPLETED,
            type: TaskTypes.FEATURE,
            priority: Priority.IMPORTANT,
            author: {
                img: 'https://i.pravatar.cc/300?img=3',
                fullName: 'David Lee',
            },
        },
        {
            id: 4,
            title: 'Рефакторинг кода компонента TaskList',
            description: 'Улучшить читаемость и структуру компонента TaskList.',
            date: new Date('2024-01-28'),
            status: TaskStatus.CLOSE,
            type: TaskTypes.FIX,
            priority: Priority.NOT_IMPORTANT,
            author: {
                img: 'https://i.pravatar.cc/300?img=4',
                fullName: 'Alice Brown',
            },
        },
        {
            id: 5,
            title: 'Добавить валидацию формы',
            description:
                'Реализовать валидацию полей формы при создании/редактировании задачи.',
            date: new Date('2024-01-30'),
            status: TaskStatus.NEW,
            type: TaskTypes.FEATURE,
            priority: Priority.MEDIUM_IMPORTANT,
            author: {
                img: 'https://i.pravatar.cc/300?img=1',
                fullName: 'John Doe',
            },
        },
        {
            id: 6,
            title: 'Обновить зависимости проекта',
            description:
                'Обновить все npm-пакеты до последних стабильных версий.',
            date: new Date('2024-02-02'),
            status: TaskStatus.PROCESSING,
            type: TaskTypes.FIX,
            priority: Priority.NOT_IMPORTANT,
            author: {
                img: 'https://i.pravatar.cc/300?img=2',
                fullName: 'Jane Smith',
            },
        },
        {
            id: 7,
            title: 'Исправить стили для мобильных устройств',
            description:
                'Адаптировать стили компонентов для корректного отображения на мобильных устройствах.',
            date: new Date('2024-02-05'),
            status: TaskStatus.COMPLETED,
            type: TaskTypes.FIX,
            priority: Priority.IMPORTANT,
            author: {
                img: 'https://i.pravatar.cc/300?img=3',
                fullName: 'David Lee',
            },
        },
        {
            id: 8,
            title: 'Реализовать пагинацию списка задач',
            description:
                'Добавить пагинацию для отображения большого количества задач.',
            date: new Date('2024-02-08'),
            status: TaskStatus.CLOSE,
            type: TaskTypes.FEATURE,
            priority: Priority.MEDIUM_IMPORTANT,
            author: {
                img: 'https://i.pravatar.cc/300?img=4',
                fullName: 'Alice Brown',
            },
        },
        {
            id: 9,
            title: 'Добавить тесты для компонента TaskCard',
            description:
                'Написать unit-тесты для проверки корректности работы компонента TaskCard.',
            date: new Date('2024-02-10'),
            status: TaskStatus.NEW,
            type: TaskTypes.FIX,
            priority: Priority.NOT_IMPORTANT,
            author: {
                img: 'https://i.pravatar.cc/300?img=1',
                fullName: 'John Doe',
            },
        },
        {
            id: 10,
            title: 'Исправить опечатку в описании TaskStatus',
            description:
                'Исправить опечатку в описании значения TaskStatus.COMPLETED.',
            date: new Date('2024-02-12'),
            status: TaskStatus.PROCESSING,
            type: TaskTypes.FIX,
            priority: Priority.NOT_IMPORTANT,
            author: {
                img: 'https://i.pravatar.cc/300?img=2',
                fullName: 'Jane Smith',
            },
        },
    ] as Task[],
};

export const tasksReducer = (state = initialState, action: any) => {
    return state;
};
