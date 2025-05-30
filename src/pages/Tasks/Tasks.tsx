import { useState } from 'react';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import { TasksList } from '../../components/pages/tasks/TasksList/TasksList';
import pencilIcon from './../../assets/tasks/pencil-icon.png';
import classes from './Tasks.module.scss';
import { NewTaskForm } from '../../components/pages/tasks/NewTaskForm/NewTaskForm';

const Tasks: React.FC = () => {
    const [newTaskFormIsOpen, setNewTaskFormIsOpen] = useState(false);
    return (
        <>
            <Header />
            <div className="container">
                <button
                    className={classes.addTaskButton}
                    onClick={() => setNewTaskFormIsOpen(true)}
                >
                    <span>Добавить заметку</span>
                    <img src={pencilIcon} alt="" className={classes.img} />
                </button>
                <TasksList />
                {newTaskFormIsOpen && (
                    <NewTaskForm setNewTaskFormIsOpen={setNewTaskFormIsOpen} />
                )}
            </div>
            <Footer />
        </>
    );
};

export default Tasks;
