import { useSelector } from 'react-redux';
import { Priority } from '../api/tasksAPI';
import { getTasksByPriority } from '../redux/tasks/tasksSelectors';

export const useTasksByPriority = () => {
    const notImportantTasks = useSelector(
        getTasksByPriority(Priority.NOT_IMPORTANT),
    );
    const mediumImportantTasks = useSelector(
        getTasksByPriority(Priority.MEDIUM_IMPORTANT),
    );
    const importantTasks = useSelector(getTasksByPriority(Priority.IMPORTANT));

    return [
        { title: Priority.NOT_IMPORTANT, tasks: notImportantTasks },
        { title: Priority.MEDIUM_IMPORTANT, tasks: mediumImportantTasks },
        { title: Priority.IMPORTANT, tasks: importantTasks },
    ];
};
