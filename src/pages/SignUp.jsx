import React from 'react'
import AuthForm from '../components/sign-form/AuthForm'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate();

  return (
    <AuthForm text="Create an Account" alreadyOrNot="Don't have an Account?" RouteToButton="Sign In" onClick={() => navigate("/signin")} />
  )
}

export default SignUp