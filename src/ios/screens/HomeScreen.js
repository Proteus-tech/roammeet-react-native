import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from '../components/Home'
import {Container} from 'native-base'

class HomeScreen extends React.PureComponent {
  static navigationOptions = {
    tabBar: {
      label: 'Home',
      icon: ({tintColor}) => (
        <Icon name='home' size={20} color={tintColor}/>
      )
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Home />
      </Container>
    )
  }
}

export default HomeScreen
