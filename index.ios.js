/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {TabNavigator} from 'react-navigation'
import HomeScreen from './src/ios/screens/HomeScreen'
import SignInScreen from './src/ios/screens/SignInScreen'
import colors from './src/colors'
import {
  AppRegistry
} from 'react-native';

const RoamMeet = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  SignIn: {
    screen: SignInScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
})


AppRegistry.registerComponent('RoamMeet', () => RoamMeet);
