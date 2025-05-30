import { useDispatch, useSelector } from 'react-redux';
import { useTasksByPriority } from '../../../../hooks/useTasksByPriority';
import { useTasksByStatus } from '../../../../hooks/useTasksByStatus';
import { useTasksByType } from '../../../../hooks/useTasksByType';
import { getIsFetching } from '../../../../redux/tasks/tasksSelectors';
import { Loading } from '../../../common/Loading/Loading';
import { TaskCard } from './TaskCard/TaskCard';
import classes from './TasksList.module.scss';
import { AppDispatch } from '../../../../redux/store';
import { useEffect } from 'react';
import { getTasks } from '../../../../redux/tasks/tasksThunks';

export const TasksList = () => {
    const dispatch = useDispatch<AppDispatch>();

    const tasksByStatus = useTasksByStatus();
    const tasksByType = useTasksByType();
    const tasksByPriority = useTasksByPriority();

    const tasksGroups = [tasksByStatus, tasksByType, tasksByPriority];

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    const blocks = tasksGroups.map((group) =>
        group.map(({ title, tasks }) => (
            <section key={title} className={classes.cardsGroup}>
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
