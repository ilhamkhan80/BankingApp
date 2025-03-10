import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import { CustomViewProps } from '../../Types/Index'
import Colors from '../../themes/Colors/Index'

const CustomView = (props:CustomViewProps) => {
  const{Container,Children}=props
  return (
    <View style={[styles.ViewStyling,Container]}>{Children}
    </View>
  )
}

export default CustomView

const styles = StyleSheet.create({
  ViewStyling:{
    flex:1,
    backgroundColor:Colors.back
  }
})