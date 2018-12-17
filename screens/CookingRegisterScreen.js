import React,  {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, Image, ScrollView} from 'react-native'
import { Icon } from 'react-native-elements'


class CookingRegisterScreen extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:'white',}}>
        <View style={{height:80, width:'100%', backgroundColor:'transparent', flexDirection:'row',alignItems:'flex', justifyContent:'space-between', alignItems:'center',}}>
          <TouchableOpacity
            style={{marginTop:0}}
            onPress={()=>this.props.navigation.navigate('make')}>
           <Icon containerStyle={{marginLeft:20,height:20,width:20}} name='close' />

          </TouchableOpacity>
          <Text style={{paddingLeft:30, fontSize:20, fontWeight:'bold'}}> 요리과정 등록 </Text>
          <Image
                 style={{ height:36,width:32, marginRight:20, borderRadius:8}}
                 source={require('../assets/drawable-hdpi/ic_done_gray.png')}></Image>
        </View>

        <ScrollView>
          <View style={{flex:1, backgroundColor:'white', borderTopWidth:0.5, borderColor:'#E0E0E0'}}>

          <View style={{ width:'100%', marginTop:30,alignItems:'flex-start', backgroundColor:'white'}}>
          <Text style={{fontSize:20, fontWeight:'bold',marginLeft:20, color:'black', marginBottom:10}}>1/3</Text>
          <Text style={{marginLeft:20, color:'#BDBDBD'}}>요리과정 제목</Text>
            <View style={{paddingLeft:20, height:55, width:340, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'space-between',flexDirection:'row', alignItems:'center'}}>
            <TextInput placeholder='요리과정 제목을 입력해 주세요 '/>
            <Image
                   style={{ height:36,width:32, marginRight:20, borderRadius:8}}
                   source={require('../assets/drawable-hdpi/assets_recording.png')}></Image>
            </View>
          </View>

          <Text style={{marginLeft:20, color:'#BDBDBD'}}>대표 사진</Text>
          <View style={{ marginLeft: 20,width:328,height:290, marginTop:10,alignItems:'center', backgroundColor:'transparent', justifyContent:'center', borderRadius:10, borderWidth:0.5, borderColor:'#BDBDBD'}}>
            <Image
                   style={{ height:113,width:140}}
                   source={require('../assets/drawable-hdpi/assets_cooking_img_01.png')}></Image>
                   <Text style={{marginLeft:20, color:'#BDBDBD'}}>요리를 대표하는 사진을 올려주세요</Text>
              <View style={{paddingLeft:20, height:45, width:160, backgroundColor:'#fad241', margin:10, borderRadius:10,justifyContent:'flex-start',flexDirection:'row', alignItems:'center'}}>
              <Image
                     style={{ height:24,width:24}}
                     source={require('../assets/drawable-hdpi/ic_photo_upload.png')}></Image>
                <Text style={{marginLeft:20}}>사진 올리기</Text>
              </View>
          </View>

          <View style={{ width:'100%', marginTop:30,alignItems:'flex-start', backgroundColor:'white'}}>
          <Text style={{marginLeft:20, color:'#BDBDBD'}}>요리과정</Text>
            <View style={{paddingLeft:20, height:55, width:340, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'space-between',flexDirection:'row', alignItems:'center'}}>
            <TextInput placeholder='요리과정을 입력해 주세요'/>
            <Image
                   style={{ height:36,width:32, marginRight:20, borderRadius:8}}
                   source={require('../assets/drawable-hdpi/assets_recording.png')}></Image>
            </View>
          </View>

          <View style={{ width:'100%', marginTop:30,alignItems:'flex-start', backgroundColor:'white'}}>
          <Text style={{marginLeft:20, color:'#BDBDBD'}}>요리 팁</Text>
            <View style={{paddingLeft:20, height:55, width:340, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'space-between',flexDirection:'row', alignItems:'center'}}>
            <TextInput placeholder='요리의 TIP을 입력해주세요'/>
            <Image
                   style={{ height:36,width:32, marginRight:20, borderRadius:8}}
                   source={require('../assets/drawable-hdpi/assets_recording.png')}></Image>
            </View>
          </View>


          </View>
          </ScrollView>


      </View>
    )
  }
}

export default CookingRegisterScreen
