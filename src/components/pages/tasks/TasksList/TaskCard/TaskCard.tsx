import classes from './TaskCard.module.scss';
import defaultUser from './../../../../../assets/header/profile.png';
import { Task } from '../../../../../api/tasksAPI';
import { useState } from 'react';
import { DeleteMenu } from './DeleteMenu/DeleteMenu';

type Props = {
    task: Task;
};

export const TaskCard: React.FC<Props> = ({ task }) => {
    const timeFormatter = new Intl.DateTimeFormat('ru', {
        second: '2-digit',
        minute: '2-digit',
        hour: '2-digit',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        timeZoneName: 'short',
    });

    const formattedDate = timeFormatter.format(task.date);

    const [isDeleting, setIsDeliting] = useState(false);

    const onCardClick = () => {
        debugger;
        setIsDeliting((prev) => !prev);
    };

    return (
        <article className={classes.card} onClick={onCardClick}>
            <div className={classes.marks}>
                <span
                    data-status={task.status}
                    className={classes.status}
                    onClick={onCardClick}
                >
                    {task.status}
                </span>
                <span
                    data-priority={task.priority}
                    className={classes.priority}
                >
                    {task.priority}
                </span>
                <span data-type={task.type} className={classes.type}>
                    {task.type}
                </span>
            </div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <time dateTime={formattedDate} className={classes.time}>
                {formattedDate}
            </time>
            <div className={classes.author}>
                <span>{task.author.fullName}</span>
                <img
                    src={task.author.img || defaultUser}
                    alt=""
                    className={classes.authorPhoto}
                />
            </div>
            {isDeleting && <DeleteMenu id={task.id} />}
        </article>
    );
};
