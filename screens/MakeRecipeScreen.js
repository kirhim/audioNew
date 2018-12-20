import React,  {Component} from 'react'
import {View, Text, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native'
import { Icon } from 'react-native-elements'


class MakeRecipeScreen extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:'white',}}>
        <View style={{height:80, width:'100%', backgroundColor:'transparent', flexDirection:'row',alignItems:'flex', justifyContent:'flex-start', alignItems:'center',}}>
          <TouchableOpacity
            style={{marginTop:0}}
            onPress={()=>this.props.navigation.navigate('Home')}>
           <Icon containerStyle={{marginLeft:20,height:20,width:20}} name='close' />

          </TouchableOpacity>
          <Text style={{paddingLeft:30, fontSize:20, fontWeight:'bold'}}> 레시피 작성하기 </Text>
        </View>

      <ScrollView>
        <View style={{flex:1, backgroundColor:'white', borderTopWidth:0.5, borderColor:'#E0E0E0'}}>

        <View style={{ width:'100%', marginTop:30,alignItems:'flex-start', backgroundColor:'white'}}>
        <Text style={{marginLeft:20, color:'#BDBDBD'}}>레시피 제목</Text>
          <View style={{paddingLeft:20, height:55, width:340, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'space-between',flexDirection:'row', alignItems:'center'}}>
          <TextInput placeholder='제목 입력'/>
          <Image
                 style={{ height:36,width:32, marginRight:20, borderRadius:8}}
                 source={require('../assets/drawable-hdpi/assets_recorded.png')}></Image>
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
        <Text style={{marginLeft:20, color:'#BDBDBD'}}>한 줄 소개글</Text>
          <View style={{paddingLeft:20, height:55, width:340, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'space-between',flexDirection:'row', alignItems:'center'}}>
          <TextInput placeholder='소개글을 입력해 주세요 '/>
          <Image
                 style={{ height:36,width:32, marginRight:20, borderRadius:8}}
                 source={require('../assets/drawable-hdpi/assets_recording.png')}></Image>
          </View>
        </View>

        <View style={{ width:'100%', marginTop:30,alignItems:'flex-start', backgroundColor:'white'}}>
        <Text style={{marginLeft:20, color:'#BDBDBD'}}>레시피 소개</Text>
          <View style={{paddingLeft:20, height:55, width:340, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'space-between',flexDirection:'row', alignItems:'center'}}>
          <TextInput placeholder='소개 글을 입력해 주세요'/>
          <Image
                 style={{ height:36,width:32, marginRight:20, borderRadius:8}}
                 source={require('../assets/drawable-hdpi/assets_recording.png')}></Image>
          </View>
        </View>

        <View style={{marginLeft:15, backgroundColor:'gray', width:'100%', height:0.5}} />

        <View style={{ width:'100%', marginTop:30,alignItems:'flex-start', backgroundColor:'white'}}>
        <Text style={{marginLeft:20, color:'#BDBDBD'}}>해시태그 등로</Text>
          <View style={{paddingLeft:20, height:55, width:340, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'flex-start',flexDirection:'row', alignItems:'center'}}>
          <TextInput placeholder='소개글을 입력해 주세요 '/>
          </View>
          <Text style={{marginLeft:40, color:'#BDBDBD'}}>*쉼표로 구분됩니다.</Text>

          <View style={{marginTop: 30,marginLeft:15, backgroundColor:'#BDBDBD', width:'100%', height:0.5}} />

          <Text style={{marginTop:20, marginLeft:20, color:'#BDBDBD'}}>총 조리시간</Text>

          <View style={{ width:160, marginTop:0,alignItems:'flex-start', backgroundColor:'white',flexDirection:'row'}}>
            <View style={{paddingLeft:20, height:60, width:160, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'flex-end',flexDirection:'row', alignItems:'center'}}>
            <TextInput style={{marginRight:20}} placeholder='시간'/>
            </View>
            <View style={{paddingLeft:20, height:60, width:160, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'flex-end',flexDirection:'row', alignItems:'center'}}>
            <TextInput style={{marginRight:20}} placeholder='분'/>
            </View>
          </View>

        </View>

        <View style={{marginTop: 20,marginLeft:15, backgroundColor:'gray', width:'100%', height:0.5}} />

        <View style={{ width:'100%', marginTop:30,alignItems:'flex-start', backgroundColor:'white'}}>
        <Text style={{marginLeft:20, color:'#BDBDBD'}}>칼로리</Text>
          <View style={{paddingLeft:20, height:55, width:340, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'flex-start',flexDirection:'row', alignItems:'center'}}>
          <TextInput placeholder='소개 글을 입력해 주세요'/>
          </View>
        </View>

        <View style={{marginTop: 20,marginLeft:15, backgroundColor:'#BDBDBD', width:'100%', height:0.5}} />
        <Text style={{marginTop:20, marginLeft:20, color:'#BDBDBD'}}>필수재료</Text>
        <View style={{ width:160, marginTop:0,alignItems:'flex-start', backgroundColor:'white'}}>

        <View style={{flexDirection:'row'}}>
          <View style={{paddingLeft:20, height:60, width:170, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'flex-end',flexDirection:'row', alignItems:'center'}}>
          <TextInput style={{marginRight:20}} placeholder='예)소고기'/>
          </View>
          <View style={{paddingLeft:20, height:60, width:114, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'flex-end',flexDirection:'row', alignItems:'center'}}>
          <TextInput style={{marginRight:20}} placeholder='예)100g'/>
          </View>
          <Icon containerStyle={{marginLeft:10}} name='close'/>
        </View>

        <View style={{flexDirection:'row'}}>
          <View style={{paddingLeft:20, height:60, width:170, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'flex-end',flexDirection:'row', alignItems:'center'}}>
          <TextInput style={{marginRight:20}} />
          </View>
          <View style={{paddingLeft:20, height:60, width:114, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'flex-end',flexDirection:'row', alignItems:'center'}}>
          <TextInput style={{marginRight:20}} />
          </View>
          <Icon containerStyle={{marginLeft:10}} name='close'/>
        </View>

        <View style={{marginLeft:100,paddingLeft:20, height:45, width:160, backgroundColor:'#fad241', margin:10, borderRadius:10,justifyContent:'flex-start',flexDirection:'row', alignItems:'center'}}>
        <Icon containerStyle={{marginLeft:10}} name='add'/>
          <Text style={{marginLeft:20}}>재료 추가</Text>
        </View>
        </View>

        <View style={{marginTop: 20,marginLeft:15, backgroundColor:'#BDBDBD', width:'100%', height:0.5}} />
        <Text style={{marginTop:20, marginLeft:20, color:'#BDBDBD'}}>선택재료</Text>
        <View style={{ width:160, marginTop:0,alignItems:'flex-start', backgroundColor:'white'}}>

        <View style={{flexDirection:'row'}}>
          <View style={{paddingLeft:20, height:60, width:170, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'flex-end',flexDirection:'row', alignItems:'center'}}>
          <TextInput style={{marginRight:20}} placeholder='예)소고기'/>
          </View>
          <View style={{paddingLeft:20, height:60, width:114, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'flex-end',flexDirection:'row', alignItems:'center'}}>
          <TextInput style={{marginRight:20}} placeholder='예)100g'/>
          </View>
          <Icon containerStyle={{marginLeft:10}} name='close'/>
        </View>

        <View style={{flexDirection:'row'}}>
          <View style={{paddingLeft:20, height:60, width:170, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'flex-end',flexDirection:'row', alignItems:'center'}}>
          <TextInput style={{marginRight:20}} />
          </View>
          <View style={{paddingLeft:20, height:60, width:114, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'flex-end',flexDirection:'row', alignItems:'center'}}>
          <TextInput style={{marginRight:20}} />
          </View>
          <Icon containerStyle={{marginLeft:10}} name='close'/>
        </View>

        <View style={{marginLeft:100,paddingLeft:20, height:45, width:160, backgroundColor:'#fad241', margin:10, borderRadius:10,justifyContent:'flex-start',flexDirection:'row', alignItems:'center'}}>
        <Icon containerStyle={{marginLeft:10}} name='add'/>
          <Text style={{marginLeft:20}}>재료 추가</Text>
        </View>
        </View>

        <View style={{marginTop: 20,marginLeft:15, backgroundColor:'#BDBDBD', width:'100%', height:0.5}} />
        <Text style={{marginTop:20, marginLeft:20, color:'#BDBDBD'}}>요리과정 등록</Text>

        <View style={{backgroundColor:'white', flexDirection:'row', width:'100%', height:120, paddingTop:10}}>
          <View style={{marginLeft:20, width:95, height:85, backgroundColor:'white', borderRadius:10, borderWidth:0.5, borderColor:'#BDBDBD',justifyContent:'center', alignItems:'center'}}>
          <Image
                 style={{ height:54,width:48}}
                 source={require('../assets/drawable-hdpi/assets_img_cookprogress.png')}></Image>
          </View>
          <View style={{marginLeft:20, width:200, height:85, backgroundColor:'white'}}>
            <Text style={{marginLeft:10, fontSize:20, color:'#fad241'}}>01</Text>
            <Text style={{marginLeft:10, fontSize:15, fontWeight:'bold'}}>단호박 다듬기</Text>
            <Text style={{marginLeft:10, fontSize:15}}>전자렌지에 잠깐 돌리세요</Text>
          </View>
          <Icon containerStyle={{marginBottom:10, marginRight:20}} name='close'/>
        </View>

        <View style={{backgroundColor:'white', flexDirection:'row', width:'100%', height:120, paddingTop:10}}>
        <View style={{marginLeft:20, width:95, height:85, backgroundColor:'white', borderRadius:10, borderWidth:0.5, borderColor:'#BDBDBD',justifyContent:'center', alignItems:'center'}}>
          <Image
               style={{ height:54,width:48}}
               source={require('../assets/drawable-hdpi/assets_img_cookprogress.png')}></Image>
          </View>
          <View style={{marginLeft:20, width:200, height:85, backgroundColor:'white'}}>
            <Text style={{marginLeft:10, fontSize:20, color:'#fad241'}}>01</Text>
            <Text style={{marginLeft:10, fontSize:15, fontWeight:'bold'}}>단호박 다듬기</Text>
            <Text style={{marginLeft:10, fontSize:15}}>전자렌지에 잠깐 돌리세요</Text>
          </View>
          <Icon containerStyle={{marginBottom:10, marginRight:20}} name='close'/>

        </View>

        <View style={{backgroundColor:'white', flexDirection:'row', width:'100%', height:120, paddingTop:10}}>
        <View style={{marginLeft:20, width:95, height:85, backgroundColor:'white', borderRadius:10, borderWidth:0.5, borderColor:'#BDBDBD', justifyContent:'center', alignItems:'center'}}>
        <Image
               style={{ height:54,width:48}}
               source={require('../assets/drawable-hdpi/assets_img_cookprogress.png')}></Image>
          </View>
          <View style={{marginLeft:20, width:200, height:85, backgroundColor:'white'}}>
            <Text style={{marginLeft:10, fontSize:20, color:'#fad241'}}>01</Text>
            <Text style={{marginLeft:10, fontSize:15, fontWeight:'bold'}}>단호박 다듬기</Text>
            <Text style={{marginLeft:10, fontSize:15}}>전자렌지에 잠깐 돌리세요</Text>
          </View>
          <Icon containerStyle={{ marginBottom:10, marginRight:20}} name='close'/>
        </View>

      <TouchableOpacity onPress={()=> this.props.navigation.navigate('cook')}>
        <View style={{marginLeft:100,paddingLeft:20, height:45, width:160, backgroundColor:'#fad241', margin:10, borderRadius:10,justifyContent:'flex-start',flexDirection:'row', alignItems:'center'}}>
        <Icon containerStyle={{marginLeft:10}} name='add'/>
          <Text style={{marginLeft:5}}>요리과정 추가</Text>
        </View>
      </TouchableOpacity>


        <View style={{marginTop: 20,marginLeft:15, backgroundColor:'#BDBDBD', width:'100%', height:0.5}} />
      <Text style={{marginTop:20, marginLeft:20, color:'#BDBDBD'}}>음식 카테고리 선택</Text>
        <View style={{paddingLeft:20, height:55, width:340, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'space-between',flexDirection:'row', alignItems:'center'}}>
          <Text> 한식</Text>
          <Image
                 style={{ marginRight:10,height:27,width:24}}
                 source={require('../assets/drawable-hdpi/ic_droparrow_gray.png')}></Image>
        </View>

        <View style={{paddingLeft:20, height:55, width:340, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'space-between',flexDirection:'row', alignItems:'center'}}>
          <Text> 찜, 구이</Text>
          <Image
          style={{ marginRight:10,height:27,width:24}}
                 source={require('../assets/drawable-hdpi/ic_droparrow_gray.png')}></Image>
        </View>

        <View style={{paddingLeft:20, height:55, width:340, backgroundColor:'#E0E0E0', margin:10, borderRadius:10,justifyContent:'space-between',flexDirection:'row', alignItems:'center'}}>
          <Text> 명절 요리</Text>
          <Image
          style={{ marginRight:10,height:27,width:24}}
                 source={require('../assets/drawable-hdpi/ic_droparrow_gray.png')}></Image>
        </View>

        </View>
        </ScrollView>
      </View>


    )
  }
}

export default MakeRecipeScreen
