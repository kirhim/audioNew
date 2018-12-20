import React,  {Component} from 'react'
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native'
import Slides from '../components/Slides'
import { Button } from 'react-native-elements'
import { LoginButton, AccessToken } from 'react-native-fbsdk';


import { store } from './mobxStore'
import { AsyncTrunk } from 'mobx-sync'
import { AsyncStorage } from "react-native"
var config = require('./app_config.json');

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

const trunk = new AsyncTrunk(store, {
  /**
   * @desc custom storage: built in storage is supported
   *  - localStorage
   *  - sessionStorage
   *  - ReactNative.AsyncStorage
   */
  storage: AsyncStorage,
  /**
   * @desc custom storage key, the default is `__mobx_sync__`
   */
  storageKey: '__persist_mobx_stores__',
});

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }

  componentWillMount() {

    trunk.init().then(() => {
      // do any staff with loaded store
      if (store.memberObject.idx != undefined) {
        //alert('자동 로그인 합니다.');
        this.props.navigation.navigate('App');
      }
    })
    console.log(store.memberObject, 'initail memberObject')

  }


  getMemberInfoFromServer(userid) {
    //Keyboard.dismiss();
    //console.log("test");

    const url = config.api_server_url + 'auth/login';

    fetch(url, {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        facebookToken: userid
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error.includes("No user")) {

          //1-2. 만약 토큰이 서버DB에 존재하지 않는다면, 신규 회원이므로, 신규회원 가입 절차를 진행한다.
          //1-2-1. 페이스북 토큰을 store에 저장한다.
          store.memberObject = {};
          store.memberObject.facebookToken = userid

          //1-2-2. 저장 후 신규 회원 가입 화면으로 이동한다.
          this.props.navigation.navigate('register');

        }
        else {
          console.log(responseJson);

          //1-1-2. 가져온 회원 정보를 store에 저장한다
          //store에 responseJson.data 저장할것.
          store.memberObject = responseJson.data[0];

          //푸시 토큰 업데이트
          //store.memberObject.pushToken = store.memberDevToken;
          //store.memberObject.os = store.memberOS;

          //1-1-3. store값을 trunk에 저장한다.
          trunk.updateStore(store)
            .then(() => {

              //1-1-4. 저장 완료 후 메인 화면으로 이동한다.
              this.props.navigation.navigate('App');
            });

          //Keyboard.dismiss();

        }
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });

    //this.props.screenProps.setEmail(this.state.email);
    //this.props.navigation.navigate('Sub')
  }

  onFacebookLogin(error, result) {

      if (error) {
        console.log("login has error: " + result.error);
      } else if (result.isCancelled) {
        console.log("login is cancelled.");
      } else {
        AccessToken.getCurrentAccessToken().then(
          (data) => {
            console.log('facebook login success!')
            console.log('facebook userid is:', data)

            //1. 받아온 페이스북 토큰이 서버DB의 멤버테이블에 이미 있는지 확인해서 있으면 가져오고 스토어 및 트렁크에 저장.
            this.getMemberInfoFromServer(data.userID);
          }
        )
        //this.props.navigation.navigate('PhoneCode')
      }

    }

  render() {
    return (
      <View style={{flex:1}}>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
        <View style={{width:SCREEN_WIDTH, height:250, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
        <LoginButton
            title="페이스북으로 로그인하기"
            style={[styles.buttonStyle, {backgroundColor: '#4B67AD',justifyContent:'center', alignItems:'center',}]}
            onLoginFinished={(error, result) => {
                this.onFacebookLogin(error, result)
              }}
              onLogoutFinished={() => console.log("logout.")} />

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
  },

}
export default WelcomeScreen
