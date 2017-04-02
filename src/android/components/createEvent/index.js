import React from 'react'
import colors from '../../../colors' 
import Icon from 'react-native-vector-icons/FontAwesome'
import {Container, Text, Form, Item, Label, Input, Button, Content } from 'native-base'
import {DatePickerAndroid} from 'react-native'
import DatePicker from 'react-native-datepicker'
import {createMeetUp} from '../../../meetup'

class CreateEvent extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
		title: '',
		description: '',
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  }

  state = {
		title: this.props.title,
		description: this.props.description,
    date: this.props.date,
    timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
  }

  onCreateMeetup = (e) => {
    createMeetUp({
      title: this.state.title,
      description: this.state.description,
      date: this.state.datetime,
      inviter: 'Deuanz'
    }).then((success) => {
      this.props.onInviteFriend
    })
  }

  render() {
  return (
    <Container>
      <Content style={{paddingLeft: 20, paddingRight: 20}}>
        <Form style={{paddingLeft: 20, paddingRight: 20, marginTop: 20}}>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: colors.retroPink, marginBottom: 10}}>Create event</Text>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input 
              multiline={true} 
              onChangeText={(title) => this.setState({title})} />
          </Item>
          <Item floatingLabel>
            <Label>Description</Label>
            <Input 
              multiline={true}
              onChangeText={(description) => this.setState({description})} />
          </Item>
          <Item iconLeft
            style={{marginBottom: 40, marginTop: 40}}>
            <DatePicker
              style={{width: 200}}
              date={this.state.datetime}
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
              onDateChange={(datetime) => {this.setState({datetime: datetime});}}
            />
          </Item>
          <Button onPress={this.onCreateMeetup} block rounded info style={{marginTop: 20, marginBottom: 5 }}>
            <Text>Create</Text>
          </Button>
        </Form>
      </Content>
    </Container>
    )
  }
}

CreateEvent.propTypes = {
  onInviteFriend: React.PropTypes.func.isRequired
}


export default CreateEvent
