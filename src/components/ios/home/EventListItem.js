/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Content, Card, CardItem, Body, Text, Thumbnail, Left} from 'native-base'

const EventListItem = ({detail}) => {
  const {title, description, date, inviter, pic} = detail
  return (
    <CardItem>
      <CardItem Header>
        <Thumbnail source={require('./butter.jpg')} />
        <Body>
          <Text>{title}</Text>
          <Text note>{date}</Text>
        </Body>
      </CardItem>
      <CardItem content>
        <Text>
          {description}
        </Text>
      </CardItem>
    </CardItem>
  )
}

export default EventListItem
