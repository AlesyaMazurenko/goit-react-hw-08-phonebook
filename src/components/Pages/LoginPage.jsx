import { Helmet } from 'react-helmet';
// react
import React from 'react'

//components
import LoginForm from '../../components/LoginForm/LoginForm';


export default function LoginPage() {
  return (
    <div className='container'>
      <Helmet>
      <title>Login</title></Helmet>
      <h1>Login Page</h1>
        <LoginForm />
    </div>
  )
}
