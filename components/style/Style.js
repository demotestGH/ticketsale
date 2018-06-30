/**
 * Style.js
 */
import { StyleSheet } from 'react-native';
import gc from '../src/Globals'

const commonstyle =StyleSheet.create({
    /**
     * Login_Style
     */
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: gc.COLOR.PRIMARYCOLOR,//'#66CCFF',
        paddingLeft:20,
        paddingRight:20
      },    
    sectionStyle: {   
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: gc.COLOR.BACKGROUDTEXT,//'#CCFFFF',
        borderWidth: 0,
        borderColor: 'transparent',
        height:50,
        padding:10,
        borderRadius: 25,
    }, 
    imageStyle: {
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center',
    },
    headerLoginTitle:{
        fontSize: 24,
        color: gc.COLOR.TITLECOLOR,//'#ff6600',
        fontFamily: 'inkfree',
        paddingBottom:10,
        borderBottomColor: gc.COLOR.BACKGROUDBUTTON,//'#199187',
        borderBottomWidth:1,
    },
    textInput:{
        fontFamily:'tahoma',
        fontSize: 16,
        alignSelf: 'stretch',
        height:40,
        width:220,
        color: gc.COLOR.BACKGROUDBUTTON//'#199187',       
    },
    button:{
        alignItems:'center',
        backgroundColor:gc.COLOR.BACKGROUDBUTTON,//'#199187',
        width:120,
        height:50,
        padding:15,
        borderRadius:25
    },
    buttonText:{
        fontSize: 16,
        fontFamily:'tahoma',
        color:gc.COLOR.BACKGROUDTEXT,//'#CCFFFF',
    },
    logo:{
        height:100,
        width:100,
    },

    /**
     * Main_Style
     */
    headerStyle:{
        backgroundColor: gc.COLOR.BACKGROUD_HEADER_BAR,//'#f4511e',        
        paddingLeft:20,
        paddingRight:20   
    },
    headerMainTitle:{
        color:'#CCFFFF',
        padding:5,
        fontSize:20,
        fontFamily:'tahoma'
    },
});

export default commonstyle;
