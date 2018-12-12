import React,  {Component} from 'react'
import {View, Text, Image, Dimensions, TextInput, SafeAreaView,TouchableOpacity} from 'react-native'
const SCREEN_WIDTH = Dimensions.get('window').width
import { Button, CheckBox } from 'react-native-elements'

class RegisterScreen extends Component {
  constructor(props) {
    super(props)
    console.log(props,'what is inside this')
    this.state ={
    service1:false,
    service2:false,
    }
  }

  render() {
     const { service1 } = this.state;
     const { service2 } = this.state;

    return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
      <View style={{width:'100%', height:70, justifyContent:'flex-start', alignItems:'flex-start',backgroundColor:'white'}}>
        <Text style={{paddingLeft:20, paddingTop:20, fontSize: 20, fontWeight:'bold'}}> 회원가입 </Text>
      </View>

      <View style={{width:'100%', height:150,justifyContent:'center', alignItems:'center',backgroundColor:'white'}}>
      <Image source={require('../assets/drawable-hdpi/assets_profile_empty.png')}
             style={{width:100,height:100}}/>
      </View>

      <View style={{marginTop:20, alignItems:'center'}}>
      <View style={{paddingLeft:20, width:320, height:60, backgroundColor:'white', borderRadius:10, justifyContent:'center'}}>
        <TextInput placeholder='닉네임 입력'/>
      </View>
      </View>

      <View style={{marginTop:20, alignItems:'center'}}>
      <View style={{paddingLeft:20, width:320, height:60, backgroundColor:'#EEEEEE', borderRadius:10, justifyContent:'center'}}>
        <TextInput placeholder='Email 입력'/>
      </View>
      </View>

      <View style={{marginTop:20, alignItems:'center'}}>
      <View style={{paddingLeft:20, width:320, height:60, backgroundColor:'#EEEEEE', borderRadius:10, justifyContent:'center'}}>
        <TextInput placeholder='비밀번호'/>
      </View>
      </View>

      <View style={{marginTop:20, alignItems:'center'}}>
      <View style={{paddingLeft:20, width:320, height:60, backgroundColor:'#EEEEEE', borderRadius:10, justifyContent:'center'}}>
        <TextInput placeholder='비밀번호 확인'/>
      </View>
      </View>

      <View style={{alignItems:'flex-start', flexDirection:'row', justifyContent:'space-between'}}>
      <CheckBox
        containerStyle={{backgroundColor:'transparent', borderWidth:0}}
        title='서비스 이용약관 동의'
        checked={this.state.service1}
        onPress={() => this.setState({service1: !service1})}
      />

      <TouchableOpacity
      onPress={()=> this.props.navigation.navigate('agree')}>
      <Text style={{paddingTop:18, paddingRight:20}}>보기</Text>
      </TouchableOpacity>
      </View>


      <View style={{alignItems:'flex-start', flexDirection:'row', justifyContent:'space-between'}}>
      <CheckBox
        title='개인정보 수집 및 이용 동의'
        containerStyle={{backgroundColor:'transparent', borderWidth:0}}
        checked={this.state.service2}
        onPress={() => this.setState({service2: !service2})}
      />

      <TouchableOpacity
      onPress={()=> this.props.navigation.navigate('agree')}>
      <Text style={{paddingTop:18, paddingRight:20}}>보기</Text>
      </TouchableOpacity>
      </View>

      <Button
        title="카카오톡 로그인"
        textStyle={{color:'black'}}
        buttonStyle={{justifyContent:'center', alignItems:'center',backgroundColor: '#f9de4b', borderRadius:10}}/>

      </View>
    </SafeAreaView>
    )
  }
}

export default RegisterScreen
