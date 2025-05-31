import { TaskForm, TaskFormData } from './../DefaultForm/DefaultForm';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import { setTask } from '../../../../redux/tasks/tasksThunks';
import { NewTask, Task } from '../../../../api/tasksAPI';

export const NewTaskForm: React.FC<{
    setNewTaskFormIsOpen: (isOpen: boolean) => void;
}> = ({ setNewTaskFormIsOpen }) => {
    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = (formData: TaskFormData) => {
        const task: NewTask = {
            ...formData,
            date: new Date(),
            author: {
                fullName: 'Petrov M. M.',
                img: 'https://i.pravatar.cc/300?img=1',
            },
        };
        dispatch(setTask(task));
        setNewTaskFormIsOpen(false);
    };

    return (
        <TaskForm
            title="Добавление задачи"
            submitLabel="Добавить"
            onClose={() => setNewTaskFormIsOpen(false)}
            onSubmitHandler={onSubmit}
        />
    );
};
