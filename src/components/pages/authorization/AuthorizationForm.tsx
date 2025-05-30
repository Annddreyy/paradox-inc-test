import { NavLink } from 'react-router-dom';
import classes from './../../common/Form/Form.module.scss';
import cn from 'classnames';
import { Field } from '../../common/Field/Field';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../common/ErrorMessage/ErrorMessage';
import { PasswordInput } from '../../common/PasswordInput/PasswordInput';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { login } from '../../../redux/auth/authThunks';

type FormData = {
    login: string;
    password: string;
};

const AuthorizationForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<FormData>();

    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = (formData: FormData) => {
        dispatch(login(formData.login, formData.password));
    };

    return (
        <section className="container" onSubmit={handleSubmit(onSubmit)}>
            <form className={classes.form}>
                <h1 className={classes.title}>Авторизация</h1>
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
                            inputCorrect: !errors.login && dirtyFields.login,
                        })}
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
                                !errors.password && dirtyFields.password,
                        })}
                    />
                    <ErrorMessage error={errors.login} />
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
    );
};

export default AuthorizationForm;
