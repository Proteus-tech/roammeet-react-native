import React from 'react'
import colors from '../../../colors' 
import Icon from 'react-native-vector-icons/FontAwesome'
import {Container, Text, Form, Item, Label, Input, Button, Content } from 'native-base'
import {DatePickerAndroid} from 'react-native'
import DatePicker from 'react-native-datepicker'

class CreateEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: "2017-04-02"}
  }

  render() {
  return (
    <Container>
      <Content style={{paddingLeft: 20, paddingRight: 20}}>
        <Form style={{paddingLeft: 20, paddingRight: 20, marginTop: 20}}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: colors.retroPink, marginBottom: 10}}>Create event</Text>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input multiline={true} />
          </Item>
          <Item floatingLabel>
            <Label>Description</Label>
            <Input multiline={true} />
          </Item>
          <Item iconLeft
            style={{marginBottom: 40, marginTop: 40}}>
            <DatePicker
              style={{width: 200}}
              date={this.state.datetime1}
              mode="datetime"
              format="YYYY-MM-DD HH:mm"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              minuteInterval={10}
              onDateChange={(datetime) => {this.setState({datetime1: datetime});}}
            />
          </Item>
          <Button block rounded info style={{marginTop: 20, marginBottom: 5 }}>
            <Text>Create</Text>
          </Button>
        </Form>
      </Content>
    </Container>
    )
  }
}

CreateEvent.propTypes = {
}


export default CreateEvent
