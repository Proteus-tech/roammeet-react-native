/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Container, Header, Body, Title, Footer, FooterTab, Button, Content} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from './src/components/ios/home'
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
      <Home />
        <Footer >
            <FooterTab>
                <Button>
                    <Icon name='home' size={20} color="#6a6a6a"/>
                </Button>
                <Button>
                    <Icon name='calendar' size={18} color="#6a6a6a"/>
                </Button>
                <Button active>
                    <Icon name='plus-square' size={18} color="#6a6a6a"/>
                </Button>
                <Button>
                    <Icon name='comments-o' size={18} color="#6a6a6a"/>
                </Button>
                <Button>
                    <Icon name='users' size={18} color="#6a6a6a"/>
                </Button>
            </FooterTab>
        </Footer>
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
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RoamMeet', () => RoamMeet);
