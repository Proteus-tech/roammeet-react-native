import React from 'react'
import {Container, Content, List, ListItem, Text, Body, Thumbnail, Right, H3, Separator} from 'native-base'
import {listMeetup} from '../../../meetup'

class HomeContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      eventList: []
    }
  }

  componentDidMount () {
    listMeetup()
      .then ((eventList) => {
        console.log(eventList)
        this.setState({eventList})
      })
  }

  render () {
    return (
      <Container>
        <Content>
          <ListItem>
            <Separator bordered>
              <H3>Meetup list</H3>
            </Separator>
          </ListItem>
          <List dataArray={this.state.eventList}
              renderRow={(invited) => 
                  <ListItem onPress={this.props.onDetail}>
                    <Thumbnail source={require('./img/assassinscreedlogo.png')} />
                    <Body>
                      <Text>{invited.name}</Text>
                      <Text>{invited.description}</Text>
                      <Text>{invited.start_date} {invited.start_time}</Text>
                    </Body>
                  </ListItem>
              }
          />
        </Content>
      </Container>
    )
  }
}

export default HomeContent