import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors/Index'
const Styles = StyleSheet.create({
    HelloTextStyle: {
        fontFamily: theme.REGULAR,
        fontSize: 14,
        color: Colors.Hello,
        textAlign: 'center',
        marginTop: '7%'
    },
    MainViewStyle: {
        backgroundColor: Colors.BackColor,
        // flex: 1

    },
    WelcomTextStyle: {
        fontFamily: theme.SEMIBOLD,
        fontSize: 23,
        color: Colors.white,
        textAlign: 'center',
        bottom:'3%'
    },
    TextsView: {
        // width: 311,
        width:'90%',
        height:'22%',
        // height: 170,
        borderWidth: 1,
        borderColor: Colors.back,
        backgroundColor: Colors.back,
        borderRadius: 23,
        alignSelf: 'center',
        marginTop:'15%'
    },
    LoginViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        // width: 261,
        width:'80%',
        height: 42,
        borderWidth: 1,
        borderRadius: 32,
        alignSelf: 'center',
        borderColor: Colors.RegisterBack,
        backgroundColor: Colors.RegisterBack,
        marginTop: '5%'
    },
    LoginTextStyle: {
        backgroundColor: Colors.white,
        width: '53%',
        height: 42,
        borderRadius: 48,
    },
    LoginText: {
        textAlign: 'center',
        alignSelf: 'center',
        top:10,
        color:Colors.Login,
        fontFamily:theme.SEMIBOLD,
        fontSize:12
    },
    Register:{
        color:'#334155',
        fontFamily:theme.REGULAR,
        fontSize:12,
        textAlign:'center'
    },
    Register1:{
        color:'#5B8E92',
        fontFamily:theme.REGULAR,
        fontSize:12,
        textAlign:'center'
    },
    RegisterViewStyle:{
        width:131, 
    },
    LoginAccountText:{
        color:Colors.white,
        fontFamily:theme.SEMIBOLD,
        fontSize:14,
        position:'absolute',
        top:60,
        marginLeft:'5%',
    
    },
    DetailsStyle:{
        fontFamily:theme.REGULAR,
        fontSize:12,
        color:Colors.gray,
        position:'absolute',
        top:80,
        marginLeft:'5%'
    },
    BackGroundImage:{ 
        width: '100%', 
        // height: '87%',
        height:590,
        top:40,
        
        
    },
    EmailImage:{
        width:18,
        height:14,
        left:10
    },
    CustomInputStyle:{
        top:110
    },
    PassImage:{
        width:12,
        height:16,
        left:10
    },
    EyeImage:{
        width:18,
        height:218,
        resizeMode:'contain',
        right:10
    },
    UserImage:{
        width:13.5,
        height:16,
        left:10
    },
    CheckBoxStyle: { 
        flexDirection: 'row', 
        alignItems: 'center',
        top:115 ,
        marginLeft:'5%',
        


    },
    ForGotStyle:{
        fontFamily:theme.REGULAR,
        fontSize:12,
        color:Colors.BackColor,
        left:'90%'
        
    },
    CheckBoxText:{
        color:Colors.white,
        fontSize:11,
        fontFamily:theme.REGULAR,
        top:2,
        marginLeft:'6%'
    },
    ButtonStyle:{
        top:180,
    
    },
    EnableBioMetric:{
     fontFamily:theme.SEMIBOLD,
     fontSize:20,
     color:Colors.white,
     textAlign:'center',
     top:65
    },
    BioMetricDetailText:{
        fontFamily:theme.REGULAR,
        fontSize:12,
        color:Colors.white,
        top:70,
        textAlign:'center',
    },
    BiometricImageStyle:{
        width:224,
        height:224,
        alignSelf:'center',
        marginTop:'20%'
    },
    SkipNow:{
        fontFamily:theme.SEMIBOLD,
        fontSize:13,
        color:Colors.ButtonColor,
        textAlign:'center',
        marginTop:'5%'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    CheckTrue:{
        width:15,
        height:15,
        left:10
    },
    ErrorText: {
        fontSize: 12,
        color: 'red',
    },
    SignupErrorSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        alignSelf: 'center',
        marginTop: '1%'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 32,
        marginTop: '5%',
        width: '90%',
        height:40,
        alignSelf: 'center',
        top:110
        
        
      },
      textInput: {
        flex: 1, 
        fontSize: 12,
        fontFamily: theme.GLORYMEDIUM,
        color: Colors.InputColor,
        marginLeft:15
      },
      LoginPassError:{
        top:110,
        marginLeft:'9%'

      },
      LoginEmailError:{
        marginLeft:'9%'

      },
      signUpPasswordError:{
        top:'42%',
        marginLeft:'9%'

      }

   
})
export default Styles
