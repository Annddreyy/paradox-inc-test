import { useSelector } from 'react-redux';
import { TaskStatus } from '../api/tasksAPI';
import { getTasksByStatus } from '../redux/tasks/tasksSelectors';

export const useTasksByStatus = () => {
    const newTasks = useSelector(getTasksByStatus(TaskStatus.NEW));
    const inProgressTasks = useSelector(
        getTasksByStatus(TaskStatus.PROCESSING),
    );
    const doneTasks = useSelector(getTasksByStatus(TaskStatus.COMPLETED));

    return [
        { title: TaskStatus.NEW, tasks: newTasks },
        { title: TaskStatus.PROCESSING, tasks: inProgressTasks },
        { title: TaskStatus.COMPLETED, tasks: doneTasks },
    ];
};
