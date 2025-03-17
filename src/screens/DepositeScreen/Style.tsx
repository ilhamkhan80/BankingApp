import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../themes/Colors/Index'
import theme from '../../utils/Constants'


const Styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: Colors.backColor
    },
    LeftStyle: {
        width: 33,
        height: 33.9,
        // right: '280%',
        marginTop:'10%'
    },
    bellstyle: {
        width: 33,
        height: 33.9,
        // left:'280%',
        marginTop:'10%'

    },
    RecomendationView:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:'8%',
        marginTop:'9%'
    },
    OngoingView:{
        marginLeft:'7%'
    },
    OngoingText:{
        fontFamily:theme.REGULAR,
        fontSize:15,
        color:Colors.white
    },
    LineView:{
        borderBottomColor:'#05877E',
        borderBottomWidth:2,
        width:'95%',
        top:5
    },
    OnLineView:{
        borderBottomColor:'#05877E',
        borderBottomWidth:2,
        width:'93%',
        top:5

    },
    RectangleStyle:{
        width:'90%',
        paddingHorizontal:5,
        paddingVertical:0,
        borderRadius:12,
        marginTop:'8%',
        
        alignSelf:'center',
        backgroundColor:Colors.depositeRec,
        
    
    },
    FormTextView:{
        marginLeft:'10%',
        marginTop:'8%',
        alignItems:'center',
        flexDirection:'row'
    },
    FormText:{
        fontFamily:theme.REGULAR,
        color:Colors.starting,
        fontSize:13
        
    },
    MoneyStyle:{
        fontFamily:theme.SEMIBOLD,
        fontSize:13,
        color:Colors.white,
        marginLeft:'2%'
    },
    Percentage:{
        fontFamily:theme.BOLD,
        fontSize:36,
        color:Colors.ButtonColor
    },
    PercentageView:{
        marginLeft:'10%',
        flexDirection:'row',
        alignItems:'center'

    },
    monthText:{
        fontFamily:theme.MEDIUM,
        fontSize:15,
        marginLeft:'5%',
        color:Colors.white
    },
    ButtonView:{
        width:'40%',
        height:30,
        borderRadius:24,
        backgroundColor:Colors.BackColor,
        alignSelf:'flex-end',
        top:-30,
        right:10,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#00726A'
    },
    DepositeText:{
        fontFamily:theme.REGULAR,
        fontSize:12,
        marginLeft:'15%',
        color:Colors.white,
        top:1
    },
    ArrowImage:{
        width:8,
        height:12.12,
        left:5,

    },
    StaticDeposite:{
        fontFamily:theme.SEMIBOLD,
        color:Colors.white,
        fontSize:15,
        marginLeft:'8%',
        

    },
    GraphImage:{
        width:'100%',
        height:240,
        alignSelf:'center',
        marginTop:'2%',
    },
    StaticText:{
        fontFamily:theme.MEDIUM,
        fontSize:16,
        color:Colors.white,
        top:26,
        left:30

    },
    GraphText:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        top:'70%',
        paddingHorizontal:20,
        marginRight:'1%'

    },
    TimeText:{
        fontFamily:theme.MEDIUM,
        fontSize:10,
        color:Colors.white
    }
    



})
export default Styles
