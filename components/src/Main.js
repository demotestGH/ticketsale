/**
 * Main.js - home screen
 */
import React from 'react'
import{ 
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import cs from '../style/Style'
import gc from '../src/Globals'

class LogoTitle extends React.Component {
  render() {
    return (
      <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
        <Image
          source={require('../img/tickets.png')}
          style={cs.imageStyle}
        />
        <Text style={cs.headerMainTitle}>{gc.STRNAME.MAIN_HEADERTITLE}</Text>
      </View>
    );
  }
}

export default class Main extends React.Component {  
    static navigationOptions = ({ navigationOptions }) =>{     
      return{
        headerTitle:<LogoTitle />,
        headerLeft: null,
        headerStyle: navigationOptions.headerStyle,        
      };   
    }; 
    render() {
      return (
        <View style={cs.container}>
          <Text>Home Screen</Text>   
          <TouchableOpacity style={cs.button}>
            <Text style={cs.buttonText} onPress={() =>this.props.navigation.openDrawer()}>
                MENU
            </Text>            
          </TouchableOpacity>   
        </View>
      );
    }
  }
  