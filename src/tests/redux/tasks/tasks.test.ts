import { Priority, Task, TaskStatus, TaskTypes } from '../../../api/tasksAPI';
import { actions, tasksReducer } from '../../../redux/tasks/tasksReducer';

const initialState = {
    tasks: [
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
    isFetching: false,
    currentPage: 1,
};

describe('test tests reducer', () => {
    it('test set tasks', () => {
        const action = actions.setTasks([
            {
                id: 1,
                title: 'test_title',
                description: 'test_description',
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
                description:
                    'Улучшить читаемость и структуру компонента TaskList.',
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
        ]);
        const newState = tasksReducer(initialState, action);

        expect(newState.tasks.length).toBe(10);

        expect(newState.tasks[0].id).toBe(1);
        expect(newState.tasks[0].title).toBe('test_title');
        expect(newState.tasks[0].description).toBe('test_description');
        expect(newState.tasks[0].date).toStrictEqual(new Date('2024-01-20'));
        expect(newState.tasks[0].status).toBe(TaskStatus.NEW);
        expect(newState.tasks[0].type).toBe(TaskTypes.FEATURE);
        expect(newState.tasks[0].priority).toBe(Priority.IMPORTANT);
        expect(newState.tasks[0].author.fullName).toBe('John Doe');
        expect(newState.tasks[0].author.img).toBe(
            'https://i.pravatar.cc/300?img=1',
        );
    });

    it('test delete task', () => {
        const action = actions.deleteTask(6);
        const newState = tasksReducer(initialState, action);

        expect(newState.tasks.length).toBe(4);
    });

    it('task set new task', () => {
        const action = actions.setTask({
            id: 2,
            title: 'test_title',
            description: 'test_description',
            date: new Date(),
            status: TaskStatus.COMPLETED,
            type: TaskTypes.FEATURE,
            priority: Priority.IMPORTANT,
            author: {
                img: 'test_img',
                fullName: 'test_fullname',
            },
        });
        const newState = tasksReducer(initialState, action);

        expect(newState.tasks.length).toBe(6);

        expect(newState.tasks.at(-1)?.id).toBe(2);
        expect(newState.tasks.at(-1)?.title).toBe('test_title');
        expect(newState.tasks.at(-1)?.description).toBe('test_description');
        expect(newState.tasks.at(-1)?.date).toStrictEqual(new Date());
        expect(newState.tasks.at(-1)?.status).toBe(TaskStatus.COMPLETED);
        expect(newState.tasks.at(-1)?.type).toBe(TaskTypes.FEATURE);
        expect(newState.tasks.at(-1)?.priority).toBe(Priority.IMPORTANT);
        expect(newState.tasks.at(-1)?.author.img).toBe('test_img');
        expect(newState.tasks.at(-1)?.author.fullName).toBe('test_fullname');
    });

    it('test update task', () => {
        const action = actions.updateTask(
            6,
            'title_new',
            'description_new',
            TaskStatus.CLOSE,
            TaskTypes.BUG,
            Priority.NOT_IMPORTANT,
        );
        const newState = tasksReducer(initialState, action);

        expect(newState.tasks.filter((task) => task.id === 6)[0].title).toBe(
            'title_new',
        );
        expect(
            newState.tasks.filter((task) => task.id === 6)[0].description,
        ).toBe('description_new');
        expect(newState.tasks.filter((task) => task.id === 6)[0].status).toBe(
            TaskStatus.CLOSE,
        );
        expect(newState.tasks.filter((task) => task.id === 6)[0].type).toBe(
            TaskTypes.BUG,
        );
        expect(newState.tasks.filter((task) => task.id === 6)[0].priority).toBe(
            Priority.NOT_IMPORTANT,
        );
    });

    it('test set current page', () => {
        const action = actions.setCurrentPage(10);
        const newState = tasksReducer(initialState, action);

        expect(newState.currentPage).toBe(10);
    });

    it('test set is fetching true', () => {
        const action = actions.setIsFetching(true);
        const newState = tasksReducer(initialState, action);

        expect(newState.isFetching).toBeTruthy();
    });

    it('test set is fetching false', () => {
        const action = actions.setIsFetching(false);
        const newState = tasksReducer(initialState, action);

        expect(newState.isFetching).toBeFalsy();
    });
});
