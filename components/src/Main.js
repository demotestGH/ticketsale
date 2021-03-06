/**
 * Main.js - home screen
 */
import React from 'react'
import{Text, View, TouchableOpacity, Image} from 'react-native';
import cs from '../style/Style'
import gc from '../src/Globals'

class LogoTitle extends React.Component {
  render() {
    return (
      <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
        <Image
          source={require('../icons/tickets.png')}
          style={cs.imageStyle}
        />
        <Text style={cs.headerMainTitle}>{gc.STRNAME.MAIN_HEADERTITLE}</Text>
      </View>
    );
  }
}

export default class Main extends React.Component {  
    static navigationOptions = ({ navigation, navigationOptions }) =>{     
      return{
        headerTitle:<LogoTitle />,
        headerLeft: null,
        headerRight:( //Enable menu button
        <View>
         <TouchableOpacity onPress={() =>navigation.openDrawer()}>
           <Image
             source={require('../icons/menu.png')}
             style={cs.imageStyle}
           />   
         </TouchableOpacity> 
        </View>
        ),  
        headerStyle: navigationOptions.headerStyle,           
      };   
    };     
    render() {
      return (
        <View style={cs.container}>
        
        </View>
      );
    }
  }
  