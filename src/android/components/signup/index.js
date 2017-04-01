import React from 'react'
import {Container, Text, Form, Item, Label, Input, Button, Thumbnail, Content} from 'native-base'

const SignUp = (props) => {
  const {title} = props
  return (
    <Container>
      <Content style={{paddingLeft: 20, paddingRight: 20}}>
        <Thumbnail 
          style={{ alignSelf: 'center', marginTop: 30, marginBottom: 10, width: 100, height: 100 }} 
          source={require('./img/logo.png')} 
        />
        <Text style={{ alignSelf: 'center'}}>Create an account</Text>
        <Form style={{paddingLeft: 20, paddingRight: 20, marginTop: 20}}>
          <Item floatingLabel last>
            <Label>E-mail</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry />
          </Item>
          <Item floatingLabel last>
            <Label>Confirm password</Label>
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
