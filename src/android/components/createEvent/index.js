import React from 'react'
import colors from '../../../colors' 
import Icon from 'react-native-vector-icons/FontAwesome'
import {Container, Text, Form, Item, Label, Input, Button, Content } from 'native-base'
import {DatePickerAndroid} from 'react-native'

class CreateEvent extends React.Component {
  state = {
    presetDate: new Date(2020, 4, 5),
    simpleDate: new Date(2020, 4, 5),
    spinnerDate: new Date(2020, 4, 5),
    calendarDate: new Date(2020, 4, 5),
    defaultDate: new Date(2020, 4, 5),
    allDate: new Date(2020, 4, 5),
    simpleText: 'pick a date',
    spinnerText: 'pick a date',
    calendarText: 'pick a date',
    defaultText: 'pick a date',
    minText: 'pick a date, no earlier than today',
    maxText: 'pick a date, no later than today',
    presetText: 'pick a date, preset to 2020/5/5',
    allText: 'pick a date between 2020/5/1 and 2020/5/10',
  };

  showPicker = async (stateKey, options) => {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

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
            style={{marginBottom: 40, marginTop: 40}}
            onPress={this.showPicker.bind(this, 'spinner', {date: this.state.spinnerDate, mode: 'spinner'})}>
            <Icon name='calendar' style={{color: colors.lightGrey}}/>
            <Text style={{paddingLeft: 20, marginBottom: 5}}>{this.state.spinnerText}</Text>
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
