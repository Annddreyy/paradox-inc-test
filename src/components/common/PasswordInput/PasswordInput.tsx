import { CSSProperties, useState } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import classes from './PasswordInput.module.scss';
import eye from './../../../assets/input/eye.png';
import eyeOff from './../../../assets/input/eye-off.png';
import lock from './../../../assets/input/lock.png';

type PasswordInput = {
    id: string;
    name: string;
    placeholder?: string | undefined;
    register: UseFormRegister<any>;
    options?: RegisterOptions<any>;
    icon?: string;
    className?: string;
    style?: CSSProperties;
};

export const PasswordInput: React.FC<PasswordInput> = (props) => {
    const [showingPassword, setShowingPassword] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');

    const changeVisibillity = () => {
        setShowingPassword((prev) => !prev);
    };

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.register(props.name, props.options);
        setPasswordValue(event.target.value);
    };

    return (
        <div className={classes.input}>
            <div>
                <img src={lock} alt="" />
                <input
                    type={showingPassword ? 'text' : 'password'}
                    onChange={onChangeHandler}
                    value={passwordValue}
                />
            </div>
            <img
                src={showingPassword ? eye : eyeOff}
                onClick={changeVisibillity}
                alt=""
            />
        </div>
    );
};
