import React from 'react'
import {Button} from 'native-base'
import InviteFriend from '../components/inviteFriend'
import Icon from 'react-native-vector-icons/FontAwesome';


const InviteFriendScreen = (props) => {
  const {navigate} = props.navigation
  return <InviteFriend />
}

InviteFriend.navigationOptions = {
  title: 'Invite Friend',
  header: (navigation) => ({
      right: (
        <Button transparent onPress={() => navigation.navigate('Home')}>
          <Icon name='check' size={20} />
        </Button>
      )
    })
}

export default InviteFriend