import { ChangeEvent, CSSProperties } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import classes from './Field.module.scss';
import cn from 'classnames';
import correct from './../../../assets/input/icon-right-correct.png';
import error from './../../../assets/input/icon-right-error.png';

type Field = {
    type: React.HTMLInputTypeAttribute | 'textarea';
    id: string;
    name: string;
    placeholder?: string | undefined;
    register: UseFormRegister<any>;
    options?: RegisterOptions<any>;
    icon?: string;
    className?: string;
    style?: CSSProperties;
    accept?: string;
    list?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Field: React.FC<Field> = (attr) => {
    return (
        <>
            {attr.type !== 'textarea' ? (
                <div className={cn(classes.field, attr.className)}>
                    <img src={attr.icon} alt="" />
                    <input
                        id={attr.id}
                        type={attr.type}
                        placeholder={attr.placeholder}
                        style={attr.style}
                        {...attr.register(attr.name, attr.options)}
                        accept={attr.accept}
                        list={attr.list}
                        onChange={attr.onChange}
                        value={attr.value}
                    />
                    {attr.className && (
                        <img
                            src={
                                attr.className === 'inputCorrect'
                                    ? correct
                                    : error
                            }
                            alt=""
                        />
                    )}
                </div>
            ) : (
                <div
                    className={cn(classes.field, attr.className)}
                    style={attr.style}
                >
                    <img src={attr.icon} alt="" />
                    <textarea
                        id={attr.id}
                        placeholder={attr.placeholder}
                        style={attr.style}
                        {...attr.register(attr.name, attr.options)}
                    ></textarea>
                </div>
            )}
        </>
    );
};
