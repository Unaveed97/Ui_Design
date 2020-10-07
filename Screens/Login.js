import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Dimensions,
    StatusBar,
    SafeAreaView,
    ImageBackground,
} from 'react-native';
import { Card, TextInput } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView>
                    <StatusBar backgroundColor="#DDBDE6" barStyle="light-content" />
                    <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={['#DDBDE6', '#D3C1EB', '#AFC0EC']} style={styles.GradiantStyle}>

                        <ImageBackground source={require('../Images/background.png')}
                            style={styles.screenWrapper}
                            imageStyle={styles.imageBackGround}
                        >

                            <Card style={styles.LoginCard}>
                                <View>
                                    <Text style={styles.HeaderStyle}>
                                        Hello there,
                                    </Text>
                                    <Text style={styles.HeaderStyle}>
                                        Let the journey begin
                                    </Text>
                                </View>


                                <TextInput
                                    style={styles.InputStyle}
                                    label="Email"
                                    mode='outlined'
                                />
                                <TextInput
                                    style={styles.InputStyle}
                                    label="Password"
                                    mode='outlined'
                                />

                                <TouchableOpacity
                                    style={styles.BtnStyle}
                                >
                                    <Text
                                        style={styles.BtnText}>
                                        Forgot your Pasword ?
                                </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.SigninBtn}
                                >
                                    <Text
                                        style={styles.BtnText}>
                                        Sign In
                                </Text>
                                </TouchableOpacity>

                                <Card style={styles.LoginOptions}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <TouchableOpacity
                                            style={styles.GoogleBtn}
                                        >
                                            <Image source={require('../Images/google.png')} style={styles.Googleimage} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.facebookBtn}
                                        >
                                            <Image source={require('../Images/facebook.png')} style={styles.facebookimage} />
                                        </TouchableOpacity>
                                    </View>
                                </Card>
                            </Card>

                            <TouchableOpacity
                                style={styles.SignUp}
                            >
                                <Text
                                    style={styles.SingupBtnText}
                                >
                                    New here ? Sign Up instead
                            </Text>
                            </TouchableOpacity>

                        </ImageBackground>

                    </LinearGradient>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },

    GradiantStyle: {
        height: windowHeight,
        width: windowWidth,
    },

    screenWrapper: {
        flex: 1,
        position: 'relative',
    },

    imageBackGround: {
        height: windowHeight / 1.5,
        width: windowWidth / 1.3,
        position: 'absolute',
        top: 340,
        left: 80,
        resizeMode: "cover",
    },

    LoginCard: {
        height: windowHeight / 1.5,
        width: windowWidth,
        alignSelf: 'center',
        top: 150,
        elevation: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 0,
    },

    HeaderStyle: {
        marginLeft: 20,
        fontSize: 37,
        fontFamily: 'notoserif',
        fontWeight: 'bold',
        color: 'white',
    },

    InputStyle: {
        width: 350,
        color: 'white',
        top: 20,
        marginTop: 15,
        alignSelf: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        fontWeight: 'bold',
    },

    BtnStyle: {
        height: windowHeight / 20,
        width: windowWidth / 1.5,
        backgroundColor: 'black',
        alignSelf: 'center',
        top: 70,
        borderRadius: 5,
    },

    BtnText: {
        marginTop: 5,
        fontFamily: 'notoserif',
        fontWeight: '100',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },

    SigninBtn: {
        height: windowHeight / 20,
        width: windowWidth / 4,
        backgroundColor: '#DC143C',
        alignSelf: 'center',
        top: 95,
        borderRadius: 5,
    },

    LoginOptions: {
        height: windowHeight / 10,
        width: windowWidth / 1.5,
        alignSelf: 'center',
        top: 125,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        elevation: 0,
    },

    GoogleBtn: {
        height: windowHeight / 13,
        width: windowWidth / 4,
        margin: 10,
        left: 55
    },

    Googleimage: {
        height: windowHeight / 14.5,
        width: windowWidth / 7,
    },

    facebookBtn: {
        height: windowHeight / 13,
        width: windowWidth / 4,
        margin: 10,
        left: 10
    },

    facebookimage: {
        height: windowHeight / 14.5,
        width: windowWidth / 7,
    },

    SignUp: {
        textAlign: 'center',
        justifyContent:'flex-end',
        top:220,
        left:4
    },

    SingupBtnText: {
        fontFamily: 'notoserif',
        fontWeight: '100',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    }
});