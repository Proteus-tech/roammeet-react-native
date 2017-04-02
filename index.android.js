/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Container, Header, Body, Title} from 'native-base'
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import {StackNavigator} from 'react-navigation'
import HomeScreen from './src/android/screens/HomeScreen'
import SignInScreen from './src/android/screens/SignInScreen'
import SignUpScreen from './src/android/screens/SignUpScreen'
import CreateEventScreen from './src/android/screens/CreateEventScreen'
import EventDetailScreen from './src/android/screens/EventDetailScreen'
import InviteFriendScreen from './src/android/screens/InviteFriendScreen'

const RoamMeet = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  CreateEvent: {
    screen: CreateEventScreen
  },
  SignIn: {
    screen: SignInScreen
  },
  SignUp: {
    screen: SignUpScreen
  },
  EventDetail: {
    screen: EventDetailScreen
  },
  InviteFriend: {
    screen: InviteFriendScreen
  }
})

AppRegistry.registerComponent('RoamMeet', () => RoamMeet);
