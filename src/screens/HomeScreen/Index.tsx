import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import Styles from '../HomeScreen/Style'
import { Image } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import ReactNativeBiometrics from 'react-native-biometrics'
import { StackNavigationProp } from '@react-navigation/stack'

const HomeScreen = () => {
    type RootStackParamList = {
        Bottom: undefined;
        DepositeScreen: undefined;
        Notification: undefined
    };

    type NavigationProp = StackNavigationProp<RootStackParamList, 'DepositeScreen'>;
    const navigation = useNavigation<NavigationProp>();
    const [steps, setsteps] = useState("TopUp")
    useFocusEffect(
        useCallback(() => {
            setsteps("TopUp");
        }, [])
    );

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    return (
        <ScrollView style={Styles.MainView}>


            <ImageBackground resizeMode='stretch' style={Styles.ImageBackground} source={require('../../images/rectangle2.png')}>
                <View style={Styles.ImageTextView}>
                    <View style={Styles.ImageView}>
                        <Image resizeMode='contain' style={Styles.PersonImage} source={require('../../images/image.png')} />
                    </View>
                    <View>
                        <Text style={Styles.NameStyle}>Hello, Grachia Zaya!</Text>
                        <Text style={Styles.DetailStyle}>Welcome to Flybank Banking
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Image resizeMode='contain'style={Styles.BellStyle} source={require('../../images/whitebell.png')} />

                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <View style={Styles.RectangleView}>
                <View style={Styles.DetailsView}>
                    <Text style={Styles.FlybankStyle}>Flybank Account</Text>
                    <View style={Styles.ImageListView}>
                        <Image style={Styles.ListImageStyle} source={require('../../images/list.png')} />
                    </View>
                    <View style={Styles.IdText}>
                        <Text style={Styles.IdTextStyle}>
                            1281-1942-9311
                        </Text>
                    </View>
                </View>
                <View style={Styles.AmountStyleView}>
                    <Text style={Styles.AmountStyle}>
                        {isPasswordVisible ? "••••••••••" : "$1791.868,000"}
                    </Text>
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Image
                            style={[Styles.EyeStyle, { tintColor: isPasswordVisible ? "#0F8B83" : "#0F8B83" }]}
                            source={isPasswordVisible ? require('../../images/eye.png') : require('../../images/greeneye.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={Styles.ScanningView}>
                    <TouchableOpacity style={Styles.ScanViewStyle}>
                        <Image style={Styles.ImageStyle} source={require('../../images/scan.png')} />
                        <Text style={Styles.QRISStyle}>QRIS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.TransferViewStyle}>
                        <View style={Styles.TransferAndPayView}>
                            <Image style={Styles.TransferImage} source={require('../../images/tranferuser.png')} />
                            <Text style={Styles.TransferTextStyle}>Transfer & Pay</Text>
                        </View>

                    </TouchableOpacity>
                </View>
                <View style={Styles.ListViewStyle}>
                    <View style={steps === 'TopUp' ? Styles.ListViewActive : Styles.ListView}>
                        <TouchableOpacity onPress={() => setsteps('TopUp')} style={steps === 'TopUp' ? Styles.IconViewActive : Styles.IconView}>
                            <Image style={steps === 'TopUp' ? Styles.IconActive : Styles.Icon} source={require('../../images/add.png')} />
                        </TouchableOpacity>
                        <Text style={Styles.TopTextStyle}>Top Up</Text>
                    </View>
                    <View style={steps === 'Deposit' ? Styles.ListViewActive : Styles.ListView}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('DepositeScreen');
                            setsteps('Deposit');
                        }}
                            style={steps === 'Deposit' ? Styles.IconViewActive : Styles.IconView}>
                            <Image style={steps === 'Deposit' ? Styles.IconActive1 : Styles.DepositInactive} source={require('../../images/deposite.png')} />
                        </TouchableOpacity>
                        <Text style={Styles.TopTextStyle}>Deposit</Text>
                    </View>
                    <View style={steps === 'Pocket' ? Styles.ListViewActive : Styles.ListView}>
                        <TouchableOpacity onPress={() => setsteps('Pocket')} style={steps === 'Pocket' ? Styles.IconViewActive : Styles.IconView}>
                            <Image style={steps === 'Pocket' ? Styles.IconActivePocket : Styles.IconInactive} source={require('../../images/pocket.png')} />
                        </TouchableOpacity>
                        <Text style={Styles.TopTextStyle}>Pocket</Text>
                    </View>
                    <View style={steps === 'Invited' ? Styles.ListViewActive : Styles.ListView}>
                        <TouchableOpacity onPress={() => setsteps('Invited')} style={steps === 'Invited' ? Styles.IconViewActive : Styles.IconView}>
                            <Image style={steps === 'Invited' ? Styles.IconActiveInvited : Styles.IconInActiveInvited} source={require('../../images/invited.png')} />
                        </TouchableOpacity>
                        <Text style={Styles.TopTextStyle}>Invited</Text>
                    </View>
                    <View style={steps === 'SeeAll' ? Styles.ListViewActive : Styles.ListView}>
                        <TouchableOpacity onPress={() => setsteps('SeeAll')} style={steps === 'SeeAll' ? Styles.IconViewActive : Styles.IconView}>
                            <Image style={steps === 'SeeAll' ? Styles.IconActiveSeeAll : Styles.IconSeeAll} source={require('../../images/seeall.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={Styles.TopTextStyle}>See All</Text>

                        </TouchableOpacity>
                    </View>
                </View>
                </View>
                <View style={Styles.SpecialPromoView}>
                    <Text style={Styles.SpecialPromo}>Special Promo For You</Text>
                    <TouchableOpacity>
                        <Text style={Styles.SeeAll}>See All</Text>
                    </TouchableOpacity>
                </View>



            <View style={Styles.RectangleImageView}>
                <ImageBackground resizeMode='stretch' style={Styles.ImageRectangle} source={require('../../images/Rectangle3.png')} >
                    <View style={Styles.ViewStyle}>
                        <Image style={Styles.PhoneImage} source={require('../../images/phone.png')} />
                        <View >
                            <Text style={Styles.TextStyle}>First Transaction With Flybank</Text>
                            <Text style={Styles.CashBack}>CASHBACK UP TO</Text>
                            <View style={Styles.OfferView}>
                                <Image resizeMode='contain' style={Styles.LineImage} source={require('../../images/Line.png')} />
                                <Text style={Styles.OfferStyle}>
                                    80%
                                </Text>
                                <Text style={Styles.OffTextStyle}>OFF</Text>
                            </View>
                            <Text style={Styles.TextStylePeriod}># Periode 12-19 December 2024</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={[Styles.SpecialPromoView, { marginTop: '9%' }]}>
                <Text style={Styles.SpecialPromo}>My Transaction History</Text>
                <TouchableOpacity>
                    <Text style={Styles.SeeAll}>See All</Text>
                </TouchableOpacity>

            </View>
            <View style={Styles.ListStyle}>
                <Image style={Styles.Person1Style} source={require('../../images/person1.png')} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={Styles.PersonTextStye}>
                        Almaira Safaluna
                    </Text>
                    <Text style={Styles.DateStyle}>18 December 2024</Text>
                </View>
                <View>
                    <Text style={Styles.DollarsStyle}>+$ 32.32,00</Text>
                </View>
            </View>
            <View style={[Styles.ListStyle,{marginTop:"2%",marginBottom:'30%'}]}>
                <Image style={Styles.Person1Style} source={require('../../images/person2.png')} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={Styles.PersonTextStye}>
                        Kamila Hadista
                    </Text>
                    <Text style={Styles.DateStyle}>29 December 2024</Text>
                </View>
                <View>
                    <Text style={[Styles.DollarsStyle, { left: '10%', }]}>+$ 81.12,00</Text>
                </View>
            </View>
            

            {/* </View> */}

        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})