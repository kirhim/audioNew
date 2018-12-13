
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
import { Icon, Container, Content, Header, Left, Body, Right, List, ListItem} from 'native-base'


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

const CustomDrawerContentComponent = (props)=> {
  return(
  <SafeAreaView style={{flex:1}}>
    <View style={{ height:100, backgroundColor: 'white' }}>
      <Image
            style={{marginLeft:20,height:100,width:100,borderRadius:50}}
            source={require('./assets/puppy.jpg')}/>
    </View>

    <View style={{margin:20}}>
    <TouchableOpacity
        style={{marginTop:0,flexDirection:'row', alignItems:'center'}}
        onPress={()=> {props.navigation.navigate('profile')}}>
      <Text style={{fontSize:18, fontWeight:'bold'}}>백주부</Text>

      <Image
            style={{height:12,width:12}}
            source={require('./assets/drawable-hdpi/ic_arrow_depth.png')}/>
    </TouchableOpacity>
    </View>

    <View style={{flexDirection:'row', marginLeft:20, alignItems:'center'}}>
      <Text>구독자</Text>
      <Image
            style={{height:12,width:12,marginLeft:5, marginRight:5, }}
            source={require('./assets/drawable-hdpi/ic_follower.png')}/>
      <Text style={{fontWeight:'bold', color:'#f9de4b'}}>200</Text>

      <Text style={{marginLeft:10}}> 총 조회수 </Text>
      <Text style={{fontWeight:'bold', color:'#f9de4b'}}>1,849</Text>
    </View>

    <ScrollView style={{borderColor:'gray',borderTopWidth:0.3, paddingTop:20}}>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
  )
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
  profile: {
  screen: MyProfileScreen,
  navigationOptions: {
      header: null
    }
  },
  Home: {
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
 }),
  navigationOptions: {
      header: null
    }
   }
  })

  const AppDrawerNavigator = createDrawerNavigator({
    홈: AppStackNavigator,
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
      App: AppDrawerNavigator,
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
