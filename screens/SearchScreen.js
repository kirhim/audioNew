import React,  {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import { SearchBar, List, ListItem } from 'react-native-elements'


const list = [
  {
    name: '디저트',
  },
  {
    name: '단호박죽',
  },
  {
    name: '해물 어묵탕',
  },
  {
    name: '치즈버거',
  },
  {
    name: '강된장국',
  }
]

class SearchScreen extends Component {
  render() {
    return (
      <View>
      <View style={{marginLeft:20, justifyContent:'flex-start',alignItems:'center', flexDirection:'row'}}>

      <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('Home')}>
      <Image
             style={{height:20,width:20}}
             source={require('../assets/drawable-hdpi/ic_close_gray.png')}></Image>
      </TouchableOpacity>

      <SearchBar
              lightTheme
              showLoading
              containerStyle={{width:300,margin:20, borderRadius:10,backgroundColor:'#EEEEEE'}}
              inputStyle={{backgroundColor:'white'}}
              placeholder=' 검색'/>
      </View>

            <Text style={{marginLeft:25,fontSize:25, fontWeight:'bold'}}>최신 검색어</Text>
              <List containerStyle={{marginLeft:15,borderTopWidth:0, marginTop: 30, backgroundColor:'white', borderColor:'#EEEEEE'}}>
                {
                  list.map((l) => (
                    <ListItem
                      containerStyle={{height:45}}
                      roundAvatar
                      key={l.name}
                      title={l.name}
                      subtitle={l.subtitle}
                      hideChevron={true}
                    />
                  ))
                }
              </List>
      </View>
    )
  }
}

export default SearchScreen
