import React,  {Component} from 'react'
import {View, Text, ImageBackground, Dimensions, TextInput,TouchableOpacity, Image} from 'react-native'
const SCREEN_WIDTH = Dimensions.get('window').width
import { Button, Icon } from 'react-native-elements'


class EmailLogin extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <ImageBackground source={require('../assets/welcome1.png')}
          style={{height:400, width:SCREEN_WIDTH}}>
          </ImageBackground>

          <View style={{height:380, backgroundColor:'white', borderRadius:10, marginTop:-10,justifyContent:'center', alignItems:'center'}}>

             <View style={{flex:1,justifyContent:'flex-start', alignItems:'center'}}>

                   <View style={{height: 55, width:340, alignItems:'center', backgroundColor:'white', marginBottom:30, marginTop:10, flexDirection:'row'}}>
                   <TouchableOpacity onPress={()=>this.props.navigation.navigate('welcome')}>
                     <Icon name="close"/>
                  </TouchableOpacity>

                     <Text style={{marginLeft:70,fontSize: 20, fontWeight:'bold'}}> 이메일로 로그인하기 </Text>
                   </View>

                   <View style={{paddingLeft:20,height:55, width:320, backgroundColor:'#E0E0E0', borderRadius:10,justifyContent:'flex-start', alignItems:'center',flexDirection:'row'}}>
                   <TextInput placeholder='EMAIL 입력'/>
                   </View>

                   <View style={{paddingLeft:20, height:55, width:320, backgroundColor:'#E0E0E0', marginTop:10, borderRadius:10,justifyContent:'flex-start',flexDirection:'row', alignItems:'center'}}>
                   <TextInput placeholder='비밀번호'/>
                   </View>

                   <Button
                   onPress={()=> this.props.navigation.navigate('Home')}
                   title="로그인"
                   textStyle={{color:'gray'}}
                   buttonStyle={{height:55, width:320, justifyContent:'center', alignItems:'center',backgroundColor: '#FDD835', marginTop:10, borderRadius:10}}/>

                   <TouchableOpacity
                   style={{marginTop:20}}
                   onPress={()=> this.props.navigation.navigate('password')}>
                     <Text>비밀번호찾기</Text>
                   </TouchableOpacity>
             </View>
         </View>
      </View>
    )
  }
}

export default EmailLogin
