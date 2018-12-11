import React, { Component } from 'react'
import { View, Text, ScrollView, SafeAreaView, Dimensions,Image} from 'react-native'
import { Button } from 'react-native-elements'
const SCREEN_WIDTH = Dimensions.get('window').width


class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1){
      return (
        <Button title="시작하기!"
                raised
                buttonStyle={styles.buttonStyle}
                onPress={this.props.onComplete}/>
      )
    }
  }
  renderSlides(){
    return this.props.data.map((slide, index)=> {
      return(
      <View key={slide.text}
            style={[styles.slideStyle,{backgroundColor:slide.color}]}
            >
      <Image source={slide.image}
             style={{height:400, width:SCREEN_WIDTH}}/>
        <Text style={styles.textStyle}>{slide.text}</Text>
        {this.renderLastSlide(index)}
      </View>
     )
    })
  }

  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView
          style={{flex:1}}
          horizontal
          pagingEnabled
          >
          {this.renderSlides()}
        </ScrollView>
        <View style={{width:SCREEN_WIDTH, height:300, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
        <Button
            title="페이스북으로 로그인하기"
            raised
            buttonStyle={[styles.buttonStyle, {backgroundColor: '#4B67AD',justifyContent:'center', alignItems:'center',}]}/>

        <Button
          raised
          title="카카오톡 로그인"
          textStyle={{color:'black'}}
          buttonStyle={[styles.buttonStyle,{justifyContent:'center', alignItems:'center',backgroundColor: '#FFFF00'}]}/>

        <Button
          raised
          title="이메일로 로그인하기"
          textStyle={{color:'white'}}
          buttonStyle={[styles.buttonStyle,{justifyContent:'center', alignItems:'center',backgroundColor: 'gray'}]}/>

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

export default Slides
