import React, {Component} from 'react';
import {Header, Grid, Col, Icon, Thumbnail, List, ListItem, Container, Content} from 'native-base';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  ToolbarAndroid,
  View,
  Text,
  DrawerLayoutAndroid,
  ViewPagerAndroid,
  TouchableOpacity,
  Image,
  Navigator
} from 'react-native';

import Events from './Events';
import Sermons from './Sermons';
import ImageList from './ImageList';
import Donate from './Donate';

var styles = require('../styles/root');

var {height, width} = Dimensions.get('window');

export default class Main extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.go();
    }
    go(){
        this.viewPager.setPage(this.props.page)
    }
    render(){
        return(  
            <View>
            <ToolbarAndroid
                title="Lift Community"
                navIcon={require('../img/menu.png')}
                onActionSelected={this.onActionSelected}
                onIconClicked={this.props.openDrawer}
                style={styles.toolbar}
                titleColor="#ffffff" />
                <Header style={{backgroundColor: '#ffffff', marginRight: 0, paddingRight: 0}}> 
                    <Grid>
                    <Col>
                        <TouchableOpacity onPress={() => this.props.go(0)}>
                        <Icon name="ios-calendar" style={this.props.style0} />
                        </TouchableOpacity>
                    </Col>
                    <Col>
                        <TouchableOpacity onPress={() => this.props.go(1)}>
                        <Icon name="ios-book" style={this.props.style1} />
                        </TouchableOpacity>
                    </Col>
                    <Col>
                        <TouchableOpacity onPress={() => this.props.go(2)}>
                        <Icon name="ios-image" style={this.props.style2} />
                        </TouchableOpacity>
                    </Col>
                    <Col>
                        <TouchableOpacity onPress={() => this.props.go(3)}>
                        <Icon name="ios-cash" style={this.props.style3} />
                        </TouchableOpacity>
                    </Col>
                    <Col>
                        <TouchableOpacity onPress={() => this.props.go(4)}>
                        <Icon name="ios-menu" style={this.props.style4}/>
                        </TouchableOpacity>
                    </Col>
                    </Grid>
                </Header>        
                <ViewPagerAndroid
                    initialPage={0}
                    onPageSelected={this.props.onPageSelected}
                    style={styles.viewPager}
                    ref={viewPager => this.viewPager = viewPager}
                    {...this.props}>
                    <View style={styles.pageStyle}> 
                    <Events />
                    </View>
                    <View style={styles.pageStyle}>
                    <Sermons />
                    </View>
                    <View style={styles.pageStyle}>
                    <ImageList imageSize={this.props.imageSize} screenWidth={this.props.screenWidth} />
                    </View>
                    <View style={styles.pageStyle}>
                    <Donate />
                    </View>
                    <View style={styles.pageStyle}>
                    <Text>Menu Page </Text>
                    </View>
                </ViewPagerAndroid>
            </View>
        )
    }
}