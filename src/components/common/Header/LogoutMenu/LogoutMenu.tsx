import { useDispatch } from 'react-redux';
import classes from './logoutMenu.module.scss';
import { AppDispatch } from '../../../../redux/store';
import { logout } from '../../../../redux/auth/authThunks';

export const LogoutMenu: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const onClickHandler = () => {
        dispatch(logout());
    };
    return (
        <button className={classes.button} onClick={onClickHandler}>
            Выйти
        </button>
    );
};
