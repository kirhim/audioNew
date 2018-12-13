import React,  {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

class BoardScreen extends Component {
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
          <Text style={{paddingLeft:30, fontSize:20, fontWeight:'bold'}}> 공지사항 </Text>
        </View>

        <View style={styles.listStyle}>
          <Text style={styles.textStyleOne}> 오디오레시피 서비스가 오픈했습니다. </Text>
          <Text style={styles.textStyleTwo}> 2018. 11. 23.(금) 14:33</Text>
        </View>

        <View style={styles.listStyle}>
          <Text style={styles.textStyleOne}> 레시피 등록 방법을 알려드립니다.</Text>
          <Text style={styles.textStyleTwo}> 2018. 11. 23.(금) 14:33</Text>
        </View>

        <View style={styles.listStyle}>
          <Text style={styles.textStyleOne}> 서비스 점검 안내입니다. </Text>
          <Text style={styles.textStyleTwo}> 2018. 11. 23.(금) 14:33</Text>
        </View>

        <View style={styles.listStyle}>
          <Text style={styles.textStyleOne}> 오디오레시피 운영진입니다. </Text>
          <Text style={styles.textStyleTwo}> 2018. 11. 23.(금) 14:33</Text>
        </View>

        <View style={styles.listStyle}>
          <Text style={styles.textStyleOne}> 오늘의 업데이트 내용을 알려드려요. </Text>
          <Text style={styles.textStyleTwo}> 2018. 11. 23.(금) 14:33</Text>
        </View>

        <View style={styles.listStyle}>
          <Text style={styles.textStyleOne}> 서비스점검 안내입니다. </Text>
          <Text style={styles.textStyleTwo}> 2018. 11. 23.(금) 14:33</Text>
        </View>
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
