import {observable} from 'mobx'
var config = require('./app_config.json');
const url = config.api_server_url + 'members';

let index = 0

export class MemberStore {

  @observable memberObject
  @observable requestObject


  @observable memberDevToken = undefined
  @observable memberOS = undefined


  updateMemberInfoToServer = () => {

    //console.log(this.memberObject);

    fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.memberObject)
        })
        .then(response => {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json().then(resJSON => {
              // process your JSON data further
              if(resJSON.result === "fail")
              {
                  //alert(responseJson.error);
                  console.log("사용자 정보 업데이트 오류")
              }
              else
              {
                  //trunk.updateStore(store)
                  //Keyboard.dismiss();
                  console.log("사용자 정보 업데이트 완료")
                  return resJSON;

              }
            });
          } else {
            return response.text().then(text => {
              // this is text, do something with it
              console.log("API 서버 호출 오류 : " + text)
            });
          }
        })
        .catch((error) => {
            console.error(error);
        });
  };


  /*
  addListItem (item) {
    this.memberInfo.push({
      name: item,
      items: [],
      index
    })
    index++
  }

  removeListItem (item) {
    this.list = this.list.filter((l) => {
      return l.index !== item.index
    })
  }


  setEmail(email) {
    this.memberEmail = email;
  }


  getEmail() {
    return this.memberEmail;
  }



  setName(name) {
    this.memberName = name;
  }


  getName() {
    return this.memberName;
  }


  setIdx(idx) {
    this.memberIdx = idx;
  }

  getIdx() {
    return this.memberIdx;
  }



  setMemberObject(memberObject) {
    this.memberObject = memberObject;
  }

  getMemberObject() {
    return this.memberObject;
  }


  */





}


export const store = new MemberStore();
