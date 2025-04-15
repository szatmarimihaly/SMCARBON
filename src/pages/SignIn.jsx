import React from 'react'
import AuthForm from '../components/sign-form/AuthForm'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

  const navigate = useNavigate();

  return (
    <AuthForm text="Login" alreadyOrNot="Already have an account?" RouteToButton="Sign Up" onClick={() => navigate("/signup")}/>
  )
}

export default SignIn