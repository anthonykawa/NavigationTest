import React, {Component} from 'react';
import {Container, Content, Grid, Col, Row} from 'native-base';

export default class ImageViewer extends Component {
    constructor(props){
        super(props)
        console.log('This component has been navigated to')
    }
    render(){
        return(
            <Container style={{backgroundColor: '#ffffff'}}>
            </Container>
        )
    }
}