import {observable} from 'mobx'
var config = require('./app_config.json');
const url = config.api_server_url + 'members';

let index = 0

export class MemberStore {

  @observable memberObject
  @observable requestObject


  @observable memberDevToken = undefined
  @observable memberOS = undefined



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
