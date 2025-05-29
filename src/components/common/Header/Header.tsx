import profile from './../../../assets/header/profile.png';
import classes from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={classes.header}>
            <div className="container row-center">
                <h1 className={classes.title}>Парадокс Инк</h1>
                <div className="row-ac">
                    <span>Петров П. П.</span>
                    <img src={profile} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;
