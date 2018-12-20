import React,  {Component} from 'react'
import {View, Text,TouchableOpacity,SafeAreaView,Image,ScrollView} from 'react-native'
import {createBottomTabNavigator,
        createAppContainer,
        createStackNavigator,
        createMaterialTopTabNavigator,
        createDrawerNavigator,
        createSwitchNavigator, DrawerItems} from 'react-navigation'
import { store } from './mobxStore'
var config = require('./app_config.json');

class CustomDrawerContentComponent extends Component {
  constructor(props){
     super(props);
 }
  render(){
  return(
  <SafeAreaView style={{flex:1}}>
    <View style={{ height:100, backgroundColor: 'white' }}>
      <Image
            style={{marginLeft:20,height:100,width:100,borderRadius:50}}
            source={require('../assets/puppy.jpg')}/>
    </View>

    <View style={{margin:20}}>
    <TouchableOpacity
        style={{marginTop:0,flexDirection:'row', alignItems:'center'}}
        onPress={()=> {this.props.navigation.navigate('profile')}}>

      <Text style={{fontSize:18, fontWeight:'bold'}}>{store.memberObject.userName}</Text>

      <Image
            style={{height:12,width:12}}
            source={require('../assets/drawable-hdpi/ic_arrow_depth.png')}/>
    </TouchableOpacity>
    </View>

    <View style={{flexDirection:'row', marginLeft:20, alignItems:'center'}}>
      <Text>구독자</Text>
      <Image
            style={{height:12,width:12,marginLeft:5, marginRight:5, }}
            source={require('../assets/drawable-hdpi/ic_follower.png')}/>
      <Text style={{fontWeight:'bold', color:'#f9de4b'}}>200</Text>

      <Text style={{marginLeft:10}}> 총 조회수 </Text>
      <Text style={{fontWeight:'bold', color:'#f9de4b'}}>1,849</Text>
    </View>

    <ScrollView style={{borderColor:'gray',borderTopWidth:0.3, paddingTop:20}}>
      <DrawerItems {...this.props}/>
    </ScrollView>
  </SafeAreaView>
  )
 }
}

export default CustomDrawerContentComponent
