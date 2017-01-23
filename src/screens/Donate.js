import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class Donate extends Component {
    render(){
        return(
            <WebView
                source={{uri: 'https://pushpay.com/pay/gatewaycitycsj'}} />
        )
    }
}