import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../utils/Constants'
import Colors from '../themes/Colors/Index'
const Scan = () => {
  return (
    <View style={styles.MainView}>
         <Text style={styles.TextStyle}>COMING SOON</Text>
       </View>
  )
}

export default Scan

const styles = StyleSheet.create({
  MainView: {
    flex:1,
    backgroundColor:'#212121'
  },
  TextStyle:{
    fontSize:30,
    fontFamily:theme.BOLD,
    alignSelf:'center',
    color:Colors.ButtonColor,
    textAlign:'center',
   marginTop:'80%'
  }
})