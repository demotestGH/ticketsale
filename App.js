/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {SM} from './Router'

console.disableYellowBox = true; //disable warning yellowbox 

export default class App extends React.Component {
  render() {
    return (      
      <SM/>
    );
  }
}