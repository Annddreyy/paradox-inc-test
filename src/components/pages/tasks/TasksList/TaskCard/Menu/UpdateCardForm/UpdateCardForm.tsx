import { TaskForm, TaskFormData } from './../../../../DefaultForm/DefaultForm';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './../../../../../../../redux/store';
import { updateTask } from './../../../../../../../redux/tasks/tasksThunks';
import { Task } from '../../../../../../../api/tasksAPI';

export const UpdateTaskForm: React.FC<{
    setUpdateMenuIsOpen: (isOpen: boolean) => void;
    card: Task;
}> = ({ setUpdateMenuIsOpen, card }) => {
    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = (formData: TaskFormData) => {
        dispatch(
            updateTask(
                card.id,
                formData.title,
                formData.description,
                formData.status,
                formData.type,
                formData.priority,
            ),
        );
        setUpdateMenuIsOpen(false);
    };

    return (
        <TaskForm
            title="Обновление задачи"
            submitLabel="Обновить"
            onClose={() => setUpdateMenuIsOpen(false)}
            onSubmitHandler={onSubmit}
            defaultValues={card}
        />
    );
};
