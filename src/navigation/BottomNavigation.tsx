import { Image, StyleSheet, View, ImageBackground, Dimensions, PixelRatio } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../themes/Colors/Index';
import HomeScreen from '../screens/HomeScreen/Index';
import Share from '../BottomScreens/Share';
import Scan from '../BottomScreens/Scan';
import Deposite from '../BottomScreens/Deposite';
import Details from '../BottomScreens/Details';
import ListScreen from '../screens/ListScreen/Index';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

const fontSize = (size: number) => size / PixelRatio.getFontScale();

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
                    backgroundColor: '#303030',
                    borderTopWidth: wp(0),
                    height: hp('15%'),
                    overflow: 'hidden',
                    // borderTopEndRadius:50,
                    // borderTopStartRadius:50
                },
                tabBarBackground: () => (
                    <ImageBackground 
                        source={require('../images/back.png')}
                        style={styles.backgroundImage}
                    />
                ),
            }}>
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
                            <View style={focused ? styles.LineView : null}
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
                            <View style={focused ? styles.LineView : null}
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
                        <View style={{
                            width: 60,
                            height: 60,
                            borderRadius: 70,
                            backgroundColor: '#20504D',
                            top: 40,
                            right: 2,
                            shadowColor: 'transparent'
                        }}>
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
                            <View style={focused ? styles.LineView : null}
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
                            <View style={focused ? styles.LineView : null}
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
        backgroundColor: Colors.black,
        width: '100%',

        // height:119
    },
    // iconStyle: {
    //     width: 24,
    //     height: 22,
    //     top:30
    // },
    Home: {
        width: 20,
        height: 21,
        top: 50,
    },
    share: {
        width: 24,
        height: 24,
        top: 50,
    },
    scan: {
        width: 24,
        height: 24,
        top: 16,
        left: 18
    },
    Deposite: {
        width: 19,
        height: 22,
        top: 50,
    },
    Details: {
        width: 22,
        height: 19,
        top: 50,
    },
    LineView: {
        borderBottomColor: '#05877E',
        borderBottomWidth: 3,
        top: 60,
        width: 25,
        right: 2
    }
});