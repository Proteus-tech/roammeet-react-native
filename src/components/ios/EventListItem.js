/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Content, Card, CardItem, Body, Text, Thumbnail, Left} from 'native-base'
import {ItalicText} from './common'
import colors from '../../colors'

const EventListItem = ({detail}) => {
  const {title, description, date, inviter, pic} = detail
  return (
    <Content style={{ marginLeft:10, marginRight:10}}>
      <Card>
        <CardItem Header>
          <Thumbnail source={require('./butter.jpg')} />
          <Text>{title}</Text>
          <Text note> - {inviter}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <ItalicText color={colors.lightGrey}>
              {description}
            </ItalicText>
          </Body>
        </CardItem>
      </Card>
  </Content>
  )
}

export default EventListItem
