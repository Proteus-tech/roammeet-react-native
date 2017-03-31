import React from 'react'
import {Container, Header, Body, Title} from 'native-base'

const Home = (props) => {
  const {title} = props
  return (
    <Container>
      <Header>
        <Body>
          <Title>{title}</Title>
        </Body>
      </Header>
    </Container>
  )
}

Home.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default Home