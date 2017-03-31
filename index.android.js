/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import HomeScreen from './js/android/screens/HomeScreen'
import SignInScreen from './js/android/screens/SignInScreen'

const RoamMeet = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  SignIn: {
    screen: SignInScreen
  }
})

AppRegistry.registerComponent('RoamMeet', () => RoamMeet);
