import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../utils/Constants'
import Colors from '../../themes/Colors/Index'
const Styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: Colors.black,

    },
    ImageBackground: {
        width: '100%',
        height: 168,
        top: -5
    },
    PersonImage: {
        width: 55,
        height: 55,
    },
    ImageView: {
        marginTop: '10%',
        marginLeft: '7%',

    },
    ImageTextView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    DetailStyle: {
        fontFamily: theme.REGULAR,
        fontSize: 12,
        color: Colors.white,
        marginLeft: '10%',
        top: -5
    },
    NameStyle: {
        fontFamily: theme.BOLD,
        fontSize: 16,
        color: Colors.white,
        marginTop: '20%',
        marginLeft: '10%'
    },
    BellStyle: {
        width: 33,
        height: 33.8,
        left:'50%',
        top:22
      
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
        width: '90%',
        backgroundColor: Colors.rectanglefill,
        borderWidth: 1,
        borderColor: Colors.rectangleBorder,
        height: 210,
        bottom: '7%',
        alignSelf: 'center',
        borderRadius: 12,
        elevation: 3
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
        // justifyContent: 'space-between',
        padding: 4,
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
        marginTop:'9%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    SeeAll:{
        fontFamily:theme.MEDIUM,
        fontSize:12,
        color:Colors.ButtonColor
    },
    RectangleImageView:{
        marginTop:'6%'
    },
    PhoneImage:{
        width:'44%',
        height:134,
        borderRadius:12,
        top:-12
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
        // top:-46
    },
    CashBack:{
        color:Colors.white,
        fontFamily:theme.EXTRABOLD,
        fontSize:16,
        top:-5,
        textAlign:'center',
        left:20,

    },
    OfferStyle:{
        color:Colors.white,
        fontFamily:theme.BOLD,
        fontSize:39,
        left:30,
        top:-15
    },
    OfferView:{
        flexDirection:'row'
    },
    OffTextStyle:{
        fontFamily:theme.BOLD,
        fontSize:13,
        color:Colors.white,
        top:15,
        left:29
    },
    TextStylePeriod:{
        fontSize:8,
        color:'#FFFFFF',
        left:25,
        fontWeight:500,
        top:-20
    },
    Person1Style:{
        width:48,
        height:48,
        left:13,
        
    },
    ListStyle:{
        width:'100%',
        marginTop:'4%',
        height:71,
        borderRadius:12,
        backgroundColor:Colors.rectanglefill,
        flexDirection:'row',
        alignItems:'center'
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
        left:60
    },
    FillCircle:{
        width:35,
        height:35.85
    }




    



})
export default Styles
