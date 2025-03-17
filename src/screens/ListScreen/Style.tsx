import { Dimensions, PixelRatio, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors/Index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

const fontSize = (size: number) => size / PixelRatio.getFontScale(); 

const Styles = StyleSheet.create({
    RectangleImageStyle:{
     width:'93%',
     height:hp("22%"),
     alignSelf:'center',
     marginTop:'19%',
     marginLeft:wp('9%')
    },
    MainImage:{
        width:'100%',
        height:812
    },
    Total:{
        fontFamily:theme.MEDIUM,
        fontSize:10,
        color:Colors.white,
        bottom:'60%',
        marginLeft:'15%',
        marginTop:'40%',
        
    },
    Amount:{
        fontFamily:theme.BOLD,
        fontSize:26,
        color:Colors.white,
        bottom:'61%',
        marginLeft:'15%',


    },
    Direction:{
        flexDirection:'row',
        alignItems:'center',
        bottom:'60%',
        marginLeft:'4%',
        justifyContent:'space-around'

    },
    ImageStyle:{
        width:28,
        height:28,
    },
    Income:{
        fontFamily:theme.MEDIUM,
        fontSize:10,
        color:Colors.white,
        marginLeft:'3%'
    },
    TextSView:{
        flexDirection:'column',
        marginLeft:'3%',
        

    },
    IncomeDollars:{
        fontFamily:theme.MEDIUM,
        fontSize:14,
        color:Colors.white
    },
    Alignments:{
        flexDirection:'row',
        alignItems:'center'
    },
    ButtonView:{
        width:'43%',
        backgroundColor:Colors.ButtonColor,
        height:40,
        borderRadius:48,
        marginLeft:'5%',

    },
    ProfileText:{
        color:Colors.white,
        textAlign:'center',
       top:10
    },
    ButtonViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        bottom:'25%',
        paddingHorizontal:10

    },
    RectangleStyle:{
        borderWidth:1,
        borderColor:'#05877E',
        backgroundColor:'#05877E33',
        width:'40%',
        height:146,
        bottom:'120%',
        marginLeft:'5%',
        borderRadius:22,
    },
    Filepng:{
        width:26,
        height:30,
        alignSelf:'center',
        top:-10
    },
    SquareView:{
        flexDirection:'column',
        marginTop:'30%'

    },
    TextDetails:{
        fontFamily:theme.REGULAR,
        fontSize:14,
        color:Colors.white,
        textAlign:'center',
    },
    RectangleView:{
        flexDirection:'row',
        // paddingHorizontal:10
    },
    addperson:{
        width:36,
        height:36,
        alignSelf:'center',
        top:-10

    },
    msgpng:{
        width:38.33,
        height:38.33,
        alignSelf:'center',
        top:-10

    }
})
export default Styles
