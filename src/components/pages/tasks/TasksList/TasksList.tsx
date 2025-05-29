import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { useTasksByPriority } from '../../../../hooks/useTasksByPriority';
import { useTasksByStatus } from '../../../../hooks/useTasksByStatus';
import { useTasksByType } from '../../../../hooks/useTasksByType';
import { AppDispatch } from '../../../../redux/store';
import {
    getCurrentPage,
    getIsFetching,
} from '../../../../redux/tasks/tasksSelectors';
import { getTasks } from '../../../../redux/tasks/tasksThunks';
import { Loading } from '../../../common/Loading/Loading';
import { TaskCard } from './TaskCard/TaskCard';
import classes from './TasksList.module.scss';

export const TasksList = () => {
    const currentPage = useSelector(getCurrentPage);
    const dispatch = useDispatch<AppDispatch>();

    const tasksByStatus = useTasksByStatus();
    const tasksByType = useTasksByType();
    const tasksByPriority = useTasksByPriority();

    useEffect(() => {
        dispatch(getTasks(currentPage));
    }, []);

    const tasksGroups = [tasksByStatus, tasksByType, tasksByPriority];

    const blocks = tasksGroups.map((group) =>
        group.map(({ title, tasks }) => (
            <section key={v4()} className={classes.cardsGroup}>
                <h2 className={classes.title}>{title}</h2>
                {tasks.map((task) => (
                    <TaskCard task={task} key={task.id} />
                ))}
            </section>
        )),
    );

    return (
        <>
            {useSelector(getIsFetching) ? (
                <Loading />
            ) : (
                <section className={classes.cards}>{blocks}</section>
            )}
        </>
    );
};
