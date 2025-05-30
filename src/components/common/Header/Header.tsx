import { useSelector } from 'react-redux';
import profile from './../../../assets/header/profile.png';
import classes from './Header.module.scss';
import { getUser } from '../../../redux/auth/authSelectors';
import { useState } from 'react';
import { LogoutMenu } from './LogoutMenu/LogoutMenu';
import cn from 'classnames';

const Header: React.FC = () => {
    const user = useSelector(getUser)!;
    const [isLogoutMenuOpen, setIsLogoutMenuOpen] = useState(false);
    return (
        <header
            className={classes.header}
            onMouseEnter={() => setIsLogoutMenuOpen(true)}
            onMouseLeave={() => setIsLogoutMenuOpen(false)}
        >
            <div className="container row-center">
                <h1 className={classes.title}>Парадокс Инк</h1>
                <div className={cn('row-ac', classes.user)}>
                    <span>{`${user.surname} ${user.name[0]}. ${user.patronymic && user.patronymic[0] + '.'}`}</span>
                    <img
                        src={user.photo || profile}
                        alt=""
                        className={classes.img}
                    />
                    {isLogoutMenuOpen && <LogoutMenu />}
                </div>
            </div>
        </header>
    );
};

export default Header;
