import React from 'react'
import {View, Button} from 'react-native'
import Home from '../components/home'

class HomeScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'RoamMeet'
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Home title="RoamMeet" />
        <Button
          onPress={() => navigate('SignIn')}
          title="Sign In"
        />
      </View>
    )
  }
}

export default HomeScreen