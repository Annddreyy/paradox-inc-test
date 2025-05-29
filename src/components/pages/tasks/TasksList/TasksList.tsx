import { useSelector } from 'react-redux';
import { getTasks } from '../../../../redux/tasks/tasksSelectors';
import { TaskCard } from '../TaskCard/TaskCard';
import classes from './TasksList.module.scss';

export const TasksList = () => {
    const tasks = useSelector(getTasks);
    const taskCards = tasks.map((task) => <TaskCard {...task} key={task.id} />);
    return <section className={classes.cards}>{taskCards}</section>;
};
