import React from 'react'
import SignUp from '../components/signup'

const SignUpScreen = (props) => {
  const {navigate} = props.navigation
  const navigateToSignIn = () => {
    navigate('SignIn')
  }

  return <SignUp onSignIn={navigateToSignIn} />
}

SignUpScreen.navigationOptions = {
  title: 'Sign Up'
}

export default SignUpScreen