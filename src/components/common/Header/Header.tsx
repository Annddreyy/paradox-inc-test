import profile from './../../../assets/header/profile.png';
import classes from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={classes.header}>
            <div className="container row-center">
                <h1 className={classes.title}>Парадокс Инк</h1>
                <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;
