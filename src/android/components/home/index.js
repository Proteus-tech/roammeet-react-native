import React from 'react'
import {Container, Header, Body, Title, Left, Button, Icon, Right, Thumbnail} from 'native-base'

const Home = (props) => {
  const {title} = props
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
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
    </Container>
  )
}

Home.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default Home