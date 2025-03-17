import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
import theme from '../../utils/Constants';
import Colors from '../../themes/Colors/Index';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');
const fontSize = (size: number) => size / PixelRatio.getFontScale(); 
const Styles = StyleSheet.create({
    HelloTextStyle: {
        fontFamily: theme.REGULAR,
        fontSize: fontSize(14),
        color: Colors.Hello,
        textAlign: 'center',
        marginTop: hp('2%') 
    },
    MainViewStyle: {
        backgroundColor: Colors.BackColor,
        flex: 1,  
    },
    WelcomTextStyle: {
        fontFamily: theme.SEMIBOLD,
        fontSize: fontSize(23),
        color: Colors.white,
        textAlign: 'center',
        marginBottom: hp('2%')
    },
    TextsView: {
        width: wp('90%'),
        height: hp('22%'),
        borderWidth: 1,
        borderColor: Colors.back,
        backgroundColor: Colors.back,
        borderRadius: wp('6%'),
        alignSelf: 'center',
        marginTop: hp('6%')
    },
    LoginViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp('75%'),
        height: hp('5.5%'),
        borderWidth: 1,
        borderRadius: wp('8%'),
        alignSelf: 'center',
        borderColor: Colors.RegisterBack,
        backgroundColor: Colors.RegisterBack,
        marginTop: hp('1%')
    },
    LoginTextStyle: {
        backgroundColor: Colors.white,
        width: wp('40%'),
        height: hp('5.5%'),
        borderRadius: wp('10%'),
    },
    LoginText: {
        textAlign: 'center',
        alignSelf: 'center',
        paddingTop: hp('1.4%'),
        color: Colors.Login,
        fontFamily: theme.SEMIBOLD,
        fontSize: fontSize(12)
    },
    Register: {
        color: '#334155',
        fontFamily: theme.REGULAR,
        fontSize: fontSize(12),
        textAlign: 'center'
    },
    RegisterViewStyle: {
        width: wp('35%'),
    },
    LoginAccountText: {
        color: Colors.white,
        fontFamily: theme.SEMIBOLD,
        fontSize: fontSize(14),
        marginTop:wp("8%"),
        marginLeft: wp('5%'),
    },
    DetailsStyle: {
        fontFamily: theme.REGULAR,
        fontSize: fontSize(12),
        color: Colors.gray,
        marginLeft: wp('5%')
    },
    BackGroundImage: {
        width: '100%',
        height: hp('100%'), 
        marginTop:wp('10%')
    },
    BackGroundImageModal:{
        width: '100%',
        height: hp('70%'), 
        marginTop:wp('60%')
    },
    EmailImage: {
        width: wp('5%'),
        height: hp('2%'),
        marginLeft: wp('6%')
    },
    CustomInputStyle: {
        // marginTop: hp('1%')
    },
    PassImage: {
        width: wp('3%'),
        height: hp('2%'),
        marginLeft: wp('6%')
    },
    EyeImage: {
        width: wp('5%'),
        height: hp('3%'),
        resizeMode: 'contain',
        marginRight: wp('4%')
    },
    UserImage:{
       width:wp("5%"),
       height:hp("3%"),
       resizeMode:"contain",
       marginLeft: wp('6%')
    },
    CheckBoxStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp('1%'),
        marginLeft: wp('5%'),
    },
    ForGotStyle: {
        fontFamily: theme.REGULAR,
        fontSize: fontSize(12),
        color: Colors.BackColor,
        marginLeft: wp("28%"),
    },
    CheckBoxText: {
        color: Colors.white,
        fontSize: fontSize(11),
        fontFamily: theme.REGULAR,
        marginLeft: wp('2%')
    },
    ButtonStyle: {
        marginTop: hp('7%'),
    },
    EnableBioMetric: {
        fontFamily: theme.SEMIBOLD,
        fontSize: fontSize(20),
        color: Colors.white,
        textAlign: 'center',
        marginTop: hp('5%')
    },
    BioMetricDetailText: {
        fontFamily: theme.REGULAR,
        fontSize: fontSize(12),
        color: Colors.white,
        textAlign: 'center',
        marginTop: hp('1%'),
    },
    BiometricImageStyle: {
        width: wp('60%'),
        height: wp('60%'),
        alignSelf: 'center',
        marginTop: hp('1%')
    },
    SkipNow: {
        fontFamily: theme.SEMIBOLD,
        fontSize: fontSize(13),
        color: Colors.ButtonColor,
        textAlign: 'center',
        marginTop: hp('3%')
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    CheckTrue: {
        width: wp('4%'),
        height: hp('2%'),
        marginLeft: wp('2%')
    },
    ErrorText: {
        fontSize: fontSize(12),
        color: 'red',
    },
    SignupErrorSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: wp('2%'),
        alignSelf: 'center',
        marginTop: hp('1%')
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: wp('8%'),
        marginTop: hp('2%'),
        width: '90%',
        height:40,
        alignSelf: 'center'
    },
    textInput: {
        flex: 1,
        fontSize: fontSize(12),
        fontFamily: theme.GLORYMEDIUM,
        color: Colors.InputColor,
        marginLeft: wp('4%')
    },
    LoginPassError: {
        marginLeft: wp('5%')
    },
    LoginEmailError: {
        marginLeft: wp('5%')
    },
    signUpPasswordError: {
        marginLeft: wp('5%')
    }
});

export default Styles;
