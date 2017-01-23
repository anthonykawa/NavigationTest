import React, { Component } from 'react';
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
import {Header, Grid, Col, Icon, Thumbnail, List, ListItem, Container, Content} from 'native-base';
import OneSignal from 'react-native-onesignal';
import Main from './screens/Main';
var Parse = require('parse/react-native');

import ImageList from './screens/ImageList';

import styles from './styles/root';

var {height, width} = Dimensions.get('window');
var pendingNotifications = [];
// var _navigator; // If applicable, declare a variable for accessing your navigator object to handle payload.
// function handleNotificationAction (openResult) { // If you want to handle the notification with a payload.
//     _navigator.to('main.post', openResult.notification.payload.title, {
//      article: {
//        title: openResult.notification.payload.title,
//        link: openResult.notification.payload.launchURL,
//        action: openResult.notification.action.actionSelected
//      }
//     });
// }

OneSignal.configure({
    onIdsAvailable: function(device) {
        console.log('UserId = ', device.userId);
        console.log('PushToken = ', device.pushToken);
    },
  onNotificationReceived: function(notification) {
      console.log('NOTIFICATION RECEIVED: ', notification);
  },
  onNotificationOpened: function(openResult) {
      console.log('NOTIFICATION OPENED: ', openResult);
      //if (!_navigator) { // Check if there is a navigator object. If not, waiting with the notification.
      //    console.log('Navigator is null, adding notification to pending list...');
          pendingNotifications.push(openResult);
      //    return;
      // }
      // handleNotificationAction(openResult);
  }
});

export default class App extends Component {
  constructor(props){
      super(props);
      this.openDrawer = this.openDrawer.bind(this);
      var imageSize = (width - 30) / 2
      this.state = {
          page: 0,
          style0: styles.inactive,
          style1: styles.inactive,
          style2: styles.inactive,
          style3: styles.inactive,
          style4: styles.inactive,
          layout:{
              height: height,
              width: width
          },
          imageSize: imageSize
      }
  }
      renderScene(route, navigator){
        if(route.name = 'Main'){
            return(
              <Main navigator={navigator} {...route.passProps} />
            )
        } 
        if(route.name = 'imageView'){
            return <ImageViewer navigator={navigator} {...route.passProps} />
        }
    }
  _onLayout = event => {
    console.log('------------------------------------------------' + JSON.stringify(event.nativeEvent.layout));
      var imageSize = (event.nativeEvent.layout.width - 30) / 2
      this.setState({
          layout:{
              height: event.nativeEvent.layout.height,
              width: event.nativeEvent.layout.width
          },
          imageSize: imageSize
      })
  }
  componentDidMount(){
    OneSignal.promptLocation();
    this.go(this.state.page);
    this.activeIcon();
  }
  openDrawer(){
    this.drawer.openDrawer();
  }
  go = (page) => {
    this.activeIcon(page);
  };
  goFromDrawer = (page) => {
    this.activeIcon(page);
    this.drawer.closeDrawer();
  }
  onPageSelected = (e) => {
    this.setState({page: e.nativeEvent.position});
    this.activeIcon(e.nativeEvent.position);
  };
  activeIcon(page){
    switch(page){
      case 0:
        this.setState({style0: styles.active});
        this.setState({style1: styles.inactive});
        this.setState({style2: styles.inactive});
        this.setState({style3: styles.inactive});
        this.setState({style4: styles.inactive});
        break;
      case 1:
        this.setState({style0: styles.inactive});
        this.setState({style1: styles.active});
        this.setState({style2: styles.inactive});
        this.setState({style3: styles.inactive});
        this.setState({style4: styles.inactive});
        break;
      case 2:
        this.setState({style0: styles.inactive});
        this.setState({style1: styles.inactive});
        this.setState({style2: styles.active});
        this.setState({style3: styles.inactive});
        this.setState({style4: styles.inactive});
        break;
      case 3:
        this.setState({style0: styles.inactive});
        this.setState({style1: styles.inactive});
        this.setState({style2: styles.inactive});
        this.setState({style3: styles.active});
        this.setState({style4: styles.inactive});
        break;
      case 4:
        this.setState({style0: styles.inactive});
        this.setState({style1: styles.inactive});
        this.setState({style2: styles.inactive});
        this.setState({style3: styles.inactive});
        this.setState({style4: styles.active});
        break;
    }
  }
  render() {
      var SideMenu = (
        <Container style={{backgroundColor: '#ffffff'}}>
            
            <Content>
                <Image resizeMode='cover' style={{width: null}} source={require('./img/lift_side.jpg')} />
                <List>
                    <ListItem button onPress={() => this.goFromDrawer(0)}>
                        <Thumbnail source={require('./img/calendar.png')} />
                        <Text>Events</Text>
                    </ListItem>
                    <ListItem button onPress={() => this.goFromDrawer(1)}>
                        <Thumbnail source={require('./img/book.png')} />
                        <Text>Sermons</Text>
                    </ListItem>
                    <ListItem button onPress={() => this.goFromDrawer(2)}>
                        <Thumbnail source={require('./img/info.png')} />
                        <Text>About Us</Text>
                    </ListItem>
                </List> 
            </Content>
        </Container>
    );
    return (
      <DrawerLayoutAndroid
        onLayout={this._onLayout}
        ref={(_drawer) => this.drawer = _drawer}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => SideMenu}>
        <Navigator
                initialRoute={{ 
                    component: ImageList, 
                    name: 'Main',
                    passProps: {
                        imageSize: this.state.imageSize,
                        screenWidth: this.state.screenWidth,
                        style0: this.state.style0,
                        style1: this.state.style1,
                        style2: this.state.style2,
                        style3: this.state.style3,
                        style4: this.state.style4,
                        openDrawer: this.openDrawer,
                        activeIcon: this.activeIcon,
                        onPageSelected: this.onPageSelected,
                        go: this.go,
                        page: this.state.page
                    }
                }}
                renderScene={this.renderScene}
            />
            

      </DrawerLayoutAndroid>
    );
  }
}
