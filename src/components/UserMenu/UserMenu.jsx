import { useDispatch } from 'react-redux';
import { useAuth } from 'shared/hooks/useAuth';
import { logOut } from 'redux/auth/auth-operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    const handleLogOut = () => dispatch(logOut());

    return (
        <div className={css.wrapper}>
            <p className={css.username}>Welcome, {user.name}</p>
            <button type='button' onClick={handleLogOut}>Logout</button>
        </div>
    );
};