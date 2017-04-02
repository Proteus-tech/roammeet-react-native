import React, { Component } from 'react';
import { StyleSheet, ListView, View } from 'react-native'
import { Container, Content, Left, Header, Body, Title, Right, ListItem, Thumbnail, Text, Button, Item, Input, Icon, Card } from 'native-base'

const users = [
    {
        name: 'Tom Room39',
        email: '1@gmail.com',
        image: 'https://cdn.baabin.com/upload/files/36/gamboom10/2016_08_25_13_51_21.png'
    },
    {
        name: 'Harry potter',
        email: '2@gmail.com',
        image: 'http://www.diario24horas.com.br/imgs/artigos/2014/2014-12-08-novas-aventuras-de-harry-potter.jpg'
    },
    {
        name: 'Hermione granger',
        email: '3@gmail.com',
        image: 'https://pbs.twimg.com/profile_images/527201530102161408/M_Uv2Xjr_400x400.jpeg'
    },
    {
        name: 'Barack obama',
        email: '4@gmail.com',
        image: 'http://media.golfdigest.com/photos/580fa2ed088fbfa926a25b99/master/pass/161025-barack-obama.png"'
    },
    {
        name: 'President Trump',
        email: '5@gmail.com',
        image: 'http://img.usmagazine.com/480-width/487817484_donald-trump-zoom-ec4db428-39f0-4b91-be27-cc7f2193fab7.jpg'
    }
]

const styles = StyleSheet.create({
  base: {
    margin: 8
  }
})

export default class InviteFriend extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
          dataSource: ds.cloneWithRows(users),
          users: users,
          searchInput: ''
        }
    }

    setInviteFriend (friend) {
        const newFriendList = [].concat(this.state.users, [friend])
        this.setState({users: newFriendList, dataSource: this.state.dataSource.cloneWithRows(newFriendList)})
    }

    inviteFriend () {
        const friend = {
            name: 'President Trump',
            email: '5@gmail.com',
            image: 'http://img.usmagazine.com/480-width/487817484_donald-trump-zoom-ec4db428-39f0-4b91-be27-cc7f2193fab7.jpg'
        }
        this.setInviteFriend(friend)
    }

    cancleInviteFriend (user) {
        let friendList = [].concat(this.state.users)
        index = friendList.findIndex((element) => {
            return element.email === user.email
        })
        friendList.splice(index, 1)
        this.setState({users: friendList, dataSource: this.state.dataSource.cloneWithRows(friendList)})
    }

    render() {
        const friendItem = (user) => (
            <ListItem thumbnail>
                <Left>
                    <Thumbnail source={{ uri: user.image}} />
                </Left>
                <Body>
                    <Text>{user.name}</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                    <Button transparent onPress={ () => {this.cancleInviteFriend(user)}}>
                        <Text>ยกเลิกชวน</Text>
                    </Button>
                </Right>
            </ListItem>
        )

        return (
            <Container>
                <Content searchBar rounded>
                    <Card>
                    <View style={styles.base}>
                        <Item>
                            <Icon name="search" />
                            <Input placeholder="Search" onChangeText={(searchInput) => this.setState({searchInput})} value={this.state.searchInput}/>
                            <Button transparent onPress={this.inviteFriend.bind(this)}>
                                <Text>Search</Text>
                            </Button>
                        </Item>
                    </View>
                    </Card>
                    <Card>
                        <ListView dataSource={this.state.dataSource} renderRow={friendItem} />
                    </Card>
                </Content>
            </Container>
        )
    }
}
