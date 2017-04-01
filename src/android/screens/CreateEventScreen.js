import React from 'react'
import CreateEvent from '../components/createEvent'


const CreateEventScreen = (props) => {
  const {navigate} = props.navigation

  return <CreateEvent />
}

CreateEventScreen.navigationOptions = {
  title: 'Create event'
}

export default CreateEventScreen