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

import Home from './src/components/android/home'

export default class RoamMeet extends Component {
  render() {
    return (
      <Home title="Roam Meet App" />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RoamMeet', () => RoamMeet);
