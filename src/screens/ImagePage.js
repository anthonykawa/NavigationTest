import React, {Component} from 'react';
import {Image, ScrollView, View, Dimensions, ListView, Navigator, TouchableOpacity} from 'react-native';
import {Container, Content, Grid, Col, Row} from 'native-base';

import styles from '../styles/root';
import ImageViewer from './ImageViewer';
import ImageList from './ImageList';

var {height, width} = Dimensions.get('window');

export default class ImagePage extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
            loaded: false,
        }      
    }

    render(){
        return(
            
        )
    }
}