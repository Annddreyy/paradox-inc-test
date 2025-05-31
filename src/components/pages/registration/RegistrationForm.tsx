import { Navigate, NavLink } from 'react-router-dom';
import classes from './../../common/Form/Form.module.scss';
import cn from 'classnames';
import { Field } from '../../common/Field/Field';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../common/ErrorMessage/ErrorMessage';
import { PasswordInput } from '../../common/PasswordInput/PasswordInput';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { registration } from '../../../redux/auth/authThunks';
import { getIsAuth } from '../../../redux/auth/authSelectors';

type FormData = {
    surname: string;
    name: string;
    patronymic: string | null;
    photo: string | null;
    login: string;
    password: string;
};

const RegistrationForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, dirtyFields },
    } = useForm<FormData>();

    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = (formData: FormData) => {
        dispatch(registration({ ...formData }));
    };

    const isAuth = useSelector(getIsAuth);

    return (
        <>
            {!isAuth ? (
                <section className="container">
                    <form
                        className={classes.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h1 className={classes.title}>Регистрация</h1>
                        <div className="form-block">
                            <label htmlFor="surname">
                                Фамилия <span className="text-red">*</span>
                            </label>
                            <Field
                                id="surname"
                                type="text"
                                name="surname"
                                register={register}
                                options={{
                                    required: 'Это поле обязательное',
                                }}
                                className={cn({
                                    inputError: errors.surname,
                                    inputCorrect:
                                        !errors.surname && dirtyFields.surname,
                                })}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    setValue('surname', event.target.value, {
                                        shouldDirty: true,
                                    });
                                }}
                            />
                            <ErrorMessage error={errors.surname} />
                        </div>
                        <div className="form-block">
                            <label htmlFor="name">
                                Имя <span className="text-red">*</span>
                            </label>
                            <Field
                                id="name"
                                type="text"
                                name="name"
                                register={register}
                                options={{
                                    required: 'Это поле обязательное',
                                }}
                                className={cn({
                                    inputError: errors.name,
                                    inputCorrect:
                                        !errors.name && dirtyFields.name,
                                })}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    setValue('name', event.target.value, {
                                        shouldDirty: true,
                                    });
                                }}
                            />
                            <ErrorMessage error={errors.name} />
                        </div>
                        <div className="form-block">
                            <label htmlFor="patronymic">Отчество</label>
                            <Field
                                id="patronymic"
                                type="text"
                                name="patronymic"
                                register={register}
                            />
                        </div>
                        <div className="form-block">
                            <label htmlFor="photo">Фото</label>
                            <Field
                                id="photo"
                                type="file"
                                name="photo"
                                register={register}
                                accept="image/*"
                            />
                        </div>
                        <div className="form-block">
                            <label htmlFor="login">
                                Логин <span className="text-red">*</span>
                            </label>
                            <Field
                                id="login"
                                type="text"
                                name="login"
                                register={register}
                                options={{
                                    required: 'Это поле обязательное',
                                }}
                                className={cn({
                                    inputError: errors.login,
                                    inputCorrect:
                                        !errors.login && dirtyFields.login,
                                })}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    setValue('login', event.target.value, {
                                        shouldDirty: true,
                                    });
                                }}
                            />
                            <ErrorMessage error={errors.login} />
                        </div>
                        <div className="form-block">
                            <label htmlFor="password">
                                Пароль <span className="text-red">*</span>
                            </label>
                            <PasswordInput
                                id="password"
                                name="password"
                                register={register}
                                options={{
                                    required: 'Это поле является обязательным',
                                }}
                                className={cn({
                                    inputError: errors.password,
                                    inputCorrect:
                                        !errors.password &&
                                        dirtyFields.password,
                                })}
                            />
                            <ErrorMessage error={errors.password} />
                        </div>
                        <button
                            className="button-primary"
                            onClick={() => console.log(1)}
                        >
                            Зарегистрироваться
                        </button>
                        <div className={classes.bottom}>
                            <p className="text-primary">Уже есть аккаунт?</p>
                            <NavLink
                                to={'/auth'}
                                className={cn(
                                    'button-primary-outlined',
                                    classes.registrationButton,
                                )}
                            >
                                Войти
                            </NavLink>
                        </div>
                    </form>
                </section>
            ) : (
                <Navigate to={'/tasks'} />
            )}
        </>
    );
};

export default RegistrationForm;
