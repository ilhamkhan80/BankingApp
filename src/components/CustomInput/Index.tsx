import { Image, StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import Colors from '../../themes/Colors/Index'
import theme from '../../utils/Constants'
import { inputprops } from '../../Types/Index'

const CustomInput = ({ addLeft, addRight, placeholder, Color, PlaceholderStyle, secureTextEntry, onChangeText, customStyle, value,defaultValue }:any) => {
  // const { addLeft, addRight, placeholder, Color, PlaceholderStyle, secureTextEntry, onChangeText, customStyle, value,defaultValue } = props;

  return (
    <View style={[styles.inputContainer, customStyle]}>
      {addLeft}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Color || Colors.InputColor}
        style={[styles.textInput, PlaceholderStyle]}
        secureTextEntry={secureTextEntry}
        value={value}  
        onChangeText={onChangeText}
        multiline={true} 
        defaultValue={defaultValue}
      />
      {addRight}
    </View>
  )
}

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 32,
    // paddingHorizontal: 10, 
    marginTop: '5%',
    width: '90%',
    height:40,
    alignSelf: 'center',
    
    
  },
  textInput: {
    flex: 1, 
    fontSize: 12,
    fontFamily: theme.GLORYMEDIUM,
    color: Colors.InputColor,
    marginLeft:15
  }
});
