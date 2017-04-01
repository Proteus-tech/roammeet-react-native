import React from 'react'
import {Container, Header, Body, Title, Text, Form, Item, Label, Input, Image, Button, Thumbnail, Content } from 'native-base'

const SignIn = (props) => {
  const {title} = props
  return (
    <Container>
      <Header>
        <Body>
          <Title>{title}</Title>
        </Body>
      </Header>
      <Thumbnail style={{ alignSelf: 'center', marginTop: 50, marginBottom: 30 }} source={require('./logo.png')} />
      <Content>
        <Form style={{paddingLeft: 10, paddingRight: 10}}>
          <Item>
            <Label>E-mail</Label>
            <Input />
          </Item>
          <Item>
            <Label>Password</Label>
            <Input />
          </Item>
          <Button block rounded info style={{marginTop: 20, marginBottom: 5 }}>
            <Text>Sign In</Text>
          </Button>
          <Button transparent success style={{alignSelf: 'center'}}>
            <Text>Register</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  )
}

SignIn.propTypes = {
  title: React.PropTypes.string.isRequired
}


export default SignIn
