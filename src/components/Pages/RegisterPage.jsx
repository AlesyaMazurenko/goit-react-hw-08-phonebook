import { RegisterForm } from '../RegiserForm/RegisterForm';
import React from 'react';
import { Heading} from '@chakra-ui/react';

export default function RegisterPage() {

  return (
    <div className='container'>
      <Heading
       mt='15'
        mb='8'
        fontWeight='extrabold'
        textAlign='center'
        size='2xl'
        bgGradient='linear(to-r, blue.500, purple.500, purple.500)'
        bgClip='text'>  
        
        Register Page</Heading>
          <RegisterForm />
    </div>
  )
}
