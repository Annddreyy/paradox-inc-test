import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import {
    getCurrentPage,
    getTasksSelector,
} from '../../../../redux/tasks/tasksSelectors';
import { getTasks } from '../../../../redux/tasks/tasksThunks';
import { TaskCard } from '../TaskCard/TaskCard';
import classes from './TasksList.module.scss';

export const TasksList = () => {
    const tasks = useSelector(getTasksSelector);
    const currentPage = useSelector(getCurrentPage);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getTasks(currentPage));
    }, []);

    const taskCards = tasks.map((task) => <TaskCard {...task} key={task.id} />);
    return <section className={classes.cards}>{taskCards}</section>;
};
