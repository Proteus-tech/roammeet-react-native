import React from 'react'
import {Container, Header, Footer, FooterTab, Content, Body, Title, Left, Button, Right, Thumbnail, List, ListItem, Text, H3, Separator, Grid, Col, Fab} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeContent from './home-content'

const Home = (props) => {
  const {title} = props
  const state = {
    active: true
  }
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='bars' size={40} />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          <Button transparent>
            <Thumbnail source={require('./img/assassinscreedlogo.png')} />
          </Button>
        </Right>
      </Header>
      <HomeContent />
      <Fab
        active={state.active}
        direction='right'
        containerStyle={{marginLeft: 10}}
        style={{backgroundColor: '#5067FF'}}
        onPress={() => state.active = !state.active}
      >
        <Icon name="plus-square" />
      </Fab>
      <Footer>
        <FooterTab>
          <Grid>
            <Col />
            <Col>
              <Button transparent>
                <Icon name='plus-square' style={{color: 'white'}} size={40} />
              </Button>
            </Col>
            <Col />
          </Grid>
        </FooterTab>
      </Footer>
    </Container>
  )
}

Home.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default Home