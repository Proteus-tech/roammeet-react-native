import React from 'react'
import EventDetail from '../components/eventDetail'


const EventDetailScreen = (props) => {
  const {navigate} = props.navigation

  return <EventDetail />
}

EventDetailScreen.navigationOptions = {
  title: 'Event Detail'
}

export default EventDetailScreen