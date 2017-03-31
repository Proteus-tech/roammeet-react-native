/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Content, Card, CardItem, Body, Text} from 'native-base'
import EventListItem from './EventListItem'

const eventList = [
  {
    inviter: 'Somjai',
    date: '10-2-2017',
    description: 'ma ter yhak jer :-)',
    title: 'Reunion Angle gang xoxo.',
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
    <Card>
      {
        eventList.map((event, index) => <EventListItem detail={event} key={index}/>)
      }
    </Card>
  )
}

export default EventList
