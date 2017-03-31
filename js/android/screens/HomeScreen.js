import React from 'react'
import Home from '../components/home'

class HomeScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'RoamMeet'
  }

  render() {
    return (
      <Home title="RoamMeet" />
    )
  }
}

export default HomeScreen