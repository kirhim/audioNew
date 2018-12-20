import React,  {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions,ScrollView} from 'react-native'
import {createBottomTabNavigator,
        createAppContainer,
        createStackNavigator,
        createMaterialTopTabNavigator,
        createDrawerNavigator,
        createSwitchNavigator, DrawerItems} from 'react-navigation'
const SCREEN_WIDTH = Dimensions.get('window').width

class MyProfileScreen extends Component {
  state = {
    switchOne: false,
    switchTwo: false
          }

  render() {
    return (
      <View style={{flex:1, backgroundColor:'white',}}>
        <View style={{height:80, width:'100%', backgroundColor:'#f9de4b', flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity
            style={{marginTop:0}}
            onPress={()=>this.props.navigation.openDrawer()}>
           <Image
                  style={{ marginLeft:20,height:20,width:20}}
                  source={require('../assets/drawable-hdpi/ic_menu_brown.png')}></Image>
          </TouchableOpacity>
          <Text style={{paddingLeft:30, fontSize:20, fontWeight:'bold'}}> 프로필 관리 </Text>
        </View>


        <View style={{ backgroundColor:'white',width:'100%', height:150, flexDirection:'row',justifyContent:'center', alignItems:'center'}}>

          <View style={{width:120,height:120, justifyContent:'center', alignItems:'center'}}>
            <Image
                   style={{ height:100,width:100, borderRadius:50}}
                   source={require('../assets/puppy.jpg')}>
            </Image>
          </View>

          <View style={{width:240, height:120,justifyContent:'center', alignItems:'center'}}>
             <View style={{ flexDirection:'row',}}>
              <View style={{width:70, height:60,justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'gray'}}>레시피</Text>
                <Text>140</Text>
              </View>
              <View style={{width:70, height:60,justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'gray'}}>구독</Text>
                <Text>1,563</Text>
              </View>
              <View style={{width:70, height:60, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'gray'}}>요리사 목록</Text>
                <Text>28</Text>
              </View>
             </View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('edit')}>
             <View style={{ width:240,height: 40, justifyContent:'center', alignItems:'center', borderRadius:10, borderWidth:1, borderColor:'#E0E0E0' }}>
                 <Text>프로필 수정</Text>
             </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginLeft: 10, width:'100%', height:80,  justifyContent:'center', alignItems:'flex-start'}}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>박주부</Text>
          <Text style={{fontSize:15, color:'gray'}}>박주부의 하루하루 즐거운 레시피입니다.</Text>
          <Text style={{fontSize:15, color:'gray'}}>간편하게 먹을 수 있는 요리를 합니다.</Text>
        </View>
        <ScrollView>
        <View style={{backgroundColor:'#F5F5F5', flex:1, borderColor:'#EEEEEE', borderTopWidth:0.5}}>
          <View style={{margin:10, backgroundColor:'tansparent', height:220, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>

            <View style={{margin:5,height:210, width:160, backgroundColor:'tansparent'}}>
              <Image
                     style={{height:160,width:160,borderRadius:10}}
                     source={require('../assets/panCake.jpg')}></Image>
                     <Text style={{marginLeft:-2, fontSize:15,fontWeight:'bold',color:'gray', paddingTop:10}}> 무화과 와플 </Text>
                      <View style={{flexDirection:'row'}}>
                       <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}> 난이도</Text>
                         <Image
                                 style={{ height:10,width:10}}
                                 source={require('../assets/drawable-hdpi/assets_star_full.png')}></Image>
                         <Image
                                 style={{ height:10,width:10}}
                                 source={require('../assets/drawable-hdpi/assets_star_full.png')}></Image>
                         <Image
                                 style={{ height:10,width:10}}
                                 source={require('../assets/drawable-hdpi/assets_star_empty.png')}></Image>
                                 <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}> 40분</Text>
                      </View>
            </View>

            <View style={{margin:5,height:210, width:160, backgroundColor:'tansparent'}}>
            <Image
                   style={{height:160,width:160, borderRadius:10}}
                   source={require('../assets/icecream.jpg')}></Image>
                   <Text style={{marginLeft:-2, fontSize:15,fontWeight:'bold',color:'gray', paddingTop:10}}> 아이스크림 </Text>
                    <View style={{flexDirection:'row'}}>
                     <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}> 난이도</Text>
                       <Image
                               style={{ height:10,width:10}}
                               source={require('../assets/drawable-hdpi/assets_star_full.png')}></Image>
                       <Image
                               style={{ height:10,width:10}}
                               source={require('../assets/drawable-hdpi/assets_star_full.png')}></Image>
                       <Image
                               style={{ height:10,width:10}}
                               source={require('../assets/drawable-hdpi/assets_star_empty.png')}></Image>
                               <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}> 10분</Text>
                    </View>

            </View>
          </View>
          <View style={{margin:10, backgroundColor:'tansparent', height:220, flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
            <View style={{margin:5,height:210, width:160, backgroundColor:'tansparent'}}>
            <Image
                   style={{height:160,width:160,borderRadius:10}}
                   source={require('../assets/cokkie.jpg')}></Image>
                   <Text style={{marginLeft:-2, fontSize:15,fontWeight:'bold',color:'gray', paddingTop:10}}> 초콜렛 쿠키 </Text>
                    <View style={{flexDirection:'row'}}>
                     <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}> 난이도</Text>
                       <Image
                               style={{ height:10,width:10}}
                               source={require('../assets/drawable-hdpi/assets_star_full.png')}></Image>
                       <Image
                               style={{ height:10,width:10}}
                               source={require('../assets/drawable-hdpi/assets_star_full.png')}></Image>
                       <Image
                               style={{ height:10,width:10}}
                               source={require('../assets/drawable-hdpi/assets_star_empty.png')}></Image>
                               <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}> 30</Text>
                    </View>
            </View>
            <View style={{margin:5,height:210, width:160, backgroundColor:'tansparent'}}>
            <Image
                   style={{height:160,width:160,borderRadius:10}}
                   source={require('../assets/dessert.jpg')}></Image>
                   <Text style={{marginLeft:-2, fontSize:15,fontWeight:'bold',color:'gray', paddingTop:10}}> 펜 케익 </Text>
                    <View style={{flexDirection:'row'}}>
                     <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}> 난이도</Text>
                       <Image
                               style={{ height:10,width:10}}
                               source={require('../assets/drawable-hdpi/assets_star_full.png')}></Image>
                       <Image
                               style={{ height:10,width:10}}
                               source={require('../assets/drawable-hdpi/assets_star_full.png')}></Image>
                       <Image
                               style={{ height:10,width:10}}
                               source={require('../assets/drawable-hdpi/assets_star_empty.png')}></Image>
                               <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}> 9분</Text>
                    </View>
            </View>
            </View>
        </View>
        </ScrollView>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listStyle:{
    marginLeft:15,
    height:70,
    width:'100%',
    backgroundColor:'white',
    borderBottomWidth:1,
    borderColor:'#F5F5F5',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },
  textStyleOne:{
    fontSize:15,
    fontWeight:'bold',
    color:'gray'
  },
  textStyleTwo:{
    fontSize:12,
    color:'gray'
  }
});

export default MyProfileScreen
