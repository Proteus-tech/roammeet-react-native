import React, { Component } from 'react';
import {
	Content, InputGroup, Input, Text, Button, Container, Header, Body,
	Title, Form, Item, Label
} from 'native-base'
import {DatePickerIOS} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../../colors'
import {createMeetUp} from '../../meetup'
import moment from 'moment'

class CreateMeetUp extends React.Component {
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

  onDateChange = (date) => {
    this.setState({date: date})
  }

	onCreateMeetUp = (e) => {
		createMeetUp({
			name: this.state.title,
			description: this.state.description,
			start_date: moment(this.state.date).format('YYYY-MM-DD'),
			start_time: moment(this.state.date).format('HH:mm')
		}).then(success => this.props.navigation.navigate('Home'))
	}

	componentDidMount () {
		console.log('CreateMeetUp did mount')
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
	                <Input onChangeText={(title) => this.setState({title})}/>
	            </Item>
	            <Item floatingLabel>
	                <Label>Description</Label>
	                <Input
										multiline={true}
										onChangeText={(description) => this.setState({description})}/>
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
		      <Button block style={{margin: 10, marginTop: 50}} onPress={this.onCreateMeetUp}>
		        <Text>Create MeetUp</Text>
		      </Button>
		    </Content>
			</Container>
	  )
	}
}

export default CreateMeetUp
