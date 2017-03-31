import React, { Component } from 'react';
import {Content, InputGroup, Input, Text, Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import EventList from './EventList'
import colors from '../../colors'

const Registration = () => {
  return (
    <Content>
      <InputGroup>
        <Icon name='user' style={{color: colors.lightGrey}}/>
        <Input placeholder='email'/>
      </InputGroup>
      <InputGroup>
        <Icon name='unlock-alt' style={{color: colors.lightGrey}}/>
        <Input placeholder='password'/>
      </InputGroup>
      <InputGroup>
        <Input placeholder='confirm password'/>
      </InputGroup>
      <Button full style={{marginTop:10}}>
        <Text> Sign Up </Text>
      </Button>
    </Content>
  )
}

export default Registration
