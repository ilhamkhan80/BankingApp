import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../themes/Colors/Index'
import theme from '../../utils/Constants'
import { CustomLabelprops } from '../../Types/Index'
const CustomLabel = (props:CustomLabelprops) => {
  const {Conatiner,addLeft,addRight,CustomLabel,title}=props
  return (
    <View style={[styles.Container,Conatiner]}>
      {addLeft}
      <Text style={[styles.LabelStyle,CustomLabel]}>{title}</Text>
      {addRight}
    </View>
  )
}

export default CustomLabel

const styles = StyleSheet.create({
    Container:{
    marginTop:'10%',
    alignSelf:'center',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
    },
    LabelStyle:{
        fontFamily:theme.SEMIBOLD,
        fontSize:20,
        color:Colors.white
         
    }
})