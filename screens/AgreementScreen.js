import React,  {Component} from 'react'
import {View, Text,TouchableOpacity, Image} from 'react-native'

class AgreementScreen extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <View style={{height: 55, width:'100%',justifyContent:'space-around', alignItems:'center', backgroundColor:'white', marginBottom:30, marginTop:10, flexDirection:'row'}}>
          <TouchableOpacity
          style={{marginTop:20}}
          onPress={()=> this.props.navigation.navigate('register')}>
          <Image source={require('../assets/drawable-hdpi/ic_close_gray.png')}
                 style={{marginLeft:20, marginBottom:20,height:30, width:30}}/>
          </TouchableOpacity>
        <View style={{flex:1}}>
          <Text style={{marginLeft:30, fontSize: 20, fontWeight:'bold'}}> 서비스 이용약관 </Text>
        </View>
      </View>
        <Text style={{margin:20}}>본 약관(이하 ‘본 약관’이라 함)은 주식회사(이하 ‘당사’라 함)가 제공하는 오디오레시피에 관한 모든 제품 및 서비스(이하 ‘본 서비스’라 함)의 이용에 관한 조건에 대해 본 서비스를 이용하는 고객(이하 ‘고객’이라 함)과 당사간에 정하는 것입니다.

1. 정의

본 약관에서는 다음 용어를 사용합니다.
1.1. ‘콘텐츠’란 문장, 음성, 음악, 이미지, 동영상, 소프트웨어, 프로그램, 코드 기타 정보를 말합니다.
1.2. ‘본 콘텐츠’란 본 서비스를 통해 접속할 수 있는 콘텐츠를 말합니다.
1.3. ‘투고 콘텐츠’란 고객이 본 서비스에 투고, 송신, 업로드한 콘텐츠를 말합니다.
1.4. ‘코인’이란 본 서비스가 유상으로 제공하는 서비스 또는 콘텐츠와 교환 가능한 전자적 가상통화를 말합니다.
1.5. ‘개별 이용약관’이란 본 서비스에 관하여 본 약관과는 별도로 ‘약관’, 가이드라인’, ‘정책’ 등의 명칭으로 당사가 배포 또는 게시한 문서를 말합니다.

2. 약관 동의

2.1 고객은 본 약관의 규정에 따라 본 서비스를 이용해야 합니다. 고객은 본 약관에 대해 유효하고 취소 불가능한 동의를 했을 경우에 한하여 본 서비스를 이용할 수 있습니다.
2.2. 고객이 미성년자일 경우에는 친권자 등 법정대리인의 동의를 얻은 후 본 서비스를 이용하십시오. 또한 고객이 본 서비스를 사업자를 위해 이용할 경우에는 당해 사업자 역시 본 약관에 동의한 후, 본 서비스를 이용하십시오.
2.3. 고객은 본 서비스를 실제로 이용함으로써 본 약관에 대해 유효하고 취소 불가능한 동의를 한 것으로 간주됩니다.
2.4. 본 서비스에 개별 이용약관이 존재할 경우, 고객은 본 약관 외에 개별 이용약관의 규정에 따라 본 서비스를 이용해야 합니다.

3. 약관 변경

필요하다고 당사에서 판단할 경우, 당사는 고객에 대한 사전 통지 없이 언제라도 본 약관 및 개별 이용약관을 변경할 수 있습니다. 변경 후의 본 약관 및 개별 이용약관은 당사가 운영하는 웹사이트 내의 적절한 장소에 게시된 시점부터 그 효력이 발생하며, 본 약관 및 개별 이용약관이 변경된 후에도 고객이 본 서비스를 계속 이용함으로써 변경 후의 본 약관 및 적용된 개별 이용약관에 대해 유효하고 취소 불가능한 동의를 한 것으로 간주됩니다. 이러한 변경 내용은 고객에게 개별적으로 통지할 수 없기 때문에, 본 서비스를 이용할 때에는 수시로 최신의 본 약관 및 적용된 개별 이용약관을 참조하시기 바랍니다. </Text>
      </View>
    )
  }
}

export default AgreementScreen
