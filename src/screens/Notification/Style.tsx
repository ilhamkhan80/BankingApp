import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../themes/Colors/Index'
import theme from '../../utils/Constants'

const Styles = StyleSheet.create({
    MainView:{
        flex:1,
        backgroundColor:Colors.background
    },
    LeftStyle: {
        width: 33,
        height: 33.9,
        right: '270%'
    },
    TodayText:{
        fontFamily:theme.MEDIUM,
        fontSize:12,
        color:Colors.white,
        marginLeft:'8%',
        marginTop:'7%'
    },
    RectangleView:{
        width:'90%',
        height:74,
        backgroundColor:Colors.grayType,
        alignSelf:'center',
        borderRadius:22,
        marginTop:'2%'

    },
    SyncImage:{
        width:41,
        height:41,
        top:-8
    
    },
    ImageView:{
        marginTop:'5%',
        marginLeft:'7%',
        flexDirection:'row',
        alignItems:'center',
        top:-4

    },
    AlignColumn:{
        flexDirection:'column'
    },
    Details:{
      fontFamily:theme.REGULAR,
      fontSize:10,
      color:Colors.white,
      marginLeft:'4%',
      

    },
    AppUpdate:{
        fontFamily:theme.MEDIUM,
        fontSize:12,
        color:Colors.BackColor,
        marginLeft:'4%',
    },
    DaysText:{
        left:'90%',
        top:-10,
        color:'#858585',
        fontFamily:theme.REGULAR,
        fontSize:9
    }
})
export default Styles
