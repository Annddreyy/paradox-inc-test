import { useSelector } from 'react-redux';
import profile from './../../../assets/header/profile.png';
import classes from './Header.module.scss';
import { getUser } from '../../../redux/auth/authSelectors';

const Header: React.FC = () => {
    const user = useSelector(getUser)!;
    return (
        <header className={classes.header}>
            <div className="container row-center">
                <h1 className={classes.title}>Парадокс Инк</h1>
                <div className="row-ac">
                    <span>{`${user.surname} ${user.name[0]}. ${user.patronymic && user.patronymic[0] + '.'}`}</span>
                    <img
                        src={user.photo || profile}
                        alt=""
                        className={classes.img}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
