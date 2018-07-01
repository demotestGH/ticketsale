/**
 * Main.js - home screen
 */
import React from 'react'
import{ 
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import cs from '../style/Style'
import gc from '../src/Globals'


export default class SideMenu extends React.Component {      
    render() {
      return (
        <View style={cs.containerSideMenu}>

          <View style={cs.SideMenuHeader}>  
            <View style={{padding:10,flexDirection: 'row'}}>   
              <Image source={require('../icons/boy.png')} style={[cs.SideMenuIcon,{}]}/>  
              <View style={{paddingLeft:5, paddingBottom:22,paddingTop:20}}> 
                <Text style={cs.SMHText}>{gc.SIDE_MENU_HEADER.UNAME}</Text>
                <Text style={[cs.SMHText,{fontSize:14}]}>{gc.SIDE_MENU_HEADER.UID}</Text>
              </View>
            </View>
          </View>

          <ScrollView>
                <View style={{padding:20,flexDirection: 'row'}}>
                  <View>

                      <TouchableOpacity style={cs.SMContentPadding} onPress={() =>{}}>
                        <Image
                          source={require('../icons/dept.png')}
                          style={cs.imageStyle}
                        />
                        <Text style={cs.SMContentText}>{gc.SIDE_MENU_LIST.DEPT}</Text>
                      </TouchableOpacity> 
                
                      <TouchableOpacity style={cs.SMContentPadding} onPress={() =>{}}>
                        <Image
                          source={require('../icons/floorid.png')}
                          style={cs.imageStyle}
                        /> 
                        <Text style={cs.SMContentText}>{gc.SIDE_MENU_LIST.FLOOR}</Text>  
                      </TouchableOpacity> 

                      <TouchableOpacity style={cs.SMContentPadding} onPress={() =>{}}>
                        <Image
                          source={require('../icons/ticketicon.png')}
                          style={cs.imageStyle}
                        /> 
                        <Text style={cs.SMContentText}>{gc.SIDE_MENU_LIST.TIC}</Text>  
                      </TouchableOpacity> 

                      <TouchableOpacity style={cs.SMContentPadding} onPress={() =>{}}>
                        <Image
                          source={require('../icons/bill.png')}
                          style={cs.imageStyle}
                        /> 
                        <Text style={cs.SMContentText}>{gc.SIDE_MENU_LIST.RPT}</Text>  
                      </TouchableOpacity> 

                      <TouchableOpacity style={cs.SMContentPadding} onPress={() =>{}}>
                        <Image
                          source={require('../icons/logout.png')}
                          style={cs.imageStyle}
                        /> 
                        <Text style={cs.SMContentText}>{gc.SIDE_MENU_LIST.LOUT}</Text>  
                      </TouchableOpacity> 

                      <TouchableOpacity style={cs.SMContentPadding} onPress={() =>{}}>
                        <Image
                          source={require('../icons/exit.png')}
                          style={cs.imageStyle}
                        /> 
                        <Text style={cs.SMContentText}>{gc.STRNAME.EXIT}</Text>  
                      </TouchableOpacity> 

                  </View>
               </View>
          </ScrollView>

        </View>
      );
    }
  }
  