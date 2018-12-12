import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

class Category extends Component {
  render(){
  return(
    <View style={{height:this.props.height, width:this.props.width, marginLeft:20, backgroundColor:'white',paddingTop:10}}>
      <View style={{flex:2}}>
      <Image style={{flex:1, width:null, height: null, resizeMode:'cover', borderRadius:10}}
      source={this.props.imageUri}></Image>
      </View>
      <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
      <Text>{this.props.name}</Text>
      </View>
    </View>
  )
}
}

export default Category

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})
