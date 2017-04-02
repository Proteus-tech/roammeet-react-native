import React from 'react'
import InviteFriend from '../components/inviteFriend'


const InviteFriendScreen = (props) => {
  const {navigate} = props.navigation
  return <InviteFriend />
}

InviteFriend.navigationOptions = {
  title: 'Invite Friend'
}

export default InviteFriend