import { FieldError } from 'react-hook-form';
import classes from './ErrorMessage.module.scss';

type Props = {
    error: FieldError | undefined;
};

export const ErrorMessage: React.FC<Props> = ({ error }) => {
    return (
        <>
            {error && (
                <div className={classes.errorMessage}>{error.message}</div>
            )}
        </>
    );
};
