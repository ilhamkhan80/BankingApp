import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomTextProps } from '../../Types/Index'
import Colors from '../../themes/Colors/Index'
import theme from '../../utils/Constants'

const CustomText = (props: CustomTextProps) => {
    const { CustomStyle, title } = props
    return (
         <Text style={[styles.ChildStyle, CustomStyle]}>{title}</Text>
    )
}

export default CustomText

const styles = StyleSheet.create({
  ChildStyle: {
        fontFamily:theme.BOLD,
        fontSize:20

    }
})