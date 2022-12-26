import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";
import css from './RegisterForm.module.css';

export const RegisterForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        // console.log(form.elements.name.value);
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
                Username
                <input type="text" name="name" />
            </label>
            <label className={css.label}>
                Email
                <input type="email" name="email" />
            </label>
            <label className={css.label}>
                Password
                <input type="password" name="password" />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};
// import { useMemo } from "react";
// import PropTypes from "prop-types";
// import { nanoid } from "nanoid";

// import useForm from "shared/hooks/useForm";
// import TextField from "shared/components/TextField/TextField";

// import initialState from "./initialState";
// import fields from "./fields";

// const RegisterForm = ({ onSubmit }) => {
//     const { state, handleSubmit, handleChange } = useForm({ initialState, onSubmit });
     
//     const nameId = useMemo(() => nanoid(), []);
//     const emailId = useMemo(() => nanoid(), []);
//     const passwordId = useMemo(() => nanoid(), []);

//     const { name, email, password } = state;

//     return (
//         <form onSubmit={handleSubmit}>
//             <TextField id={nameId} value={name} handleChange={handleChange} {...fields.name} />
//             <TextField id={emailId} value={email} handleChange={handleChange} {...fields.email} />
//             <TextField id={passwordId} value={password} handleChange={handleChange} {...fields.password} />
//             <button>Register</button>
//         </form>
//     )
// }

// export default RegisterForm;

// RegisterForm.defaultProps = {
//     onSubmit: () => {}
// }

// RegisterForm.propTypes = {
//     onSubmit: PropTypes.func,
// }