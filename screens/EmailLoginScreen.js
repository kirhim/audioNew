import React,  {Component} from 'react'
import {View, Text, ImageBackground, Dimensions, TextInput,TouchableOpacity, Image} from 'react-native'
const SCREEN_WIDTH = Dimensions.get('window').width
import { Button } from 'react-native-elements'


class EmailLogin extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <ImageBackground source={require('../assets/welcome1.png')}
          style={{height:400, width:SCREEN_WIDTH}}>
          </ImageBackground>

        
      </View>
    )
  }
}

export default EmailLogin
