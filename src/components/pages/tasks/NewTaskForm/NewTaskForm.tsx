import { useForm } from 'react-hook-form';
import classes from './NewTaskForm.module.scss';
import {
    Priority,
    Task,
    TaskStatus,
    TaskTypes,
} from '../../../../api/tasksAPI';
import { setTask } from '../../../../redux/tasks/tasksThunks';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import { Field } from '../../../common/Field/Field';
import { ErrorMessage } from '../../../common/ErrorMessage/ErrorMessage';

type FormData = {
    title: string;
    description: string;
    status: TaskStatus;
    type: TaskTypes;
    priority: Priority;
};

type Props = {
    setNewTaskFormIsOpen: (isOpen: boolean) => void;
};

export const NewTaskForm: React.FC<Props> = ({ setNewTaskFormIsOpen }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = (formData: FormData) => {
        const data = {
            ...formData,
            author: {
                fullName: 'Petrov M. M.',
                img: 'https://i.pravatar.cc/300?img=1',
            },
        } as Task;
        dispatch(setTask({ ...data }));
        setNewTaskFormIsOpen(false);
    };

    const statusOptions = Object.values(TaskStatus).map((status) => (
        <option value={status} key={status}>
            {status}
        </option>
    ));
    const typeOptions = Object.values(TaskTypes).map((type) => (
        <option value={type} key={type}>
            {type}
        </option>
    ));
    const priorityOptions = Object.values(Priority).map((priority) => (
        <option value={priority} key={priority}>
            {priority}
        </option>
    ));

    return (
        <section
            className={classes.formWrapper}
            onClick={(e) => e.stopPropagation()}
        >
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.top}>
                    <h2 className={classes.title}>Добавление задачи</h2>
                    <button onClick={() => setNewTaskFormIsOpen(false)}>
                        X
                    </button>
                </div>
                <div className={classes.bottom}>
                    <div className="form-block">
                        <label htmlFor="title">Название задачи</label>
                        <Field
                            id="title"
                            name="title"
                            type="text"
                            register={register}
                            options={{
                                required: 'Это поле является обязательным',
                            }}
                        />
                        <ErrorMessage error={errors.title} />
                    </div>
                    <div className="form-block">
                        <label htmlFor="description">Описание задачи</label>
                        <Field
                            id="description"
                            name="description"
                            type="textarea"
                            register={register}
                            options={{
                                required: 'Это поле является обязательным',
                            }}
                        />
                        <ErrorMessage error={errors.description} />
                    </div>
                    <div className="form-block">
                        <label htmlFor="description">Описание задачи</label>
                        <Field
                            id="description"
                            name="description"
                            type="textarea"
                            register={register}
                            options={{
                                required: 'Это поле является обязательным',
                            }}
                        />
                        <ErrorMessage error={errors.description} />
                    </div>
                    <div className="form-block">
                        <label htmlFor="status">Статус</label>
                        <select id="status" {...register('status')}>
                            {statusOptions}
                        </select>
                    </div>
                    <div className="form-block">
                        <label htmlFor="type">Тип задачи</label>
                        <select id="type" {...register('type')}>
                            {typeOptions}
                        </select>
                    </div>
                    <div className="form-block">
                        <label htmlFor="priority">Важность</label>
                        <select id="priority" {...register('priority')}>
                            {priorityOptions}
                        </select>
                    </div>
                    <button className="button-primary">Добавить</button>
                </div>
            </form>
        </section>
    );
};
