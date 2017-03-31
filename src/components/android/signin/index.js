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
      <Thumbnail style={{ alignSelf: 'center', marginTop: 70, marginBottom: 50, width: 150, height: 150 }} source={require('./img/logo.png')} />
      <Content>
        <Form style={{paddingLeft: 20, paddingRight: 20}}>
          <Item floatingLabel last>
            <Label>E-mail</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry />
          </Item>
          <Button block rounded info style={{marginTop: 20, marginBottom: 5 }}>
            <Text>Sign In</Text>
          </Button>
          <Button transparent success style={{alignSelf: 'center'}}>
            <Text>Create a new account</Text>
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
