import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../redux/store';
import { deleteTask } from '../../../../../../redux/tasks/tasksThunks';
import classes from './Menu.module.scss';

type Props = {
    id: number;
    coords: [number, number];
    setUpdateMenuIsOpen: (isOpen: boolean) => void;
};

export const Menu: React.FC<Props> = ({ id, coords, setUpdateMenuIsOpen }) => {
    const dispatch = useDispatch<AppDispatch>();

    const onClickDeleteButtonHandler = () => {
        dispatch(deleteTask(id));
    };

    return (
        <>
            <div
                style={{ left: `${coords[0]}px`, top: `${coords[1]}px` }}
                className={classes.menu}
            >
                <button
                    className={classes.deleteButton}
                    onClick={onClickDeleteButtonHandler}
                >
                    Удалить
                </button>
                <button onClick={() => setUpdateMenuIsOpen(true)}>
                    Обновить
                </button>
            </div>
        </>
    );
};
