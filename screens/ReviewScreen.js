import React,  {Component} from 'react'
import {View, Text, Alert, Platform} from 'react-native'
import {Button} from 'react-native-elements'

class ReviewScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
    title:'Review Jobs',
    headerRight: (
      <Button
        onPress={()=> navigation.navigate('settings')}
        title="Settings"
        color="rgba(0,122,255,1)"
        backgroundColor="transparent"
      />
    ),
    style:{
      marginTop:Platform.OS === 'android' ? 24: 0
     }
    }
  }

  render() {
    return (
      <View>
        <Text> ReviewScreen </Text>
      </View>
    )
  }
}

export default ReviewScreen
