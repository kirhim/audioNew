import React,  {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native'
import axios from 'axios'
import { List, ListItem } from 'react-native-elements'

import { store } from './mobxStore'
var config = require('./app_config.json');

class BoardScreen extends Component {

  constructor(props) {
     super(props);
     this.state = { movies: [] };
   }

   componentWillMount() {
    axios.get('http://audiorecipe.q29cnumfwc.ap-northeast-2.elasticbeanstalk.com/audiorecipe/v1.0/news?offset=0')
      .then(response => this.setState({ movies: response.data }));
  }

  renderMovie() {
    return this.state.movies.data.map(movies => <Text key={movies.id}>{movies.title}</Text>)
  }

  render() {
    if(this.state.movies.length === 0) {
     return null;
   }


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
          <Text style={{paddingLeft:30, fontSize:20, fontWeight:'bold'}}>  </Text>
        </View>

          <FlatList
          data={this.state.movies.data}
          keyExtractor={(x, i)=> i}
          renderItem={({item}) =>
                            <ListItem
                            title={item.title}
                            subtitle={item.content}
                            />}
                          />


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

export default BoardScreen
