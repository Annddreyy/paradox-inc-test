import classes from './TaskCard.module.scss';
import defaultUser from './../../../../../assets/header/profile.png';
import { Task } from '../../../../../api/tasksAPI';
import React, { useEffect, useState } from 'react';
import { Menu } from './Menu/Menu';
import { UpdateTaskForm } from './Menu/UpdateCardForm/UpdateCardForm';

type Props = {
    task: Task;
};

export const TaskCard: React.FC<Props> = React.memo(({ task }) => {
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

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [menuCoords, setMenuCoords] = useState([0, 0] as [number, number]);

    const onCardClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuCoords([event.pageX, event.pageY]);
        setIsOpenMenu((prev) => !prev);
    };

    const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);

    useEffect(() => {
        isUpdateFormOpen
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = '');
    }, [isUpdateFormOpen]);

    return (
        <article
            className={classes.card}
            onClick={onCardClick}
            onMouseLeave={() => setIsOpenMenu(false)}
        >
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
            {isOpenMenu && (
                <Menu
                    id={task.id}
                    coords={menuCoords}
                    setUpdateMenuIsOpen={setIsUpdateFormOpen}
                />
            )}
            {isUpdateFormOpen && (
                <UpdateTaskForm
                    setUpdateMenuIsOpen={setIsUpdateFormOpen}
                    card={task}
                />
            )}
        </article>
    );
});
