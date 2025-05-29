import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import { TasksList } from '../../components/pages/tasks/TasksList/TasksList';

const Tasks: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container">
                <TasksList />
            </div>
            <Footer />
        </>
    );
};

export default Tasks;
