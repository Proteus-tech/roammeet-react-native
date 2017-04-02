import React from 'react'
import CreateEvent from '../components/createEvent'


const CreateEventScreen = (props) => {
  const {navigate} = props.navigation
  const navigateToInviteFriend = () => {
    navigate('InviteFriend')
  }
  return <CreateEvent onInviteFriend={navigateToInviteFriend} />
}

CreateEventScreen.navigationOptions = {
  title: 'Create event'
}

export default CreateEventScreen