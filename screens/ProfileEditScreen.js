import React,  {Component} from 'react'
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native'

class ProfileEditScreen extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:'white',}}>
        <View style={{height:80, width:'100%', backgroundColor:'transparent', flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity
            style={{marginTop:0}}
            onPress={()=>this.props.navigation.navigate('profile')}>
           <Image
                  style={{ marginLeft:20,height:20,width:20}}
                  source={require('../assets/drawable-hdpi/ic_close_gray.png')}></Image>
          </TouchableOpacity>
          <Text style={{paddingLeft:30, fontSize:20, fontWeight:'bold'}}> 프로필 수정 </Text>
        </View>

       <View style={{flex:1, backgroundColor:'transparent', borderTopWidth:0.5, borderColor:'#E0E0E0'}}>
         <View style={{marginTop:30,alignItems:'center', backgroundColor:'transparent'}}>
           <View style={{backgroundColor:'transparent',width:120,height:120, justifyContent:'center', alignItems:'center'}}>
             <Image
                    style={{ height:100,width:100, borderRadius:50}}
                    source={require('../assets/puppy.jpg')}>
             </Image>
             <Text style={{fontWeight:'bold', margin:10, color:'#2979FF'}}>프로필 사진 수정</Text>
           </View>
         </View>

         <View style={{ width:'100%', marginTop:30,alignItems:'flex-start', backgroundColor:'white'}}>
         <Text style={{marginLeft:20, color:'#BDBDBD'}}>계정</Text>
           <View style={{paddingLeft:20, height:55, width:340, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'flex-start',flexDirection:'row', alignItems:'center'}}>
           <TextInput placeholder='Email 입력'/>
           </View>
         </View>

         <View style={{ width:'100%', marginTop:30,alignItems:'flex-start', backgroundColor:'white'}}>
         <Text style={{marginLeft:20, color:'#BDBDBD'}}>닉네임</Text>
           <View style={{paddingLeft:20, height:55, width:340, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'flex-start',flexDirection:'row', alignItems:'center'}}>
           <TextInput placeholder='닉네임 입력'/>
           </View>
         </View>

         <View style={{ width:'100%', marginTop:30,alignItems:'flex-start', backgroundColor:'white'}}>
         <Text style={{marginLeft:20, color:'#BDBDBD'}}>한줄 소개</Text>
           <View style={{paddingLeft:20, height:55, width:340, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'flex-start',flexDirection:'row', alignItems:'center'}}>
           <TextInput placeholder='자기소개 입력'/>

           </View>
         </View>

       </View>

      </View>
    )
  }
}

export default ProfileEditScreen
