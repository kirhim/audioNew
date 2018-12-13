import React,  {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, Switch} from 'react-native'

class NotificationScreen extends Component {
  state = {
    switchOne: false,
    switchTwo: false}




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
          <Text style={{paddingLeft:30, fontSize:20, fontWeight:'bold'}}> 알람 설정 </Text>
        </View>

        <View style={styles.listStyle}>
          <Text style={styles.textStyleOne}> 오디오레시피 서비스가 오픈했습니다. </Text>
          <Switch
          style={{marginRight:30}}
          onValueChange={switchOne => this.setState({switchOne})}
          value={this.state.switchOne}
        />
        </View>

        <View style={styles.listStyle}>
          <Text style={styles.textStyleOne}> 레시피 등록 방법을 알려드립니다.</Text>
          <Switch
          style={{marginRight:30}}
          onValueChange={switchTwo => this.setState({switchTwo})}
          value={this.state.switchTwo}
        />
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
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
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

export default NotificationScreen
