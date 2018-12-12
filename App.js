
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation'
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import DeckScreen from './screens/DeckScreen'
import MapScreen from './screens/MapScreen'
import SettingsScreen from './screens/SettingsScreen'
import ReviewScreen from './screens/ReviewScreen'
import EmailLoginScreen from './screens/EmailLoginScreen'
import FindPassWordScreen from './screens/FindPassWordScreen'
import RegisterScreen from './screens/RegisterScreen'
import AgreementScreen from './screens/AgreementScreen'
import MainScreen from './screens/MainScreen'


console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const TabNavigator = createStackNavigator({
  welcome: {
  screen: WelcomeScreen,
  navigationOptions: {
      header: null
    },
  },
  email: {
  screen: EmailLoginScreen,
  navigationOptions: {
      header: null
    },
  },
  password: {
  screen: FindPassWordScreen,
  navigationOptions: {
      header: null
    },
  },
  register: {
  screen: RegisterScreen,
  navigationOptions: {
      header: null
    },
  },
  agree: {
  screen: AgreementScreen,
  navigationOptions: {
      header: null
    },
  },
  home: {
  screen: MainScreen,
  navigationOptions: {
      header: null
    },
  },
  main:{
    screen:createBottomTabNavigator({
          map:MapScreen,
          deck:DeckScreen,
          review:{
            screen:createStackNavigator({
              review:ReviewScreen,
              settings:SettingsScreen,

          })
        }
      })
    }
  },{
      navigationOptions:{
        tabBarVisible:false,
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
