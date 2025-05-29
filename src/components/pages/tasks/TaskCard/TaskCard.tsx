import classes from './TaskCard.module.scss';
import defaultUser from './../../../../assets/header/profile.png';

export enum TaskStatus {
    NEW = 'Новая',
    PROCESSING = 'Выполняется',
    COMPLETED = 'Завершена',
    CLOSE = 'Закрыта',
}

export enum TaskTypes {
    BUG = 'Ошибка',
    FEATURE = 'Новая функциональность',
    FIX = 'Исправление',
}

export enum Priority {
    NOT_IMPORTANT = 'Не важная',
    MEDIUM_IMPORTANT = 'Средняя важность',
    IMPORTANT = 'Важная',
}

export type Author = {
    img: string;
    fullName: string;
};

export type Task = {
    id: number;
    title: string;
    description: string;
    date: Date;
    status: TaskStatus;
    type: TaskTypes;
    priority: Priority;
    author: Author;
};

export const TaskCard: React.FC<Task> = ({
    title,
    description,
    date,
    status,
    type,
    priority,
    author,
}) => {
    const timeFormatter = new Intl.DateTimeFormat('ru', {
        second: '2-digit',
        minute: '2-digit',
        hour: '2-digit',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        timeZoneName: 'short',
    });

    const formattedDate = timeFormatter.format(date);

    return (
        <article className={classes.card}>
            <div className={classes.marks}>
                <span data-status={status} className={classes.status}>
                    {status}
                </span>
                <span data-priority={priority} className={classes.priority}>
                    {priority}
                </span>
                <span data-type={type} className={classes.type}>
                    {type}
                </span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <time dateTime={formattedDate} className={classes.time}>
                {formattedDate}
            </time>
            <div className={classes.author}>
                <span>{author.fullName}</span>
                <img
                    src={author.img || defaultUser}
                    alt=""
                    className={classes.authorPhoto}
                />
            </div>
        </article>
    );
};
