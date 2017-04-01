import React, { Component } from 'react'
import {Text} from 'react-native'

export const ItalicText = (props) => {
  return (
    <Text style={{fontStyle: 'italic', color: props.color}}>
      {props.children}
    </Text>
  )
}
