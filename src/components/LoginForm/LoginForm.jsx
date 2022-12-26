import { useDispatch } from "react-redux";
import { logIn } from 'redux/auth/auth-operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
        })
        );
        form.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
                Email
                <input type="email" name="email" />
            </label>
            <label className={css.label}>
                Password
                <input type="password" name="password" />
            </label>
            <button type="submit">Log In</button>
        </form>
    )
    
}

export default LoginForm;
// const LoginForm = ({ onSubmit }) => {
//     const dispatch = useDispatch();
//     const form = e.currentTarget;

//     const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });

//     const emailId = useMemo(() => nanoid(), []);
//     const passwordId = useMemo(() => nanoid(), []);

//     const { email, password } = state;

//     return (
//         <form onSubmit={handleSubmit}>
//             <TextField id={emailId} value={email} handleChange={handleChange} {...fields.email} />
//             <TextField id={passwordId} value={password} handleChange={handleChange} {...fields.password} />
//             <button>Login</button>
//         </form>
//     )
// }

// export default LoginForm;

// LoginForm.defaultProps = {
//     onSubmit: () => {}
// }

// LoginForm.propTypes = {
//     onSubmit: PropTypes.func,
// }