import React,  {Component} from 'react'
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native'
import Slides from '../components/Slides'
import { Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width

const ImageNames = {
  welcome1: require('../assets/welcome1.png'),
  welcome2: require('../assets/welcome2.png'),
  welcome3: require('../assets/welcome3.png')
}

const SLIDE_DATA =[
  {image: ImageNames.welcome1, color:'transparent'},
  {image: ImageNames.welcome2, color:'transparent'},
  {image: ImageNames.welcome3, color:'transparent'}
]

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }


  render() {
    return (
      <View style={{flex:1}}>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
        <View style={{width:SCREEN_WIDTH, height:250, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
        <Button
            title="페이스북으로 로그인하기"
            raised
            buttonStyle={[styles.buttonStyle, {backgroundColor: '#4B67AD',justifyContent:'center', alignItems:'center',}]}/>

        <Button
          raised
          title="카카오톡 로그인"
          textStyle={{color:'black'}}
          buttonStyle={[styles.buttonStyle,{justifyContent:'center', alignItems:'center',backgroundColor: '#f9de4b'}]}/>

        <Button
          onPress={()=>this.props.navigation.navigate('email') }
          raised
          title="이메일로 로그인하기"
          textStyle={{color:'white'}}
          buttonStyle={[styles.buttonStyle,{justifyContent:'center', alignItems:'center',backgroundColor: 'gray'}]}/>

        </View>
        <View style={{width:SCREEN_WIDTH, height:50, backgroundColor:'white',justifyContent:'space-between', alignItems:'center', flexDirection:'row',padding:10}}>
          <Text> 아직 회원이 아니세요?</Text>

          <TouchableOpacity onPress={()=> this.props.navigation.navigate('register')}>
            <Text> 회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = {
  slideStyle: {
    flex:1,
    justifyContent:'flex-start',
    padding:10,
    alignItems: 'center',
    width:SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 20,
    color:'white'
  },
  buttonStyle:{
    marginTop: 15,
    height:50,
    width:320,
    borderRadius:10
  }
}
export default WelcomeScreen
