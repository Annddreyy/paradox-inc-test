import { Navigate, NavLink } from 'react-router-dom';
import classes from './../../common/Form/Form.module.scss';
import cn from 'classnames';
import { Field } from '../../common/Field/Field';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../common/ErrorMessage/ErrorMessage';
import { PasswordInput } from '../../common/PasswordInput/PasswordInput';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { login } from '../../../redux/auth/authThunks';
import { getErrorMessage, getIsAuth } from '../../../redux/auth/authSelectors';

type FormData = {
    login: string;
    password: string;
};

const AuthorizationForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, dirtyFields },
    } = useForm<FormData>();

    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = (formData: FormData) => {
        if (error) return;
        dispatch(login(formData.login, formData.password));
    };

    const isAuth = useSelector(getIsAuth);
    const error = useSelector(getErrorMessage);

    return (
        <>
            {!isAuth ? (
                <section
                    className="container"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <form className={classes.form}>
                        <h1 className={classes.title}>Авторизация</h1>
                        {error && <div className="text-red">{error}</div>}
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
                                    setValue('login', event.target.value);
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
                        <button className="button-primary">Войти</button>
                        <div className={classes.bottom}>
                            <p className="text-primary">Нет аккаунта?</p>
                            <NavLink
                                to={'/registration'}
                                className={cn(
                                    'button-primary-outlined',
                                    classes.registrationButton,
                                )}
                            >
                                Зарегистрироваться
                            </NavLink>
                        </div>
                    </form>
                </section>
            ) : (
                <Navigate to="/tasks" />
            )}
        </>
    );
};

export default AuthorizationForm;
