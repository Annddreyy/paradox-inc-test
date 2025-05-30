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

export const PasswordInput: React.FC<PasswordInputProps> = (attr) => {
    const [showingPassword, setShowingPassword] = useState(false);

    const changeVisibility = () => {
        setShowingPassword((prev) => !prev);
    };

    return (
        <div className={classes.input}>
            <div>
                <img src={lock} alt="" />
                <input
                    id={attr.id}
                    type={showingPassword ? 'text' : 'password'}
                    placeholder={attr.placeholder}
                    className={attr.className}
                    style={attr.style}
                    {...attr.register(attr.name, attr.options)}
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
