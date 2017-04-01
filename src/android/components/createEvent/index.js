import React from 'react'
import colors from '../../../colors' 
import {Container, Text, Form, Item, Label, Input, Button, Content } from 'native-base'

const CreateEvent = (props) => {
  const {title} = props
  return (
    <Container>
      <Content style={{paddingLeft: 20, paddingRight: 20}}>
        <Form style={{paddingLeft: 20, paddingRight: 20, marginTop: 20}}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: colors.retroPink, marginBottom: 10}}>Create event</Text>
          <Item stackedLabel>
            <Label>Title</Label>
            <Input multiline={true} />
          </Item>
          <Item stackedLabel>
            <Label>Description</Label>
            <Input multiline={true} />
          </Item>
          <Item stackedLabel>
            <Label>Date</Label>
            <Input />
          </Item>
          <Button block rounded info style={{marginTop: 20, marginBottom: 5 }}>
            <Text>Create</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  )
}

CreateEvent.propTypes = {
  title: React.PropTypes.string.isRequired
}


export default CreateEvent
