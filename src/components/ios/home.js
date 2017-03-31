/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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
