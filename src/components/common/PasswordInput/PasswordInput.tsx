import { CSSProperties, useState } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import classes from './PasswordInput.module.scss';
import eye from './../../../assets/input/eye.png';
import eyeOff from './../../../assets/input/eye-off.png';
import lock from './../../../assets/input/lock.png';

type PasswordInputProps = {
    id: string;
    name: string;
    placeholder?: string | undefined;
    register: UseFormRegister<any>;
    options?: RegisterOptions<any>;
    icon?: string;
    className?: string;
    style?: CSSProperties;
};

export const PasswordInput: React.FC<PasswordInputProps> = ({
    id,
    name,
    placeholder,
    register,
    options,
    className,
    style,
}) => {
    const [showingPassword, setShowingPassword] = useState(false);

    const changeVisibility = () => {
        setShowingPassword((prev) => !prev);
    };

    return (
        <div className={classes.input}>
            <div>
                <img src={lock} alt="" />
                <input
                    id={id}
                    type={showingPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    className={className}
                    style={style}
                    {...register(name, options)}
                />
            </div>
            <img
                src={showingPassword ? eye : eyeOff}
                onClick={changeVisibility}
                alt=""
            />
        </div>
    );
};
