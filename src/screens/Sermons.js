import React, {Component} from 'react';
import {
    Image
} from 'react-native';
import {Container, Content, Card, CardItem, Grid, Row, Col, Text, H1, Icon, Tabs} from 'native-base'

import Recent from './Recent';
import Series from './Series';
import mainTheme from '../Themes/mainTheme';

export default class Sermons extends Component {
    render(){
        return(
            <Container>
                <Content theme={mainTheme}>
                    <Recent tabLabel='Recent' />
                </Content>
            </Container>
        )
    }
}