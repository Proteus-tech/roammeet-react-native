import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import CreateMeetUp from '../components/CreateMeetUp'

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
      <CreateMeetUp {...this.props}/>
    )
  }
}

export default CreateMeetUpScreen
