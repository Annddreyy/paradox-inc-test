import { useEffect, useState } from 'react';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import { TasksList } from '../../components/pages/Tasks/TasksList/TasksList';
import pencilIcon from './../../assets/tasks/pencil-icon.png';
import classes from './Tasks.module.scss';
import { NewTaskForm } from '../../components/pages/Tasks/NewTaskForm/NewTaskForm';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

const Tasks: React.FC = () => {
    const [newTaskFormIsOpen, setNewTaskFormIsOpen] = useState(false);

    useEffect(() => {
        newTaskFormIsOpen
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = '');
    }, [newTaskFormIsOpen]);

    const isAuth = useSelector(getIsAuth);

    return (
        <>
            {isAuth ? (
                <>
                    <Header />
                    <div className="container">
                        <button
                            className={classes.addTaskButton}
                            onClick={() => setNewTaskFormIsOpen(true)}
                        >
                            <span>Добавить заметку</span>
                            <img
                                src={pencilIcon}
                                alt=""
                                className={classes.img}
                            />
                        </button>
                        <TasksList />
                        {newTaskFormIsOpen && (
                            <NewTaskForm
                                setNewTaskFormIsOpen={setNewTaskFormIsOpen}
                            />
                        )}
                    </div>
                    <Footer />
                </>
            ) : (
                <Navigate to="/auth" />
            )}
        </>
    );
};

export default Tasks;
