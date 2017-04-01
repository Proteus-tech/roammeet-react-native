import React from 'react'
import {Container, Title, Text, Form, Item, Label, Input, Button, Thumbnail, Content } from 'native-base'

class SignIn extends React.Component {
   render() {
    return (
      <Container>
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
          <Button onPress={this.props.onHome} block rounded info style={{marginTop: 20, marginBottom: 5 }}>
            <Text>Sign In</Text>
          </Button>
          <Button onPress={this.props.onSignUp} transparent success style={{alignSelf: 'center'}}>
            <Text>Create a new account</Text>
          </Button>
        </Form>
      </Content>
    </Container>
    )
  }
}

SignIn.propTypes = {
  onSignUp: React.PropTypes.func.isRequired,
  onHome: React.PropTypes.func.isRequired
}

export default SignIn
