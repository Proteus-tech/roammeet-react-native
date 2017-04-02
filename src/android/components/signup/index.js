import React from 'react'
import {Container, Text, Form, Item, Label, Input, Button, Thumbnail, Content} from 'native-base'
import { signup } from '../../../auth'

class SignUp extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
          email: '',
          password: ''
        }
    }

    createAccount () {
        signup(this.state.email, this.state.password, () => {
            console.log(' ======== success ======== ')
        })
    }

    render() {
    return (
        <Container>
            <Content style={{paddingLeft: 20, paddingRight: 20}}>
                <Thumbnail style={{ alignSelf: 'center', marginTop: 30, marginBottom: 10, width: 100, height: 100 }} source={require('../image/logo.png')} />
                    <Text style={{ alignSelf: 'center'}}>Create an account</Text>
                    <Form style={{paddingLeft: 20, paddingRight: 20, marginTop: 20}}>
                        <Item floatingLabel last>
                            <Label>E-mail</Label>
                            <Input onChangeText={(email) => this.setState({email})} value={this.state.email}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Confirm password</Label>
                            <Input secureTextEntry onChangeText={(password) => this.setState({password})} value={this.state.password}/>
                        </Item>
                        <Button  onPress={ () => this.createAccount() } block rounded info style={{marginTop: 20, marginBottom: 5 }}>
                            <Text>Sign up</Text>
                        </Button>
                        <Button onPress={this.props.onSignIn} transparent success style={{alignSelf: 'center'}}>
                            <Text>Have an account? Sign in</Text>
                        </Button>
                    </Form>
            </Content>
        </Container>
    )}
}

SignUp.propTypes = {
  onSignIn: React.PropTypes.func.isRequired
}


export default SignUp
