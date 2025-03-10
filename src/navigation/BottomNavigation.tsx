import { Image, StyleSheet, View, ImageBackground } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../themes/Colors/Index';
import HomeScreen from '../screens/HomeScreen/Index';
import Share from '../BottomScreens/Share';
import Scan from '../BottomScreens/Scan';
import Deposite from '../BottomScreens/Deposite';
import Details from '../BottomScreens/Details';
import ListScreen from '../screens/ListScreen/Index';


const BottomNavigation = () => {
    const Bottom = createBottomTabNavigator();

    return (
        <Bottom.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.white,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: '#646464',
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'transparent', 
                    borderTopWidth: 0,
                    height: 119,
                    width:'100%', 
                    elevation: 0, 
                    marginBottom:10,
                    paddingVertical:10
                },
                tabBarBackground: () => (
                    <ImageBackground
                        source={require('../images/back.png')}
                        style={styles.backgroundImage}
                    />
                ),
            }}
        >
            <Bottom.Screen
                name="HOME"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View >
                            <Image
                                style={[
                                    styles.Home,
                                    { tintColor: focused ? Colors.white : Colors.gray },
                                ]}
                                source={require('../images/home.png')}
                            />
                            <View style={focused?styles.LineView:null}
                            />
                        </View>
                    ),
                }}
            />
             <Bottom.Screen
                name="Share"
                component={Share}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                style={[
                                    styles.share,
                                    { tintColor: focused ? Colors.white : Colors.gray },
                                ]}
                                source={require('../images/share.png')}
                            />
                             <View style={focused?styles.LineView:null}
                            />
                        </View>
                    ),
                }}
            />
            
             <Bottom.Screen
                name="Scan"
                component={Scan}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{width:60,height:60,borderRadius:70,backgroundColor:'#20504D',top:30,right:5}}>
                            <Image
                                style={[
                                    styles.scan,
                                    { tintColor: Colors.white },
                                ]}
                                source={require('../images/scan2.png')}
                            />
                            
                            
                        </View>
                    ),
                }}
            />
            <Bottom.Screen name='Deposite' component={Deposite}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image
                            style={[
                                styles.Deposite,
                                { tintColor: focused ? Colors.white : Colors.gray },
                            ]}
                            source={require('../images/deposite2.png')}
                        />
                         <View style={focused?styles.LineView:null}
                            />
                        
                    </View>
                ),
            }}
            />
             <Bottom.Screen name='Details' component={ListScreen}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image
                            style={[
                                styles.Details,
                                { tintColor: focused ? Colors.white : Colors.gray },
                            ]}
                            source={require('../images/Details.png')}
                        />
                         <View style={focused?styles.LineView:null}
                            />
                        
                    </View>
                ),
            }}
            />
            
        </Bottom.Navigator>
    );
};

export default BottomNavigation;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
    },
    iconStyle: {
        width: 24,
        height: 22,
        top:80
    },
    Home:{
        width:20,
        height:21,
        top:40
    },
    share:{
        width:24,
        height:24,
        top:40
    },
    scan:{
        width:24,
        height:24,
        top:16,
        left:18
    },
    Deposite:{
        width:19,
        height:22,
        top:40
    },
    Details:{
        width:22,
        height:19,
        top:40
    },
    LineView:{
        borderBottomColor:'#05877E',
        borderBottomWidth:3,
        top:50,
        width:25,
        right:2
    }
});
