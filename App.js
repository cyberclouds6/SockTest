import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SockJS from "sockjs-client"
import Stomp from "@stomp/stompjs"

var stmp = require('stomp-websocket-js');

const options = {debug: true, binary: true, heartbeat: false};
var client = Stomp.client('wss://alpha.locktrip.com/socket', options);
var ws = new WebSocket('wss://alpha.locktrip.com/socket')
var clnt = stmp.client('wss://alpha.locktrip.com/socket');
//var client = Stomp.over('wss://alpha.locktrip.com/socket');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends React.Component {

  constructor() {
    super();

    
    clnt.connect({}, (frame) => {
      console.log("OK");
      clnt.disconnect();
    });

    // onmi = function(message){
    //   this.console.log("hello");
    // }

    // client.connect({}, function connectCallBack(frame){
    //   var headers = {'content-length': false};
    //   client.subscribe("search/62fb14a4-8f6a-11e8-9eb6-529269fb1459", onmi);
    //   client.send("search",
    //     headers,
    //     JSON.stringify({uuid: '62fb14a4-8f6a-11e8-9eb6-529269fb1459', query : 'region=52612&currency=USD&startDate=25/07/2018&endDate=26/07/2018&rooms=%5B%7B"adults":2,"children":%5B%5D%7D%5D&filters=%7B"showUnavailable":false,"name":"","minPrice":1,"maxPrice":5000,"stars":%5B0,1,2,3,4,5%5D%7D&page=0&sort=priceForSort,asc'})
    //   )
    // }, (error) => {
    //   alert("Nayy");
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to AID!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
