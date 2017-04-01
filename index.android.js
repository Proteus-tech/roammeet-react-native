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

const RoamMeet = StackNavigator({
  CreateEvent: {
    screen: CreateEventScreen
  },
  Home: {
    screen: HomeScreen
  },
  SignIn: {
    screen: SignInScreen
  },
  SignUp: {
    screen: SignUpScreen
  }
})

AppRegistry.registerComponent('RoamMeet', () => RoamMeet);
