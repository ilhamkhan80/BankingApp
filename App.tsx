import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen/Index '
import HomeScreen from './src/screens/HomeScreen/Index'
import AppNavigation from './src/navigation/AppNavigation'
import Notification from './src/screens/Notification/Index'
import ListScreen from './src/screens/ListScreen/Index'
import CustomText from './src/components/CustomText/Index'
import { Image } from 'react-native'
import { Icon } from 'react-native-vector-icons/Icon'
import CustomView from './src/components/CustomView/Index'

const App = () => {
  return (
    <AppNavigation/>
    // <HomeScreen/>
    // <Deposit/>
    // <Notification/>
    // <ListScreen/>
    
    // <CustomView/>
  )
}

export default App

const styles = StyleSheet.create({})