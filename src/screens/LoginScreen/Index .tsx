import { Image, ImageBackground, KeyboardAvoidingView, Modal, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './Style';
import { Checkbox } from 'react-native-paper';
import CustomInput from '../../components/CustomInput/Index';
import CustomButton from '../../components/Custombutton/Index';
import ReactNativeBiometrics from 'react-native-biometrics';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Colors from '../../themes/Colors/Index';

const LoginScreen = () => {
    type RootStackParamList = {
        Bottom: undefined;
    };
    type NavigationProp = StackNavigationProp<RootStackParamList, 'Bottom'>;

    const navigation = useNavigation<NavigationProp>(); const rnBiometrics = new ReactNativeBiometrics();
    const [steps, setSteps] = useState("Login");
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [show, setShow] = useState(true);
    const [password, setPassword] = useState('');
    const [loginpasswordError, setLoginPasswordError] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [error, setError] = useState("")
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginEmailError, setLoginEmailError] = useState('')

    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [fullName, setFullName] = useState("")
    const [signUpEmailError, setSignUpEmailError] = useState('')
    const [signUpPasswordError, setSignUpPasswordError] = useState('')
    const [fullNameError, setFullNameError] = useState("")
    const validateForm = () => {
        let isValid = true;
        setLoginEmailError('');
        setLoginPasswordError('');
        if (!loginEmail.trim()) {
            setLoginEmailError("Email is required.");
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail)) {
            setLoginEmailError("Please enter a valid email address.");
            isValid = false;
        }
        if (!loginPassword.trim()) {
            setLoginPasswordError("Password is required.");
            isValid = false;
        } else if (loginPassword.length < 7) {
            setLoginPasswordError("Password must be at least 7 characters long.");
            isValid = false;
        }
        return isValid;
    };
    const validateSignupForm = () => {
        let isValid = true;
        setSignUpEmailError('');
        setSignUpPasswordError('');

        if (!fullName?.trim()) {
            setFullNameError("Full Name is required.");
            isValid = false;
        }
        if (!signUpEmail.trim()) {
            setSignUpEmailError("Email is required.");
            isValid = false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(signUpEmail)) {
            setSignUpPasswordError("Please enter a valid email address.");
            isValid = false;
        }
        if (signUpPassword.length < 7) {
            setSignUpPasswordError("Password must be at least 7 characters long.");
            isValid = false;
        }
        return isValid;

    };


    const handleLogin = () => {
        if (validateForm()) {
            setIsModalVisible(true);
        }
    };

    const handleSignup = () => {
        if (validateSignupForm()) {
            setIsModalVisible(true);
        }
    };
    const validateEmailOnChange = (email: string) => {
        if (!email.trim()) {
            setLoginEmailError("Email is required.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setLoginEmailError("Please enter a valid email address.");
        } else {
            setLoginEmailError("");
        }
    };
    const validatePasswordOnChange = (password: string) => {
        if (!password.trim()) {
            setLoginPasswordError("Password is required.");
        } else if (password.length < 7) {
            setLoginPasswordError("Password must be at least 7 characters long.");
        } else {
            setLoginPasswordError("");
        }
    };
    const validateSignupEmailOnChange = (email: string) => {
        if (!email.trim()) {
            setSignUpEmailError("Email is required.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setSignUpEmailError("Please enter a valid email address.");
        } else {
            setSignUpEmailError("");
        }
    };
    const validateSignpPasswordOnChange = (password: string) => {
        if (!password.trim()) {
            setSignUpPasswordError("Password is required.");
        } else if (password.length < 7) {
            setSignUpPasswordError("Password must be at least 7 characters long.");
        } else {
            setSignUpPasswordError("");
        }
    };
    const validateFullNameOnChange = (name: string) => {
        if (!name.trim()) {
            setFullNameError("Full Name is required.");
        } else if (name.length < 1) {
            setFullNameError("Full Name must be at least 3 characters long.");
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            setFullNameError("Full Name should only contain letters.");
        } else {
            setFullNameError("");
        }
    };




    const handleFingerprintAuth = async () => {
        try {
            const resultObject = await rnBiometrics.simplePrompt({
                promptMessage: 'Log in using your biometric credentials',
            });
            if (resultObject.success) {
                await AsyncStorage.setItem('biometricEnabled', 'true');
                setModalMessage('Authentication Successful! 🎉');
                setIsModalVisible(false)
                navigation.navigate("Bottom")
            } else {
                setModalMessage('Authentication Failed. Try again.');
            }
        } catch (error) {
            setModalMessage('Biometric authentication is not available.');
        }
    };
    const checkBiometricOnStartup = async () => {
        const biometricEnabled = await AsyncStorage.getItem('biometricEnabled');
        if (biometricEnabled === 'true') {
            handleFingerprintAuth();
        }
    };
    useEffect(() => {
        checkBiometricOnStartup();
    }, []);

    const renderDetails = () => {
        switch (steps) {
            case "Login":
                return (
                    <ImageBackground
                        resizeMode="stretch"
                        style={Styles.BackGroundImage}
                        source={require('../../images/Rectangle.png')}>
                        <View>
                            <Text style={Styles.LoginAccountText}>Login to Your Account</Text>
                            <Text style={Styles.DetailsStyle}>Make sure that you already have an account</Text>
                            <View style={Styles.CustomInputStyle}>
                                <CustomInput
                                    placeholder={'Email'}
                                    value={loginEmail}
                                    onChangeText={(text: React.SetStateAction<string>) => {
                                        setLoginEmail(text);
                                        validateEmailOnChange(text);
                                    }}
                                    addLeft={<Image resizeMode='contain' style={Styles.EmailImage} source={require('../../images/email.png')} />}
                                />
                                {loginEmailError ? (
                                    <View style={Styles.LoginEmailError}>
                                        <Text style={Styles.ErrorText}>{loginEmailError}</Text>
                                    </View>
                                ) : null}
                            </View>
                            <View>
                                <View style={Styles.inputContainer}>
                                    <View>
                                        <Image resizeMode='contain' style={Styles.PassImage} source={require('../../images/password.png')} />
                                    </View>
                                    <TextInput
                                        value={loginPassword}
                                        onChangeText={(text) => {
                                            setLoginPassword(text);
                                            validatePasswordOnChange(text);
                                        }}
                                        style={Styles.textInput}
                                        placeholder={"Password"}
                                        placeholderTextColor={"#64748B"}
                                        secureTextEntry={isPasswordVisible}
                                    />
                                    <TouchableOpacity
                                        onPress={() => {
                                            setIsPasswordVisible(!isPasswordVisible);
                                            console.log("Login Password Visibility:", !isPasswordVisible);
                                        }}>
                                        <Image style={Styles.EyeImage} source={isPasswordVisible ? require('../../images/eyeoff.png') : require('../../images/eye.png')} />
                                    </TouchableOpacity>
                                </View>

                                {loginpasswordError && (
                                    <View style={Styles.LoginPassError}>
                                        <Text style={Styles.ErrorText}>{loginpasswordError}</Text>
                                    </View>
                                )}
                            </View>



                            <View style={Styles.CheckBoxStyle}>
                                <TouchableOpacity onPress={() => setChecked(!checked)}>
                                    <Image style={Styles.CheckTrue} source={checked ? require('../../images/checktrue.png') : require('../../images/checkfalse.png')} />
                                </TouchableOpacity>
                                <Text style={Styles.CheckBoxText}>Remember me</Text>
                                <TouchableOpacity >
                                    <Text style={Styles.ForGotStyle}>   Forget Password?</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.ButtonStyle}>
                                <CustomButton title='Login' onPress={handleLogin} />
                            </View> 
                        </View> 
                    </ImageBackground>
                );

            case "Register":
                return (
                    <ImageBackground
                        resizeMode="stretch"
                        style={Styles.BackGroundImage}
                        source={require('../../images/Rectangle.png')}>
                        <View>
                            <Text style={Styles.LoginAccountText}>Create Your Account</Text>
                            <Text style={Styles.DetailsStyle}>Make Your account keep secure</Text>
                            <View style={Styles.CustomInputStyle}>
                                <CustomInput
                                    placeholder={'Full Name'}
                                    value={fullName}
                                    onChangeText={(text: React.SetStateAction<string>) => {
                                        setFullName(text);
                                        validateFullNameOnChange(text);
                                    }}
                                    addLeft={<Image style={Styles.UserImage} source={require('../../images/user.png')} />}
                                />
                                {fullNameError ? (
                                    <View style={Styles.LoginEmailError}>
                                        <Text style={Styles.ErrorText}>{fullNameError}</Text>
                                    </View>
                                ) : null}
                            </View>
                            <View style={Styles.CustomInputStyle}>
                                <CustomInput
                                    placeholder={'Email'}
                                    value={signUpEmail}
                                    onChangeText={(text: React.SetStateAction<string>) => {
                                        setSignUpEmail(text);
                                        validateSignupEmailOnChange(text);
                                    }}

                                    addLeft={<Image style={Styles.EmailImage} source={require('../../images/email.png')} />}
                                />
                                {signUpEmailError ? (
                                    <View style={Styles.LoginEmailError}>
                                        <Text style={Styles.ErrorText}>{signUpEmailError}</Text>
                                    </View>
                                ) : null}
                            </View>

                            <View style={Styles.inputContainer}>
                                <View>
                                    <Image style={Styles.PassImage} source={require('../../images/password.png')} />
                                </View>
                                <TextInput
                                    value={signUpPassword}
                                    onChangeText={(text: React.SetStateAction<string>) => {
                                        setSignUpPassword(text);
                                        validateSignpPasswordOnChange(text);
                                    }}

                                    style={Styles.textInput} placeholder={"Password"} placeholderTextColor={"#64748B"} secureTextEntry={isPasswordVisible} />
                                <TouchableOpacity
                                    onPress={() => {
                                        setIsPasswordVisible(!isPasswordVisible);
                                        console.log("LOgin Password Visibility:", !isPasswordVisible);
                                    }}>
                                    <Image style={Styles.EyeImage} source={isPasswordVisible ? require('../../images/eyeoff.png') : require('../../images/eye.png')} />
                                </TouchableOpacity>

                            </View>
                            {signUpPasswordError ? (
                                <View style={Styles.signUpPasswordError}>
                                    <Text style={Styles.ErrorText}>{signUpPasswordError}</Text>
                                </View>
                            ) : null}
                            <View style={Styles.CheckBoxStyle}>
                                <TouchableOpacity onPress={() => setChecked2(!checked2)}>
                                    <Image resizeMode='contain' style={Styles.CheckTrue} source={checked2 ? require('../../images/checktrue.png') : require('../../images/checkfalse.png')} />
                                </TouchableOpacity>
                                <Text style={Styles.CheckBoxText}>
                                    I agree with the terms and conditions by creating an{"\n"}account
                                </Text>
                            </View>
                            <View style={Styles.ButtonStyle}>
                                <CustomButton
                                    onPress={handleSignup}
                                    title='Create Account' />

                            </View>
                        </View>
                    </ImageBackground>
                );
        }

    };


    return (
        <View style={Styles.MainViewStyle}>
                        <View style={Styles.TextsView}>
                            <Text style={Styles.HelloTextStyle}>Hello, There</Text>
                            <Text style={Styles.WelcomTextStyle}>Welcome Back</Text>
                            <View style={Styles.LoginViewStyle}>
                                <TouchableOpacity
                                    onPress={() => setSteps('Login')}
                                    style={steps === "Login" ? Styles.LoginTextStyle : Styles.RegisterViewStyle}>
                                    <Text style={steps === 'Login' ? Styles.LoginText : Styles.Register}>Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setSteps('Register')}
                                    style={steps === 'Register' ? Styles.LoginTextStyle : Styles.RegisterViewStyle}>
                                    <Text style={steps === 'Register' ? Styles.LoginText : Styles.Register}>Register</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {renderDetails()}
                <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
                    <View style={Styles.modalContainer}>
                        <ImageBackground resizeMode="stretch" style={
                            [Styles.BackGroundImageModal, 
                            ]} source={require('../../images/modal.png')}>
                                <Text style={Styles.EnableBioMetric}>Enable Biometrics?</Text>
                                <Text style={Styles.BioMetricDetailText}>Use Biometrics to sign in quickly and securely</Text>
                                <Image style={Styles.BiometricImageStyle} source={require('../../images/biometric.png')} />
                                <CustomButton title={'Enable'} onPress={handleFingerprintAuth} />

                                <TouchableOpacity onPress={() => {setIsModalVisible(false),navigation.navigate('Bottom')}}>
                                    <Text style={Styles.SkipNow}>Skip for now</Text>
                                </TouchableOpacity>
                        </ImageBackground>
                    </View>
                </Modal>
        </View>
    );
};

export default LoginScreen;