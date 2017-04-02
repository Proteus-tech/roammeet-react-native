import React from 'react'
import EventDetail from '../components/eventDetail'


const EventDetailScreen = (props) => {
  const {navigate} = props.navigation
  
  const navigateToHome = () => {
    navigate('Home')
  }
  return <EventDetail onHome={navigateToHome} />
}

EventDetailScreen.navigationOptions = {
  title: 'Event Detail'
}

export default EventDetailScreen