import React, {Component} from 'react';
import {
    Image
} from 'react-native';
import {Container, Content, Header, Title, Text, Button, List, ListItem, Thumbnail} from 'native-base';



 var SideMenu = (
    <Container style={{backgroundColor: '#ffffff'}}>
        <Content>
            <Image resizeMode='cover' style={{width: null}} source={require('../img/lift_side.jpg')} />
            <List>
                <ListItem button onPress={() => this.go(1)}>
                    <Thumbnail source={require('../img/calendar.png')} />
                    <Text>Events</Text>
                </ListItem>
                <ListItem button>
                    <Thumbnail source={require('../img/book.png')} />
                    <Text>Sermons</Text>
                </ListItem>
                <ListItem button>
                    <Thumbnail source={require('../img/info.png')} />
                    <Text>About Us</Text>
                </ListItem>
            </List> 
        </Content>
    </Container>
);

module.exports = SideMenu;