import {Content, Card, CardItem, Grid, Row, Text, H1} from 'native-base';
import React, {Component} from 'react';
import {Image} from 'react-native';

export default class Recent extends Component {
    render(){
        return(
                <Content>
                    <Card>
                        <CardItem style={{maxHeight: 170}}>
                            <Image resizeMode="center" style={{width: null}} source={require('../img/lift.jpg')} />
                        </CardItem>
                        <CardItem>
                            <H1>The Loaves and Fishes</H1>
                            <Grid>
                                <Row>
                                    <Text>If you always were wondering what the loaves and fishes were really about. Watch this vide and find out.</Text>
                                </Row>
                            </Grid>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem style={{maxHeight: 170}}>
                            <Image resizeMode="center" style={{width: null}} source={require('../img/lift.jpg')} />
                        </CardItem>
                        <CardItem>
                            <H1>The Loaves and Fishes</H1>
                            <Grid>
                                <Row>
                                    <Text>If you always were wondering what the loaves and fishes were really about. Watch this vide and find out.</Text>
                                </Row>
                            </Grid>
                        </CardItem>
                    </Card>
                </Content>
        )
    }
}