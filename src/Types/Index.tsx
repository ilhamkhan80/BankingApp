import React, { ReactNode } from "react"
import { TextStyle, ViewStyle } from "react-native"

export interface inputprops {
  onPress?: () => void,
  addLeft?: ReactNode,
  addRight?: ReactNode,
  onChangeText?: ((text: string) => void),
  placeholderTextColor?: string,
  secureTextEntry?: boolean,
  value?: any,
  customStyle?:ViewStyle,
  placeholder?:any,
  Color?:string,
  PlaceholderStyle?: TextStyle;
  defaultValue?:any
}

export interface CustomButtonProps {
  onPress?: () => void,
  addLeft?: ReactNode,
  addRight?: ReactNode,
  textStyle?: TextStyle,
  style?: ViewStyle,
  title?: string
}

export interface CustomHeaderProps {
  addLeft?: ReactNode,
  addRight?: ReactNode,
  Text?: string,
  Children?: string,
  style?: ViewStyle,
  textStyle?: TextStyle,
  title?: string,
  onPress?: () => void,
  CustomView?:ViewStyle,
  VectorStyle?:ViewStyle,
  HeaderStyle?:ViewStyle,
  image?:string,
  LeftArrow?:any,
  
}

export interface CustomLabelprops {
  addLeft?: ReactNode,
  addRight?:ReactNode,
  Text?: string,
  title?: string,
  Conatiner?:ViewStyle,
  CustomLabel?:ViewStyle
}
export interface CustomTextProps{
  CustomStyle?:ViewStyle,
 
  title?: React.ReactNode,
}
export interface CustomViewProps{
  Container?:ViewStyle,
  addLeft?: ReactNode,
  addRight?:ReactNode,
  Children?:React.ReactNode

}


