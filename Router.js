import React from 'react';
import { createStackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation'; 
import Login from './components/src/Login';
import Main from './components/src/Main';
import cs from './components/style/Style';
import SideMenu  from './components/src/SideMenu'

export const RootStack = createStackNavigator(
    {
      LoginScreen:{screen:Login,disableOpenGesture: true}, 
      HomeScreen:{screen:Main}
    },
    {
      initialRouteName: 'LoginScreen',
      navigationOptions: {
        headerStyle: cs.headerStyle,
      }
    }
  );
  
  export const Tabs = TabNavigator(
    {
    Hometab:{screen:RootStack}
    },
    {
      initialRouteName:'Hometab',
      navigationOptions:{tabBarVisible: false,}
    }        
);

  export const SM = DrawerNavigator({
    Tabbar:{
        screen: Tabs,
        navigationOptions:{//lock drawer menu
          drawerLockMode :'locked-closed'
        },     
    },
},
{
    drawerWidth: 280,
    drawerPosition: 'left',
    contentComponent: props => <SideMenu {...props}/>
}
);