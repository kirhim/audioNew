
import React, {Component} from 'react';
import {StyleSheet, Text, View,Dimensions} from 'react-native';
import {createBottomTabNavigator, createAppContainer, createStackNavigator,createMaterialTopTabNavigator} from 'react-navigation'
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
import Second from './screens/Second'



console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1, marginTop:30}}>
        <AppContainer/>
      </View>
    );
  }
}

const tabBarHeight = 100


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
  screen: createMaterialTopTabNavigator({
    Home:{
    screen:MainScreen,
    navigationOptions: {
    header: null,
    tabBarVisible:true,
    activeTintColor: '#e91e63',
  }
 },
 Second:{
 screen: Second,
 navigationOptions: {
 header: null,
 tabBarVisible:true,
    }
  }
},{
  tabBarOptions: {
   showLabel: true,
    style: {
        backgroundColor: 'gray',
        position: 'absolute',
        Top:  Dimensions.get('window').height-tabBarHeight,
        left:0,
        right:0,
        opacity:0.5,
        marginTop:54
    },
    labelStyle:{
      fontSize:15,
      color:"white"
    }
  }
 }
),
  navigationOptions: {
      header: null
    },
  },
  main:{
    screen:createBottomTabNavigator({
          map:MapScreen,
          review:{
            screen:createStackNavigator({
              review:ReviewScreen,
              settings:SettingsScreen,
          })
        }
      })
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

const AppContainer = createAppContainer(TabNavigator)
