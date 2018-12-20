
import React, {Component} from 'react';
import {StyleSheet,ScrollView, Text, View,Dimensions, FlatList, SafeAreaView, Image,TouchableOpacity} from 'react-native';
import {createBottomTabNavigator,
        createAppContainer,
        createStackNavigator,
        createMaterialTopTabNavigator,
        createDrawerNavigator,
        createSwitchNavigator, DrawerItems} from 'react-navigation'
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
import Fourth from './screens/Fourth'
import NotificationScreen from './screens/NotificationScreen'
import MyRecipeScreen from './screens/MyRecipeScreen'
import MySubScriptionScreen from './screens/MySubScriptionScreen'
import BoardScreen from './screens/BoardScreen'
import LogoutScreen from './screens/LogoutScreen'
import SearchScreen from './screens/SearchScreen'
import MyProfileScreen from './screens/MyProfileScreen'
import ProfileEditScreen from './screens/ProfileEditScreen'
import MakeRecipeScreen from './screens/MakeRecipeScreen'
import CookingRegisterScreen from './screens/CookingRegisterScreen'
import CustomDrawerContentComponent from './screens/CustomDrawerContentComponent'


import { Icon, Container, Content, Header, Left, Body, Right, List, ListItem} from 'native-base'
import { store } from './screens/mobxStore'
var config = require('./screens/app_config.json');

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
const AppStackNavigator = createStackNavigator({
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
    }
  },
  search: {
  screen: SearchScreen,
  navigationOptions: {
      header: null
    }
  },
  edit: {
  screen: ProfileEditScreen,
  navigationOptions: {
      header: null
    }
  },
  make:{
  screen: MakeRecipeScreen,
  navigationOptions: {
      header: null
    }
  },
  cook:{
  screen: CookingRegisterScreen,
  navigationOptions: {
      header: null
    }
  },



  Home: {
  screen: createDrawerNavigator({
    Home: MainScreen,
    공지사항: BoardScreen,
    알람설정: NotificationScreen,
    나의레시피관리:MyRecipeScreen,
    구독하는요리사목록:MySubScriptionScreen,
    로그아웃:LogoutScreen,
    profile:MyProfileScreen
  },{
  contentComponent:CustomDrawerContentComponent,
  contentOptions: {
    activeBackgroundColor:'#f9de4b',
    activeTintColor:'black',
    itemsContainerStyle:{margin:5},
    style: {
      marginVertical: 100,
    }
  }
}),
  navigationOptions: {
      header: null
    }
   }
  })

  const AppDrawerNavigator = createDrawerNavigator({
    Home: AppStackNavigator,
    공지사항: BoardScreen,
    알람설정: NotificationScreen,
    나의레시피관리:MyRecipeScreen,
    구독하는요리사목록:MySubScriptionScreen,
    로그아웃:LogoutScreen
  },{
  contentComponent:CustomDrawerContentComponent,
  contentOptions: {
    activeBackgroundColor:'#f9de4b',
    activeTintColor:'black',
    itemsContainerStyle:{margin:5},
    style: {
      marginVertical: 100,
    }
  }
})

  const StartSwitchNavigator = createSwitchNavigator(
    {
      App: AppStackNavigator,
      ki: CookingRegisterScreen
    },
    {
      initialRouteName: 'App',
    }
  )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const AppContainer = createAppContainer(StartSwitchNavigator)
