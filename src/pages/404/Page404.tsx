import { NavLink } from 'react-router-dom';
import okak from './../../assets/404/okak.png';
import classes from './Page404.module.scss';

const Page404: React.FC = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div className={classes.top}>
                <img src={okak} alt="" />
                <div className={classes.right}>
                    <h1 className={classes.title}>Ошибка 404</h1>
                    <NavLink to="/">
                        <button className="button-primary">На главную</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Page404;
