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
        backgroundColor: gc.COLOR.SIDE_MENU_BACKGROUD_COLOR,
        paddingLeft:20,
        paddingRight:20
      },    
    sectionStyle: {   
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: gc.COLOR.BACKGROUDTEXT,
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
        fontSize: 28,
        color: gc.COLOR.TITLECOLOR,
        fontFamily: 'inkfree',
        paddingBottom:10,
        borderBottomColor: gc.COLOR.UNDERLINE_TITILE_COLOR,
        borderBottomWidth:1,
    },
    textInput:{
        fontFamily:'tahoma',
        fontSize: 16,
        alignSelf: 'stretch',
        height:40,
        width:220,
        color: gc.COLOR.BACKGROUDBUTTON  
    },
    button:{
        alignItems:'center',
        backgroundColor:gc.COLOR.BACKGROUDBUTTON,
        width:120,
        height:50,
        padding:15,
        borderRadius:25
    },
    buttonText:{
        fontSize: 16,
        fontFamily:'tahoma',
        color:gc.COLOR.BACKGROUDTEXT,
    },
    logo:{
        height:100,
        width:100,
    },

    /**
     * Main_Style
     */
    headerStyle:{
        backgroundColor: gc.COLOR.SIDE_MENU_HEADER_COLOR,    
        paddingLeft:20,
        paddingRight:20,
    },
    headerMainTitle:{
        color:gc.COLOR.BACKGROUDTEXT,
        padding:5,
        fontSize:20,
        fontFamily:'tahoma'
    },

    /**
     * Side_Menu_Style
     */
    containerSideMenu:{
        flex: 1,       
        backgroundColor: gc.COLOR.SIDE_MENU_BACKGROUD_COLOR,
    },
    SideMenuHeader:{
        alignSelf: 'stretch',
        height:100,
        backgroundColor:gc.COLOR.SIDE_MENU_HEADER_COLOR
    },    
    SideMenuIcon:{
        height:60,
        width:60,
        resizeMode : 'stretch',
    },
    SMHText:{
        fontFamily:'tahoma',
        fontSize:18,
        color:gc.COLOR.BACKGROUDTEXT
    },
    SMContentPadding:{
        flexDirection: 'row',
        paddingBottom:20,
    },
    SMContentText:{
        paddingLeft:10,
        fontFamily:'tahoma',
        fontSize:16,
        color:gc.COLOR.SIDE_MENU_CONTENT_COLOR,
    },

});

export default commonstyle;
