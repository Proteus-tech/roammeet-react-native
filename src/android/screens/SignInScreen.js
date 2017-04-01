import React from 'react'
import SignIn from '../components/signin'


const SignInScreen = (props) => {
  const {navigate} = props.navigation
  const navigateToSignUp = () => {
    navigate('SignUp')
  }

  return <SignIn onSignUp={navigateToSignUp} />
}

SignInScreen.navigationOptions = {
  title: 'Sign In'
}

export default SignInScreen