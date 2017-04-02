import React from 'react'
import colors from '../../../colors' 
import Icon from 'react-native-vector-icons/FontAwesome'
import {Container, Text, Form, Item, Label, Input, Button, Content } from 'native-base'

class CreateEvent extends React.Component {

  render() {
  return (
    <Container>
      <Content style={{paddingLeft: 20, paddingRight: 20}}>
        <Content style={{paddingLeft: 20, paddingRight: 20, marginTop: 40}}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: colors.retroPink, marginBottom: 10}}>Event Detail</Text>
          <Content floatingLabel>
            <Label>Title</Label>
            <Text multiline={true} style={{paddingLeft: 10, paddingRight: 10}}>We are going to Kao Yai</Text>
          </Content>
          <Content style={{marginTop: 30}}>
            <Label>Description</Label>
            <Text multiline={true} style={{paddingLeft: 10, paddingRight: 10}}>
                3 Days 2 Night
                - Take a bus at Ekamai Teminal
                - To use pool villa, Please prepare your swimsuit
            </Text>
          </Content>
          <Content iconLeft
            style={{marginBottom: 40, marginTop: 30}}>
            <Label>Appointed time</Label>
            <Text style={{paddingLeft: 10, paddingRight: 10}}>2017-04-02 09.00</Text>
          </Content>
          <Button block rounded success style={{ marginTop: 20, marginBottom: 5 }}>
            <Text>Accept</Text>
          </Button>
          <Button block rounded danger style={{ marginTop: 20, marginBottom: 5 }}>
            <Text>Reject</Text>
          </Button>
        </Content>
      </Content>
    </Container>
    )
  }
}

CreateEvent.propTypes = {
}


export default CreateEvent
