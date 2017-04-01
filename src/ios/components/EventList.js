import React, { Component } from 'react';
import {Content, Card, CardItem, Body, Text} from 'native-base'
import EventListItem from './EventListItem'

const eventList = [
  {
    inviter: 'Somjai',
    date: '10-2-2017',
    description: 'ma ter yhak jer :-)',
    title: 'Reunion Angel gang xoxo.',
    pic:'./butter.jpg'
  },
  {
    inviter: 'SomChai',
    date: '10-2-2017',
    description: 'kidtueng jung ma ha nhoi <3',
    title: 'Tee derm',
    pic:'./butter.jpg'
  }
]
const EventList = () => {
  return (
    <Content>
      {
        eventList.map((event, index) => <EventListItem detail={event} key={index}/>)
      }
    </Content>
  )
}

export default EventList
