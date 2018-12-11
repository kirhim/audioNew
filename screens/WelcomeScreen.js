import React,  {Component} from 'react'
import {View, Text, Image} from 'react-native'
import Slides from '../components/Slides'

const ImageNames = {
  welcome1: require('../assets/welcome1.png'),
  welcome2: require('../assets/welcome2.png'),
  welcome3: require('../assets/welcome3.png')
}

const SLIDE_DATA =[
  {image: ImageNames.welcome1, color:'#90CAF9', },
  {image: ImageNames.welcome2, color:'#EA80FC'},
  {image: ImageNames.welcome3, color:'#69F0AE'}
]

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }


  render() {
    return (
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
    )
  }
}

export default WelcomeScreen
