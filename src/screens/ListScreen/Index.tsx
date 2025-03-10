import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Styles from './Style'
import { Image } from 'react-native'

const ListScreen = () => {
    return (
        <View>
            <ImageBackground resizeMode='cover' style={Styles.MainImage} source={require('../../images/home2.png')}>
                <View>
                    <ImageBackground resizeMode='contain' style={Styles.RectangleImageStyle} source={require('../../images/rectangle4.png')} />
                    <Text style={Styles.Total}>Total Balance</Text>
                    <Text style={Styles.Amount}>$ 2,932,00 </Text>
                    <View style={Styles.Direction}>
                        <View style={Styles.Alignments}>
                            <TouchableOpacity>
                            <Image style={Styles.ImageStyle} source={require('../../images/income.png')} />
                            </TouchableOpacity>
                            <View style={Styles.TextSView}>
                                <Text style={Styles.Income}>Income</Text>
                                <Text style={Styles.IncomeDollars}>$ 2,932,00 </Text>

                            </View>

                        </View>
                        <View style={[Styles.Alignments, { right: '7%' }]}>
                            <TouchableOpacity>
                            <Image style={Styles.ImageStyle} source={require('../../images/speading.png')} />
                            </TouchableOpacity>
                            <View style={Styles.TextSView}>
                                <Text style={Styles.Income}>Spending</Text>
                                <Text style={Styles.IncomeDollars}>$ 120,00 </Text>

                            </View>

                        </View>

                    </View>
                </View>
                <View style={Styles.ButtonViewStyle}>
                <TouchableOpacity style={Styles.ButtonView}>
                <Text style={Styles.ProfileText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.ButtonView}>
                <Text style={Styles.ProfileText}>Settings</Text>
                </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal:10}}>
                <View style={Styles.RectangleView}>
                    <TouchableOpacity style={Styles.RectangleStyle}>
                        <View style={Styles.SquareView}>
                        <Image style={Styles.Filepng}source={require('../../images/file.png')}/>
                        <Text style={Styles.TextDetails}>Account{"\n"}Statement</Text>
                        </View>
                    
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[Styles.RectangleStyle,{left:'5%'}]}>
                        <View style={Styles.SquareView}>
                        <Image style={Styles.addperson}source={require('../../images/addperson.png')}/>
                        <Text style={Styles.TextDetails}>Payee{"\n"}Managment</Text>
                        </View>
                    
                    </TouchableOpacity>
                    
                </View>
                <TouchableOpacity style={[Styles.RectangleStyle,{bottom:'55%',left:'1%'}]}>
                        <View style={Styles.SquareView}>
                        <Image style={Styles.msgpng}source={require('../../images/msg.png')}/>
                        <Text style={Styles.TextDetails}>Complaint</Text>
                        </View>
                    
                    </TouchableOpacity>
                    </View>
                
            </ImageBackground>

        </View>
    )
}

export default ListScreen

const styles = StyleSheet.create({})