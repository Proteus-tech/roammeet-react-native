import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Container} from 'native-base'
import SignIn from '../components/SignIn'

class SignInScreen extends React.PureComponent {
  static navigationOptions = {
    tabBar: {
      label: 'SignIn',
      icon: ({tintColor}) => (
        <Icon name='user' size={20} color={tintColor}/>
      )
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <SignIn />
      </Container>
    )
  }
}

export default SignInScreen
