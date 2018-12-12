import React,  {Component} from 'react'
import {View, Text, TextInput, Image} from 'react-native'
import { Button } from 'react-native-elements'


class FindPassWordScreen extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'flex-start', alignItems:'center',backgroundColor:'white'}}>
        <View style={{height:100, width:'100%', backgroundColor:'white',justifyContent:'center'}}>
          <Text style={{paddingLeft:20, paddingTop:20, fontSize: 20, fontWeight:'bold'}}> 비밀번호 찾기 </Text>
        </View>

        <View style={{width:'100%', height:250, backgroundColor:'white'}}>
          <View style={{paddingLeft:20, height:150, width:150, backgroundColor:'white'}}>
            <Image source={require('../assets/drawable-hdpi/assets_findpassword.png')}
                   style={{flex:1}}/>
          </View>
          <View style={{width:'100%', height:100}}>
            <Text style={{ paddingLeft:20, paddingTop:20, fontSize: 20, fontWeight:'bold'}}> 비밀번호를 잊으셨나요? </Text>
            <Text style={{ paddingLeft:20, fontSize: 10}}> 기존에 가입하신 이메일 주소를 입려하세요. </Text>
            <Text style={{ paddingLeft:20, fontSize: 10}}> 비밀번호 변경 메일을 보내드립니다. </Text>
          </View>

        </View>

        <View style={{paddingLeft:20, height:55, width:320, backgroundColor:'#E0E0E0', marginTop:10, borderRadius:10,justifyContent:'flex-start',flexDirection:'row', alignItems:'center'}}>
        <TextInput placeholder='비밀번호'/>
        </View>

        <Button
        title="비밀번호 변경 메일 받기"
        textStyle={{color:'gray'}}
        buttonStyle={{height:55, width:320, justifyContent:'center', alignItems:'center',backgroundColor: '#FDD835', marginTop:10, borderRadius:10}}/>
      </View>
    )
  }
}

export default FindPassWordScreen
