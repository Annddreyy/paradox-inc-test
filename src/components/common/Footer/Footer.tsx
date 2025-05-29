import classes from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div>Тестовое задание</div>
            </div>
        </footer>
    );
};

export default Footer;
