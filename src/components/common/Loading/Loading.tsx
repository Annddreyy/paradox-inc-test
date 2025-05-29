import classes from './Loading.module.scss';
import loader from './../../../assets/loader/ripples.svg';

export const Loading: React.FC = () => {
    return (
        <div className={classes.loader}>
            <img src={loader} alt="" />
        </div>
    );
};
