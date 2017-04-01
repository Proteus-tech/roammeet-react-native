import React, { Component } from 'react';
import {Content, Card, CardItem, Body, Text} from 'native-base'
import EventListItem from './EventListItem'
import {listMeetup} from '../../meetup'

class EventList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      eventList: []
    }
  }

  componentDidMount () {
    listMeetup()
      .then ((eventList) => {
        this.setState({eventList})
      })
  }

  render () {
    return (
      <Content>
        {
          this.state.eventList.map((event, index) => <EventListItem detail={event} key={index}/>)
        }
      </Content>
    )
  }

}

export default EventList
