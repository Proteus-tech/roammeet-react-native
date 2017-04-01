import React from 'react'
import SignIn from '../components/signin'


const SignInScreen = (props) => {
  const {navigate} = props.navigation
  const navigateToSignUp = () => {
    navigate('SignUp')
  }
  const navigateToHome = () => {
    navigate('Home')
  }

  return <SignIn onSignUp={navigateToSignUp} onHome={navigateToHome} />
}

SignInScreen.navigationOptions = {
  title: 'Sign In'
}

export default SignInScreen