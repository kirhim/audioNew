
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation'

import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import DeckScreen from './screens/DeckScreen'
import MapScreen from './screens/MapScreen'
import SettingsScreen from './screens/SettingsScreen'
import ReviewScreen from './screens/ReviewScreen'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  welcome: WelcomeScreen,
  auth: AuthScreen,
  main:{
    screen:createBottomTabNavigator({
          map:MapScreen,
          deck:DeckScreen,
          review:{
            screen:createStackNavigator({
              review:ReviewScreen,
              settings:SettingsScreen
          })
        }
      })
    }
  },{
      navigationOptions:{
        tabBarVisible:false
      }
    })


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default createAppContainer(TabNavigator)
