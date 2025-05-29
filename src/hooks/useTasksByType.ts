import { useSelector } from 'react-redux';
import { TaskTypes } from '../api/tasksAPI';
import { getTasksByType } from '../redux/tasks/tasksSelectors';

export const useTasksByType = () => {
    const bugTasks = useSelector(getTasksByType(TaskTypes.BUG));
    const featuresTasks = useSelector(getTasksByType(TaskTypes.FEATURE));
    const fixTasks = useSelector(getTasksByType(TaskTypes.FIX));

    return [
        { title: TaskTypes.BUG, tasks: bugTasks },
        { title: TaskTypes.FEATURE, tasks: featuresTasks },
        { title: TaskTypes.FIX, tasks: fixTasks },
    ];
};
