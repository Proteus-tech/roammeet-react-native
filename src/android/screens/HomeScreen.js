import React from 'react'
import {View} from 'react-native'
import {Button, Text} from 'native-base'
import Home from '../components/home'
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'RoamMeet',
    header: (navigation) => ({
      left: (
        <Button transparent>
          <Icon name='bars' size={20} />
        </Button>
      ),
      right: (
        <Button onPress={() => navigation.navigate('SignIn')}>
          <Text>Sign Up</Text>
        </Button>
      )
    })
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <Home title="RoamMeet" onCreate={() => navigate('CreateEvent')}/>
    )
  }
}

export default HomeScreen
