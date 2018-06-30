import React, { Component } from 'react';
import { createStackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation'; 
import Login from './components/src/Login';
import Main from './components/src/Main';
import cs from './components/style/Style';
import SideMenu  from './components/src/SideMenu'

export const RootStack = createStackNavigator(
    {
      Home:{ screen:Login}, 
      Home_Main:{screen:Main}
    },
    {
      initialRouteName: 'Home',
      navigationOptions: {
        headerStyle: cs.headerStyle,
      }
    }
  );
  /*export const Tabs = TabNavigator({
    Hometab:{screen:RootStack}
  });*/
  export const SM = DrawerNavigator({
    Tabbar:{
        screen:RootStack        
    },
},
{
    drawerWidth: 300,
    drawerPosition: 'left',
    contentComponent: props => <SideMenu {...props}/>
}
);