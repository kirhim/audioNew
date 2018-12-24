import React, {Component} from "react";
import {Animated, Dimensions, Platform, Text, View, StyleSheet } from 'react-native';
import {Body, Header, List, ListItem as Item, ScrollableTab, Tab, Tabs, Title} from "native-base";
import Second from './Second'

import Category from '../components/Category'
import { store } from './mobxStore'
var config = require('./app_config.json');

const NAVBAR_HEIGHT = 69;
const {width: SCREEN_WIDTH} = Dimensions.get("window");
const COLOR = "rgb(45,181,102)";
const TAB_PROPS = {
  tabStyle: {width: SCREEN_WIDTH / 2, backgroundColor: COLOR},
  activeTabStyle: {width: SCREEN_WIDTH / 2, backgroundColor: COLOR},
  textStyle: {color: "white"},
  activeTextStyle: {color: "white"}
};

class MainScreen extends Component {
  scroll = new Animated.Value(0);
    headerY;

    constructor(props) {
      super(props);
      this.headerY = Animated.multiply(Animated.diffClamp(this.scroll, 0, NAVBAR_HEIGHT), -1);
    }

  render() {
    const tabContent = (
        <Second/>);

            const tabContent2 = (
              <List>{new Array(20).fill(null).map((_, i) => <Item
                key={i}><Text>Itemgrwgwrgg {i}</Text></Item>)}</List>);


        const tabY = Animated.add(this.scroll, this.headerY);
        return (
          <View>
            {Platform.OS === "ios" &&
            <View style={{backgroundColor: COLOR, height: 20, width: "100%", position: "absolute", zIndex: 2}}/>}
            <Animated.View style={{
              width: "100%",
              position: "absolute",
              transform: [{
                translateY: this.headerY
              }],
              elevation: 0,
              flex: 1,
              zIndex: 1,
              backgroundColor: COLOR
            }}>
              <Header style={{backgroundColor: "gray"}} hasTabs>
                <Body>
                <Title>
                  <Text style={{color: "white"}}>
                    Collapsing Navbar
                  </Text>
                </Title>
                </Body>
              </Header>
            </Animated.View>
            <Animated.ScrollView
              scrollEventThrottle={1}
              bounces={false}
              showsVerticalScrollIndicator={false}
              style={{zIndex: 0, height: "100%", elevation: -1}}
              contentContainerStyle={{paddingTop: NAVBAR_HEIGHT}}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: this.scroll}}}],
                {useNativeDriver: true},
              )}
              overScrollMode="never">
              <Tabs renderTabBar={(props) => <Animated.View
                style={[{
                  transform: [{translateY: tabY}],
                  zIndex: 1,
                  width: "100%",
                  backgroundColor: COLOR
                }, Platform.OS === "ios" ? {paddingTop: 20} : null]}>
                <ScrollableTab {...props} underlineStyle={{backgroundColor: "white"}}/>
              </Animated.View>
              }>
                <Tab heading="Tab 1" {...TAB_PROPS}>
                  {tabContent}
                </Tab>
                <Tab heading="Tab 2" {...TAB_PROPS}>
                  {tabContent2}
                </Tab>
              </Tabs>
            </Animated.ScrollView>
          </View>
        );
      }
    }

              const styles = StyleSheet.create({
                container: {
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#F5FCFF',
                  },

                  HeaderStyle:
                  {
                  flex:1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: (Platform.OS == 'ios') ? 45 : 0,
                  },
                  HeaderInsideTextStyle:
                  {
                  color: "#fff",
                  fontSize: 18,
                  textAlign: 'center'
                  },
                  TextViewStyle:
                  {
                  textAlign: 'center',
                  color: "#000",
                  fontSize: 18,
                  margin: 5,
                  padding: 7,
                  backgroundColor: "#ECEFF1"
                  }
                  });

export default MainScreen
