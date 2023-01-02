import { useDispatch } from "react-redux";
import { logIn } from 'redux/auth/auth-operations';
import css from './LoginForm.module.css';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

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
               <FormControl isRequired
                borderColor='gray.100'
                borderWidth='2px'                
                padding='4'                
                borderRadius='lg'                
                width='100%'                
                maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}                
                alignItems='stretch'
                marginLeft='auto'
                marginRight='auto'
            >
            <FormLabel color='blue.500' mt='4'>Email</FormLabel>
            <Input type="email" name="email" placeholder='your_email@mail.com' />
            <FormLabel color='blue.500' mt='8'>Password</FormLabel>
            <Input type="password" name="password" />
            <Button type="submit" colorScheme="blue"
                    px="20" mt='18'>
                    Log In</Button>
            </FormControl>
        </form>
    )   
}

export default LoginForm;
