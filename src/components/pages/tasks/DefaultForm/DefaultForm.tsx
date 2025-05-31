import { useForm } from 'react-hook-form';
import { Priority, TaskStatus, TaskTypes } from '../../../../api/tasksAPI';
import { ErrorMessage } from '../../../common/ErrorMessage/ErrorMessage';
import { Field } from '../../../common/Field/Field';
import classes from './DefaultForm.module.scss';

export type TaskFormData = {
    title: string;
    description: string;
    status: TaskStatus;
    type: TaskTypes;
    priority: Priority;
};

type BaseProps = {
    onClose: () => void;
    onSubmitHandler: (data: TaskFormData) => void;
    defaultValues?: Partial<TaskFormData>;
    title: string;
    submitLabel: string;
};

export const TaskForm: React.FC<BaseProps> = ({
    onClose,
    onSubmitHandler,
    defaultValues = {},
    title,
    submitLabel,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TaskFormData>({ defaultValues });

    const optionsList = [TaskStatus, TaskTypes, Priority].map((obj) =>
        Object.values(obj).map((k) => (
            <option value={k} key={k}>
                {k}
            </option>
        )),
    );

    return (
        <section
            className={classes.formWrapper}
            onClick={(e) => e.stopPropagation()}
        >
            <form
                className={classes.form}
                onSubmit={handleSubmit(onSubmitHandler)}
            >
                <div className={classes.top}>
                    <h2 className={classes.title}>{title}</h2>
                    <button type="button" onClick={onClose}>
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
                        <label htmlFor="status">Статус</label>
                        <select id="status" {...register('status')}>
                            {optionsList[0]}
                        </select>
                    </div>
                    <div className="form-block">
                        <label htmlFor="type">Тип задачи</label>
                        <select id="type" {...register('type')}>
                            {optionsList[1]}
                        </select>
                    </div>
                    <div className="form-block">
                        <label htmlFor="priority">Важность</label>
                        <select id="priority" {...register('priority')}>
                            {optionsList[2]}
                        </select>
                    </div>
                    <button className="button-primary">{submitLabel}</button>
                </div>
            </form>
        </section>
    );
};
