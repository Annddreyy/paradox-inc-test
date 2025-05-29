import { useDispatch } from 'react-redux';
import classes from './DeleteMenu.module.scss';
import { AppDispatch } from '../../../../../../redux/store';
import { deleteTask } from '../../../../../../redux/tasks/tasksThunks';

type Props = {
    id: number;
};

export const DeleteMenu: React.FC<Props> = ({ id }) => {
    const dispatch = useDispatch<AppDispatch>();
    const onClickHandler = () => {
        alert(1);
        dispatch(deleteTask(id));
    };

    return (
        <button className={classes.deleteMenu} onClick={onClickHandler}>
            X
        </button>
    );
};
