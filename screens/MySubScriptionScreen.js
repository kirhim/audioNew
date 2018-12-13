import React,  {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native'
import { List, ListItem } from 'react-native-elements'


const list = [
  {
    name: '요리술사',
    subtitle: '요리는 또다른 이름의 예술'
  },
  {
    name: '요리술사',
    subtitle: '요리는 또다른 이름의 예술'
  },
  {
    name: '나도요리사',
    subtitle: '요리는 정성이야!'
  },
  {
    name: '똥양꿈좋아',
    subtitle: '태국은 음식의 나라'
  },
  {
    name: '이딸리아레시피',
    subtitle: '본토의 맛을 내는 비법'
  }
]

class MySubScriptionScreen extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:'white',}}>
        <View style={{height:80, width:'100%', backgroundColor:'#f9de4b', flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity
            style={{marginTop:0}}
            onPress={()=>this.props.navigation.openDrawer()}>
           <Image
                  style={{ marginLeft:20,height:20,width:20}}
                  source={require('../assets/drawable-hdpi/ic_menu_brown.png')}></Image>
          </TouchableOpacity>
          <Text style={{paddingLeft:30, fontSize:20, fontWeight:'bold'}}> 구독하는 요리사 목록 </Text>
        </View>

  <List containerStyle={{marginTop: -20, backgroundColor:'white'}}>
    {
      list.map((l) => (
        <ListItem
          roundAvatar
          avatar={{uri:l.avatar_url}}
          key={l.name}
          title={l.name}
          subtitle={l.subtitle}
          hideChevron={true}
          avatar={require('../assets/puppy.jpg')}
        />
      ))
    }
  </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listStyle:{
    marginLeft:15,
    height:70,
    width:'100%',
    backgroundColor:'white',
    borderBottomWidth:1,
    borderColor:'#F5F5F5',
    justifyContent:'center'
  },
  textStyleOne:{
    fontSize:15,
    fontWeight:'bold',
    color:'gray'
  },
  textStyleTwo:{
    fontSize:12,
    color:'gray'
  }
});

export default MySubScriptionScreen
