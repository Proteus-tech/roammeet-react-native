import React from 'react'
import {Container, Header, Footer, FooterTab, Content, Body, Title, Left, Button, Right, Thumbnail, List, ListItem, Text, H3, Separator, Grid, Col} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeContent from './home-content'

const Home = (props) => {
  console.log(props)
  const {title, goTo} = props

  return (
    <Container>
      <HomeContent onDetail={props.onEventDetail} />
      <Footer>
        <FooterTab>
          <Grid>
            <Col />
            <Col>
              <Button transparent onPress={props.onCreate}>
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
  title: React.PropTypes.string.isRequired,
  onEventDetail: React.PropTypes.func.isRequired
}

export default Home