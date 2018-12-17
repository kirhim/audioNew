import React,  {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, Switch} from 'react-native'
import { Icon } from 'react-native-elements'

class MyRecipeScreen extends Component {


  render() {
    return (
      <View style={{flex:1, backgroundColor:'#F5F5F5'}}>

        <View style={{height:80, width:'100%', backgroundColor:'#f9de4b', flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
          <TouchableOpacity
            style={{marginTop:0}}
            onPress={()=>this.props.navigation.openDrawer()}>
           <Image
                  style={{ marginLeft:20,height:20,width:20}}
                  source={require('../assets/drawable-hdpi/ic_menu_brown.png')}></Image>
          </TouchableOpacity>
          <Text style={{paddingLeft:25, fontSize:20, fontWeight:'bold'}}> 나의 레시피 관리 </Text>

          <TouchableOpacity
            style={{marginTop:0}}
            onPress={()=>this.props.navigation.navigate('make')}>
          <Icon containerStyle={{marginRight:20}} name='add' />
          </TouchableOpacity>
        </View>




      <View style={{justifyContent:'flex-start', alignItems:'center'}}>
        <View style={styles.listStyle}>
        <Image
               style={{ height:160,width:'100%', borderRadius: 10}}
               source={require('../assets/cokkie.jpg')}></Image>
          <View style={{alignItems:'flex-start', justifyContent:'center'}}>
            <Text style={styles.textStyleOne}> 무화과 와플 </Text>
            <Text style={styles.textStyleTwo}> 싱싱한 무화과가 올라간 벨기에식 와플이에요.</Text>
          </View>
          <View style={styles.levelStyle}>
                <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}> 난이도</Text>
                  <Image
                          style={{ height:10,width:10}}
                          source={require('../assets/drawable-hdpi/assets_star_full.png')}></Image>
                  <Image
                          style={{ height:10,width:10}}
                          source={require('../assets/drawable-hdpi/assets_star_full.png')}></Image>
                  <Image
                          style={{ height:10,width:10}}
                          source={require('../assets/drawable-hdpi/assets_star_empty.png')}></Image>
              </View>
        </View>

        <View style={styles.listStyle}>
        <Image
                style={{ height:160,width:'100%', borderRadius:10}}
                source={require('../assets/panCake.jpg')}></Image>
          <View>
            <Text style={styles.textStyleOne}> 초코칩 쿠키 </Text>
            <Text style={styles.textStyleTwo}> 달콤한 초코가 가득 들어있어요.</Text>
          </View>

          <View style={styles.levelStyle}>
            <Text style={{fontSize:12,fontWeight:'bold',color:'gray'}}> 난이도</Text>
              <Image
                      style={{ height:10,width:10}}
                      source={require('../assets/drawable-hdpi/assets_star_full.png')}></Image>
              <Image
                      style={{ height:10,width:10}}
                      source={require('../assets/drawable-hdpi/assets_star_full.png')}></Image>
              <Image
                      style={{ height:10,width:10}}
                      source={require('../assets/drawable-hdpi/assets_star_empty.png')}></Image>
          </View>

        </View>
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
    height:240,
    width:320,
    backgroundColor:'white',
    borderBottomWidth:1,
    borderColor:'#F5F5F5',
    justifyContent:'space-between',
    flexDirection:'column',
    alignItems:'flex-start',
    borderRadius:10,
    marginTop:15,
  },
  textStyleOne:{
    fontSize:15,
    fontWeight:'bold',
    color:'gray',
    paddingTop:10
  },
  textStyleTwo:{
    fontSize:12,
    color:'gray',
  },
  levelStyle:{
    backgroundColor:'white',
    width:'100%',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row',
    paddingBottom:10
  }
});

export default MyRecipeScreen
