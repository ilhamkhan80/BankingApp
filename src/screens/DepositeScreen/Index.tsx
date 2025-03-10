import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Styles from '../DepositeScreen/Style'
import CustomLabel from '../../components/CustomLabel/Index'
import { Image } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

const DepositeScreen= () => {
    type RootStackParamList = {
        Bottom: undefined;
        DepositeScreen: undefined;
        Notification: undefined;
    };
    
    type NavigationProp = StackNavigationProp<RootStackParamList, 'Notification'>;
    const navigation = useNavigation<NavigationProp>();
    
    const [focused, setFocused] = useState('Recommendation')
    return (
        <View style={Styles.MainView}>
            <CustomLabel title='Deposit' addLeft={
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image style={Styles.LeftStyle} source={require('../../images/left.png')} />
                </TouchableOpacity>
            }
                addRight={
                <TouchableOpacity onPress={() => navigation.push('Notification')}>
                    <Image style={Styles.bellstyle} source={require('../../images/rightbell.png')} />
                </TouchableOpacity>}
            />
            <View style={Styles.RecomendationView}>
                <TouchableOpacity onPress={() => setFocused('Recommendation')}>
                    <Text style={Styles.OngoingText}>
                        Recommendation
                    </Text>
                    <View style={focused === 'Recommendation' ? Styles.LineView : null} />

                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFocused('Ongoing')} style={Styles.OngoingView}>
                    <Text style={Styles.OngoingText}>
                        Ongoing
                    </Text>
                    <View style={focused === 'Ongoing' ? Styles.OnLineView : null} />
                </TouchableOpacity>
            </View>
            <View style={Styles.RectangleStyle}>
                <View style={Styles.FormTextView}>
                <Text style={Styles.FormText}>Starting From</Text>
                <Text style={Styles.MoneyStyle}> $1218.000,00</Text>
                </View>
                <View style={Styles.PercentageView}>
                    <Text style={Styles.Percentage}>7%</Text>
                    <Text style={Styles.monthText}>5 Months</Text>
                </View>
                <TouchableOpacity style={Styles.ButtonView}>
                 <Text style={Styles.DepositeText}>Open Deposit</Text>
                 <Image style={Styles.ArrowImage}source={require('../../images/right.png')}/>
                </TouchableOpacity>
            </View>
            <View style={[Styles.RectangleStyle,{top:-15}]}>
                <View style={Styles.FormTextView}>
                <Text style={Styles.FormText}>Starting From</Text>
                <Text style={Styles.MoneyStyle}> $2318.000,00</Text>
                </View>
                <View style={Styles.PercentageView}>
                    <Text style={Styles.Percentage}>3%</Text>
                    <Text style={Styles.monthText}>2 Months</Text>
                </View>
                <TouchableOpacity style={Styles.ButtonView}>
                 <Text style={Styles.DepositeText}>Open Deposit</Text>
                 <Image style={Styles.ArrowImage}source={require('../../images/right.png')}/>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={Styles.StaticDeposite}>My Statistic Deposit</Text>
            </View>
            <View>
                <ImageBackground style={Styles.GraphImage} source={require('../../images/graph.png')}>
                <View>
                    <Text style={Styles.StaticText}>Statistic Deposit</Text>
                </View>
                <View style={Styles.GraphText}>
                    <Text style={Styles.TimeText}>5.00</Text>
                    <Text style={Styles.TimeText}>6.00</Text>
                    <Text style={Styles.TimeText}>7.00</Text>
                    <Text style={Styles.TimeText}>8.00</Text>
                    <Text style={Styles.TimeText}>9.00</Text>
                    <Text style={Styles.TimeText}>10.00</Text>


                </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export default DepositeScreen

const styles = StyleSheet.create({})