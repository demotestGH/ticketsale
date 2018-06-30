/**
 * Login.js
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

export default class Login extends React.Component{
    static navigationOptions = {
        header: null, //hide bar-title       
    }
    render(){       
        return(
                <View style={cs.container}>
                    <Image source={require('../img/tickets.png')} style={cs.logo}/>
                    <Text style={[cs.headerLoginTitle,{marginBottom:40}]}>{gc.STRNAME.LOGIN_HEADERTITLE}</Text>
                    <View style = {[cs.sectionStyle,{marginBottom:5}]}>   
                        <Image source={require('../icons/users.png')} style={cs.imageStyle}/>                
                        <TextInput style={cs.textInput} placeholder={gc.STRNAME.USERNAME} placeholderTextColor='#199187' underlineColorAndroid='transparent'/>                                      
                    </View>
                    <View style = {[cs.sectionStyle,{marginBottom:5}]}>   
                        <Image source={require('../icons/locked.png')} style={cs.ImageStyle}/>                
                        <TextInput style={cs.textInput} placeholder={gc.STRNAME.PASS} placeholderTextColor='#199187' underlineColorAndroid='transparent' secureTextEntry={true}/>                                      
                    </View>
                    <View style={{ flexDirection: 'row', marginTop:20, alignSelf: 'stretch',justifyContent: 'space-between'}}>
                        <View>
                            <TouchableOpacity style={cs.button}>
                                <Text style={cs.buttonText} onPress={() => this.props.navigation.navigate('Home_Main')}>
                                   {gc.STRNAME.LOGIN}
                                </Text>            
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={cs.button}>
                                <Text style={cs.buttonText}>{gc.STRNAME.EXIT}</Text>            
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        );
        
    }
}