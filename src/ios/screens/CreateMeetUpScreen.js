import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from '../components/Home'
import {Container, Header, Body, Title} from 'native-base'

class CreateMeetUpScreen extends React.PureComponent {
  static navigationOptions = {
		title: 'Create MeetUp',
    tabBar: {
      label: 'Create MeetUp',
      icon: ({tintColor}) => (
        <Icon name='plus-square' size={20} color={tintColor}/>
      )
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
				<Header>
          <Body>
              <Title>Create MeetUp</Title>
          </Body>
        </Header>
        <Home />
      </Container>
    )
  }
}

export default CreateMeetUpScreen
