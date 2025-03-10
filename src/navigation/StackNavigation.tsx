import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen/Index ';
import BottomNavigation from '../navigation/BottomNavigation';
import Notification from '../screens/Notification/Index';
import DepositeScreen from '../screens/DepositeScreen/Index';

const StackNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='Bottom' component={BottomNavigation} />
                <Stack.Screen name='DepositeScreen' component={DepositeScreen}/>
                <Stack.Screen name='Notification' component={Notification}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})