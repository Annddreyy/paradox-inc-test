import { useForm } from 'react-hook-form';
import { Field } from '../../../../../../common/Field/Field';
import { ErrorMessage } from '../../../../../../common/ErrorMessage/ErrorMessage';
import classes from './UpdateCardForm.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../../redux/store';
import { updateTask } from '../../../../../../../redux/tasks/tasksThunks';
import {
    Priority,
    Task,
    TaskStatus,
    TaskTypes,
} from '../../../../../../../api/tasksAPI';

type FormData = {
    title: string;
    description: string;
    status: TaskStatus;
    type: TaskTypes;
    priority: Priority;
};

type Props = {
    setUpdateMenuIsOpen: (isOpen: boolean) => void;
    card: Task;
};

export const UpdateCardForm: React.FC<Props> = ({
    setUpdateMenuIsOpen,
    card,
}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: card.title,
            description: card.description,
            status: card.status,
            type: card.type,
            priority: card.priority,
        },
    });

    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = (formData: FormData) => {
        debugger;
        dispatch(
            updateTask(
                card.id,
                formData.title,
                formData.description,
                formData.status,
                formData.type,
                formData.priority,
            ),
        );
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
        <section className={classes.formWrapper}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.top}>
                    <h2 className={classes.title}>Обновление задачи</h2>
                    <button onClick={() => setUpdateMenuIsOpen(false)}>
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
                    <button className="button-primary">Обновить</button>
                </div>
            </form>
        </section>
    );
};
