import React, {Component} from 'react';
import {
    Image
} from 'react-native';
import {Container, Content, Card, CardItem, Grid, Row, Col, Text, H1, Icon} from 'native-base'
import mainTheme from '../Themes/mainTheme';

export default class Events extends Component {
    render(){
        return(
            <Container>
                <Content theme={mainTheme}>
                    <Card>
                        <CardItem style={{maxHeight: 170}}>
                            <Image resizeMode="cover" style={{width: null}} source={require('../img/potluck.jpg')} />
                        </CardItem>
                        <CardItem>
                            <H1>Lift Community Potluck</H1>
                            <Grid>
                                <Row>
                                    <Col>
                                        <Text>Thursday, April 21, 2017</Text>
                                    </Col>
                                    <Col style={{width: 25}}>
                                        <Icon name="ios-calendar-outline" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Text> 1356 Navarro Dr. Sunnyvale, CA 94087</Text>
                                    </Col>
                                    <Col style={{width: 25}}>
                                        <Icon name="ios-pin-outline" />
                                    </Col>
                                </Row>
                            </Grid>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}