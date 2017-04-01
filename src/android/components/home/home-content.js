import React from 'react'
import {Container, Content, List, ListItem, Text, Body, Thumbnail, Right, H3, Separator} from 'native-base'

const HomeContent = (props) => {
  const invitedList = [
    {
      name: 'A',
      message: 'Hello'
    },
    {
      name: 'B',
      message: 'Hi!!!'
    }
  ]
  const createdList = [
    {
      name: 'Dinner',
      desc: 'Siam',
      time: '19.00'
    },
    {
      name: 'Football',
      desc: 'Jpress',
      time: '20.00'
    }
  ]
  return (
    <Container>
      <Content>
        <ListItem>
          <Separator bordered>
            <H3>Invited List</H3>
          </Separator>
        </ListItem>
        <List dataArray={invitedList}
            renderRow={(invited) => 
                <ListItem>
                  <Thumbnail source={require('./img/assassinscreedlogo.png')} />
                  <Body>
                    <Text>{invited.name}</Text>
                    <Text>{invited.message}</Text>
                  </Body>
                </ListItem>
            }
        />
        <ListItem>
          <Separator bordered>
            <H3>Created List</H3>
          </Separator>
        </ListItem>
        <List dataArray={createdList}
            renderRow={(created) => 
                <ListItem>
                  <Body>
                    <Text>{created.name}</Text>
                    <Text>{created.desc}</Text>
                    <Text>{created.time}</Text>
                  </Body>
                </ListItem>
            }
        />
      </Content>
    </Container>
  )
}

export default HomeContent