import React, { Component } from 'react'
import {Content, Card, CardItem, Body, Text} from 'native-base'
import EventList from './EventList'

const Home = () => {
  return (
    <Content>
      <EventList />
    </Content>
  )
}

export default Home
