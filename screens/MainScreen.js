import React, {Component} from "react";
import {Animated, Dimensions, Platform, Text, View, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import {Body, Header, List, ListItem as Item, ScrollableTab, Tab, Tabs, Title} from "native-base";
import { TabViewAnimated, TabBar,TabView } from 'react-native-tab-view';

import Second from './Second'
import ContactsList from '../components/ContactsList';


import Category from '../components/Category'
import { store } from './mobxStore'
var config = require('./app_config.json');

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
}

const HEADER_HEIGHT = 400;
const COLLAPSED_HEIGHT = 52
const SCROLLABLE_HEIGHT = HEADER_HEIGHT - 350


export default class MainScreen extends Component {  constructor(props) {
      super(props)

       this.state = {
         index: 0,
         routes: [
           { key: 'first', title: 'First' },
           { key: 'second', title: 'Second' },
         ],
         scroll: new Animated.Value(0),
       }
     }

     _handleIndexChange = index => {
       this.setState({ index });
     }

     _renderHeader = props => {
       const translateY = this.state.scroll.interpolate({
         inputRange: [0, SCROLLABLE_HEIGHT],
         outputRange: [0, -SCROLLABLE_HEIGHT],
         extrapolate: 'clamp',
       })

       return (
         <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
           <ImageBackground
             source={{ uri: 'https://picsum.photos/800' }}
             style={styles.cover}>
             <View style={{backgroundColor:'transparent', width:'100%', height:45, opacity:0.5}}>
             </View>
             <TabBar {...props} style={styles.tabbar} />
           </ImageBackground>
         </Animated.View>
       )
     }

     _renderScene = () => {
       return (
         <ContactsList
           scrollEventThrottle={1}
           onScroll={Animated.event(
             [{ nativeEvent: { contentOffset: { y: this.state.scroll } } }],
             { useNativeDriver: true }
           )}
           contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
         />
       )
     }

     _renderScene = () => {
       return (
         <ContactsList
           scrollEventThrottle={1}
           onScroll={Animated.event(
             [{ nativeEvent: { contentOffset: { y: this.state.scroll } } }],
             { useNativeDriver: true }
           )}
           contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
         />
       )
     }

    render() {
      return (
      <SafeAreaView style={{flex:1}}>
       <TabView
       style={styles.container}
       navigationState={this.state}
      renderScene={this._renderScene}
      renderTabBar={this._renderHeader}
      onIndexChange={this._handleIndexChange}
      useNativeDriver
      />
     </SafeAreaView>
     )
   }
  }

  const styles = StyleSheet.create({
   container: {
     flex: 1,

   },
   overlay: {
     flex: 1,
     backgroundColor: 'rgba(0, 0, 0, .32)',
   },
   cover: {
     height: HEADER_HEIGHT,
   },
   header: {
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     zIndex: 1,
   },
   tabbar: {
     backgroundColor: 'transparent',
     elevation: 0,
     shadowOpacity: 0,
   },
  })
