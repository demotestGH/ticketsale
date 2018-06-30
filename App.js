/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  YellowBox
} from 'react-native';
import {SM, RootStack} from './Router'

console.disableYellowBox = true; //disable warning yellowbox 
/*const RootStack = createStackNavigator(
  {
    Home:Login,  
    Home_Main:Main
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: cs.headerStyle,
    }
  }
);*/


export default class App extends React.Component {
  render() {
    return (      
      <SM/>
    );
  }
}

