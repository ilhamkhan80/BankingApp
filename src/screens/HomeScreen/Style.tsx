import { Dimensions, PixelRatio, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors/Index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

const fontSize = (size: number) => size / PixelRatio.getFontScale(); 
const Styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: Colors.black,

    },
    ImageBackground: {
        width: wp('100%'),
        height: hp('22%'),
    },
    PersonImage: {
        width: wp('20%'),
        height: hp('8%'),
        marginLeft:wp("5%"),
        marginTop:hp("4%")
    },
    ImageView: {
        marginTop: hp('1%'),

    },
    ImageTextView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    DetailStyle: {
        fontFamily: theme.REGULAR,
        fontSize: fontSize(12),
        color: Colors.white,
        marginLeft: wp('3%'),
    },
    NameStyle: {
        fontFamily: theme.BOLD,
        fontSize:fontSize (16),
        color: Colors.white,
        marginTop:hp ('5%'),
        marginLeft: wp('3%'),
    },
    BellStyle: {
        width: 33,
        height:33,
        marginTop:hp('5%'),
        marginLeft: wp('9%'),

        
      
    },
    BellView: {
        backgroundColor: Colors.white,
        width: 33,
        height: 34,
        borderRadius: 80,
        marginTop: '10%',
        marginLeft: '8%'
    },
    RectangleView: {
        width: width * 0.87, 
        backgroundColor: Colors.rectanglefill,
        borderWidth: 1,
        borderColor: Colors.rectangleBorder,
        bottom: height * 0.07,
        alignSelf: 'center',
        borderRadius: 12,
        elevation: 3,
        padding:1
        
    },
    FlybankStyle: {
        fontFamily: theme.REGULAR,
        fontSize: 12,
        color: '#FFFFFFB2',
        marginLeft: '5%',
        marginTop: '5%',
    },
    DetailsView: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    ListImageStyle: {
        width: 11,
        height: 12,
    },
    ImageListView: {
        marginLeft: '2%',
        marginTop: '4%',

    },
    IdText: {
        marginTop: '4%',
        marginLeft: '2%',

    },
    IdTextStyle: {
        color: Colors.white
    },
    AmountStyle: {
        fontFamily: theme.SEMIBOLD,
        fontSize: 20,
        color: Colors.white,
        marginLeft: '5%',
        marginTop: '2%',
    },
    AmountStyleView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    EyeStyle: {
        width: 18,
        height: 18,
        marginRight: '7%'
    },
    ScanViewStyle: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        width: 85,
        height: 33,
        borderRadius: 24,
        marginLeft: '5%',
    },
    ImageStyle: {
        width: 15,
        height: 15,
        marginLeft: '20%'
    },
    QRISStyle: {
        fontSize: 12,
        fontFamily: theme.MEDIUM,
        marginLeft: '10%',
        marginTop:3
    },
    TransferViewStyle: {
        borderWidth: 1,
        borderRadius: 24,
        width: 134,
        height: 33,
        borderColor: Colors.white,
        marginLeft: '5%',

    },
    ScanningView: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    TransferImage: {
        width: 15,
        height: 16,
        left: 3
    },
    TransferTextStyle: {
        fontFamily: theme.MEDIUM,
        fontSize: 12,
        color: Colors.white,
        left: 6
    },
    TransferAndPayView: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: '8%',
        marginTop: '5%'
    },
    ListViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:'4%'
    },
    ListView: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:50
    
    },
    ListViewActive: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50, 
    
    
    },
    AddImageView: {
        width: 50,
        height: 50,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#008b8b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    AddImageViewActive: {
        width: 50,
        height: 50,
        borderRadius: 24,
        backgroundColor: '#008b8b', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    AddImage: {
        width: 30,
        height: 30,
        tintColor: '#008b8b', 
    },
    AddImageActive: {
        width: 30,
        height: 30,
        tintColor: Colors.rectanglefill, 
    },
    DepositeImageView: {
        width: 50,
        height: 50,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: Colors.ButtonColor, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    DepositeImageViewActive: {
        width: 50,
        height: 50,
        borderRadius: 24,
        backgroundColor: '#008b8b', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    DepositeImage: {
        width: 30,
        height: 30,
        tintColor: '#008b8b', 
    },
    TopTextStyle: {
        color: Colors.white,
        marginTop: 12,
        marginLeft:'5%'
    },
   
    IconView: {
        width: 35,
        height: 35.85,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: Colors.ButtonColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    IconViewActive: {
        width: 35,
        height: 35.85,
        borderRadius: 24,
        backgroundColor: Colors.ButtonColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Icon: {
        width: 17,
        height: 17,
        tintColor: Colors.white
    },
    IconActive: {
        width: 17,
        height: 17,
        tintColor: Colors.grayType,
    },
    IconActive1: {
        width: 15,
        height: 18,
        tintColor: Colors.rectanglefill
    },
    IconActivePocket: {
        width: 15,
        height: 13,
        tintColor: Colors.rectanglefill
    },
    IconInactive:{
        width: 15,
        height: 13,
        tintColor:Colors.white
    },
    DepositInactive:{
        width: 15,
        height: 18,
        tintColor: Colors.white
    },
    IconActiveInvited:{
        width:15,
        height:15,
        tintColor: Colors.rectanglefill

    },
    IconInActiveInvited:{
        width:15,
        height:15,
        color:Colors.white
    },
    IconActiveSeeAll:{
        width:15,
        height:14,
        tintColor: Colors.rectanglefill
 
    },
    IconSeeAll:{
        width:15,
        height:14,
        color:Colors.white
    },
    SpecialPromo:{
        color:Colors.white,
        fontFamily:theme.SEMIBOLD,
        fontSize:13
    },
    SpecialPromoView:{
        // marginTop:'9%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        top:hp('-4'),
        marginLeft:wp("7%")

    },
    SeeAll:{
        fontFamily:theme.MEDIUM,
        fontSize:12,
        color:Colors.ButtonColor,
        marginRight:wp("7%"),
        

    },
    RectangleImageView:{
        // marginTop:'6%'
        marginLeft:wp("3%")
    },
    ImageRectangle:
    { 
        width:wp( '89%'),
         height:hp(" 17"),
         alignSelf:'center',
         top:hp("-2%")

     },
    PhoneImage:{
        width:wp('40%'),
        height:hp('19%'),
        borderRadius:12,
        top:hp('-1'),
        // marginLeft:wp("1%")
    },
    ViewStyle:{
        alignItems:'center',
        flexDirection:'row'

    },
    TextStyle:{
        fontFamily:theme.REGULAR,
        fontSize:10,
        color:Colors.white,
        left:20,
        top:3
        // top:-46
    },
    CashBack:{
        color:Colors.white,
        fontFamily:theme.EXTRABOLD,
        fontSize:16,
        top:1,
        textAlign:'center',
        left:20,

    },
    OfferStyle:{
        color:Colors.white,
        fontFamily:theme.BOLD,
        fontSize:39,
        left:30,
        top:-10
    },
    OfferView:{
        flexDirection:'row',
        alignItems:'center'
    },
    OffTextStyle:{
        fontFamily:theme.BOLD,
        fontSize:13,
        color:Colors.white,
        left:29,
        marginTop:'8%'
    },
    TextStylePeriod:{
        fontSize:8,
        color:'#FFFFFF',
        left:wp("6"),
        fontWeight:500,
        top:hp("-2")
    },
    Person1Style:{
        width:48,
        height:48,
        left:13,
        
    },
    ListStyle:{
        width:wp('92%'),
        // marginTop:'4%',
        height:hp("10%"),
        borderRadius:12,
        backgroundColor:Colors.rectanglefill,
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        marginLeft:wp("2%"),
        top:hp("-2")
    },
    PersonTextStye:{
        color:Colors.white,
        fontFamily:theme.SEMIBOLD,
        fontSize:14,
        left:30
    },
    DateStyle:{
        fontFamily:theme.MEDIUM,
        fontSize:12,
        color:Colors.dateColor,
        left:30
    },
    DollarsStyle:{
        fontFamily:theme.SEMIBOLD,
        fontSize:15,
        color:Colors.ButtonColor,
        // left:60
        marginLeft:'28%'
    },
    FillCircle:{
        width:35,
        height:35.85
    },
    LineImage:{
        width:26,
        left:25,
        top:-10
    }




    



})
export default Styles
