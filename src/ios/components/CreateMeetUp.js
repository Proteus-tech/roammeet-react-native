import React, { Component } from 'react';
import {
	Content, InputGroup, Input, Text, Button, Container, Header, Body,
	Title, Form, Item, Label
} from 'native-base'
import {DatePickerIOS} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../../colors'

class CreateMeetUp extends React.Component {
	static defaultProps = {
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  }

  state = {
    date: this.props.date,
    timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
  }

  onDateChange = (date) => {
    this.setState({date: date})
  }

	render() {
		return (
			<Container>
				<Header hasTabs>
					<Body>
							<Title>Create MeetUp</Title>
					</Body>
				</Header>
		    <Content>
					<Form>
	            <Item floatingLabel>
	                <Label>MeetUp name</Label>
	                <Input />
	            </Item>
	            <Item floatingLabel>
	                <Label>Description</Label>
	                <Input multiline={true}/>
	            </Item>
	        </Form>
					<Content style={{marginTop: 30}}>
						<Text style={{marginLeft: 15}}>Date</Text>
						<DatePickerIOS
							date={this.state.date}
							mode="datetime"
							timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
							onDateChange={this.onDateChange}
							minuteInterval={30}
						/>
					</Content>
		      <Button block style={{margin: 10, marginTop: 50}}>
		        <Text> Create MeetUp </Text>
		      </Button>
		    </Content>
			</Container>
	  )
	}
}

export default CreateMeetUp
