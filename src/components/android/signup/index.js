import React from 'react'
import {Container, Header, Body, Title, Text, Form, Item, Label, Input, Image, Button, Thumbnail, Content, Card, CardItem } from 'native-base'

const SignUp = (props) => {
  const {title} = props
  return (
    <Container>
      <Header>
        <Body>
          <Title>{title}</Title>
        </Body>
      </Header>
      <Content style={{paddingLeft: 20, paddingRight: 20}}>
        <Thumbnail 
          style={{ alignSelf: 'center', marginTop: 50, marginBottom: 10, width: 100, height: 100 }} 
          source={require('./img/logo.png')} 
        />
        <Text style={{ alignSelf: 'center'}}>Create an account</Text>
        <Form style={{paddingLeft: 20, paddingRight: 20, marginTop: 25}}>
          <Item floatingLabel last>
            <Label>E-mail</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry />
          </Item>
          <Button block rounded info style={{marginTop: 20, marginBottom: 5 }}>
            <Text>Sign up</Text>
          </Button>
          <Button transparent success style={{alignSelf: 'center'}}>
            <Text>Have an account? Sign in</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  )
}

SignUp.propTypes = {
  title: React.PropTypes.string.isRequired
}


export default SignUp
