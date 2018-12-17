import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { AsyncTrunk } from 'mobx-sync'
import { store } from './mobxStore'


const trunk = new AsyncTrunk(store, {
    /**
     * @desc custom storage: built in storage is supported
     *  - localStorage
     *  - sessionStorage
     *  - ReactNative.AsyncStorage
     */
    storage: AsyncStorage,
    /**
     * @desc custom storage key, the default is `__mobx_sync__`
     */
    storageKey: '__persist_mobx_stores__',
  });



  export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);

    //로그아웃 처리하기 샘플
    /*
    store.memberEmail = undefined;
    store.memberObject = undefined;

    trunk.updateStore(store)
    */

    trunk.init().then(() => {
        // do any staff with loaded store
        if(store.memberObject != undefined)
        {
          if(store.memberObject.idx != undefined)
          {
            this.props.navigation.navigate('App');
          }
          else{
            this.props.navigation.navigate('Auth');
          }
        }
        else
          this.props.navigation.navigate('Auth');
    })

  }


  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.WrapContainer}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}


const styles = StyleSheet.create(
    {
        WrapContainer: {
            flex: 1,
            justifyContent: 'flex-start',
            backgroundColor : '#50acc9',
            alignItems: 'center',

        },



    });
