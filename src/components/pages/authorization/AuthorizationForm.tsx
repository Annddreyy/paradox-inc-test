import { NavLink } from 'react-router-dom';
import classes from './../../common/Form/Form.module.scss';
import cn from 'classnames';
import { Field } from '../../common/Field/Field';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../common/ErrorMessage/ErrorMessage';
import { PasswordInput } from '../../common/PasswordInput/PasswordInput';

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

    const onSubmit = (formData: FormData) => {
        console.log(formData);
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
                            inputError: errors.password,
                            inputCorrect:
                                !errors.password && dirtyFields.password,
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
