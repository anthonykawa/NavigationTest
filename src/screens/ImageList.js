import React, {Component} from 'react';
import {Image, ScrollView, View, Dimensions, ListView, Navigator, TouchableOpacity} from 'react-native';
import {Container, Content, Grid, Col, Row} from 'native-base';
var {height, width} = Dimensions.get('window');
import ImageViewer from './ImageViewer';

var styles = require('../styles/root');

export default class ImageList extends Component {

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
            loaded: false,
        }      
    }

    componentDidMount(){
        fetch('https://api.instagram.com/v1/users/504803198/media/recent?count=100&access_token=1113296081.54da896.734a9fe7e59641a0bfd4bfa442fa7953')
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData.data)
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData.data),
                loaded: true
            })
        })
    }
    render(){
        return(
            <Container style={{width: this.props.screenWidth, height: height}} >
                    <Content>
                        <ListView  contentContainerStyle={styles.imageGrid}
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) => 
                                <TouchableOpacity 
                                    style={[styles.image, {width: this.props.imageSize, height: this.props.imageSize}]}
                                    onPress={() => this.props.navigator.push({component: ImageViewer})}>
                                    <Image style={[styles.image, {width: this.props.imageSize, height: this.props.imageSize}]} 
                                    source={{uri: rowData.images.standard_resolution.url}} 
                                    />
                                </TouchableOpacity>} 
                            initialListSize={100}/>
                    </Content>
                </Container>
        )
    }
}