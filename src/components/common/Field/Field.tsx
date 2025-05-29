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

export const Field: React.FC<Field> = (field) => {
    return (
        <>
            {field.type !== 'textarea' ? (
                <div className={cn(classes.field, field.className)}>
                    <img src={field.icon} alt="" />
                    <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        style={field.style}
                        {...field.register(field.name, field.options)}
                        accept={field.accept}
                        list={field.list}
                        onChange={field.onChange}
                        value={field.value}
                    />
                    {field.className && (
                        <img
                            src={
                                field.className === 'inputCorrect'
                                    ? correct
                                    : error
                            }
                            alt=""
                        />
                    )}
                </div>
            ) : (
                <div
                    className={cn(classes.field, field.className)}
                    style={field.style}
                >
                    <img src={field.icon} alt="" />
                    <textarea
                        id={field.id}
                        placeholder={field.placeholder}
                        style={field.style}
                        {...field.register(field.name, field.options)}
                    ></textarea>
                </div>
            )}
        </>
    );
};
