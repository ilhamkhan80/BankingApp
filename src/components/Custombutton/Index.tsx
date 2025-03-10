import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../themes/Colors/Index'
import theme from '../../utils/Constants'
import { CustomButtonProps } from '../../Types/Index'

const CustomButton = (props: CustomButtonProps) => {
  const { addLeft, addRight, style, textStyle, title, onPress } = props
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {addLeft}
      <Text style={[styles.text, textStyle]}>{title}</Text>
      {addRight}
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    height:46,
    width: '90%',
    borderRadius: 65,
    justifyContent: 'center',
    alignSelf:'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:Colors.ButtonColor,
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily:theme.BOLD,
    fontSize:12,
    
  }
})
