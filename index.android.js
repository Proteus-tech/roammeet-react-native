/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Container, Header, Body, Title} from 'native-base'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class RoamMeet extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>RoamMeet</Title>
          </Body>
        </Header>
      </Container>
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
