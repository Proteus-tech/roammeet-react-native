import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from '../components/Home'
import {Container, Header, Body, Title} from 'native-base'

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
				<Header>
          <Body>
              <Title>Home</Title>
          </Body>
        </Header>
        <Home />
      </Container>
    )
  }
}

export default HomeScreen
