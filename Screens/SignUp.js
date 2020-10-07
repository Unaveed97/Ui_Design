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
    ScrollView,
    Button,
} from 'react-native';
import { Card, TextInput, Switch } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import ToggleSwitch from 'toggle-switch-react-native';
import { WheelPicker, DatePicker, TimePicker } from 'react-native-wheel-picker-android'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Signup extends Component {

    render() {
        let now = new Date()
        let wheelPickerData = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView>
                    <StatusBar backgroundColor="#ED6F49" barStyle="light-content" />
                    <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1.5 }} colors={['#ED6F49', '#F9A042', '#FBC235']} style={styles.GradiantStyle}>
                        <View style={{
                            height: windowHeight,
                            width: windowWidth,
                        }}>
                            <ScrollView
                                scrollEventThrottle={200}
                                style={{
                                    flexGrow: 1,
                                    flex: 1,
                                    flexWrap: 'wrap',
                                    flexDirection: 'row',
                                }}
                            >

                                <View>
                                    <Text style={styles.HeaderStyle}>
                                        Start Your Transformation
                                </Text>
                                    <Text style={styles.HeaderStyle}>
                                        Story now !
                                </Text>
                                </View>


                                <View style={{ flexDirection: 'row', width: windowWidth, }}>
                                    <TouchableOpacity>
                                        <View style={styles.ProfileImage}>
                                            <Image source={require('../Images/user.png')} style={styles.image} />
                                        </View>
                                        <TextInput
                                            style={styles.pathfinder}
                                            label="Select profile picture"
                                            mode='outlined'
                                        />
                                    </TouchableOpacity>
                                </View>


                                <TextInput
                                    style={styles.InputStyle}
                                    label="Username"
                                    mode='outlined'
                                />
                                <TextInput
                                    style={styles.InputStyle}
                                    label="Full Name"
                                    mode='outlined'
                                />
                                <TextInput
                                    style={styles.InputStyle}
                                    label="Email"
                                    mode='outlined'
                                />
                                <TextInput
                                    style={styles.InputStyle}
                                    label="City"
                                    mode='outlined'
                                />
                                <TextInput
                                    style={styles.InputStyle}
                                    label="Password"
                                    mode='outlined'
                                />

                                <View style={styles.RadioBtn}>
                                    <Text style={styles.RadioBtnTxt}>
                                        I Am ..
                                    </Text>
                                    <View style={{ alignSelf: 'center', marginTop: 20, }}>
                                        <ToggleSwitch
                                            isOn={false}
                                            onColor="green"
                                            offColor="#505050"
                                            size="large"
                                            onToggle={isOn => console.log("changed to : ", isOn)}
                                        />
                                    </View>
                                </View>

                                <View style={styles.WeightView}>
                                    <Text style={styles.WeightViewBtnTxt}>
                                        My weight currently is ...
                                    </Text>
                                    <Text style={styles.WeightViewBtnTxt2}>
                                        Don't worry this stays between us if you feel
                                        so  <Image source={require('../Images/wink.png')} style={{
                                            height: windowHeight / 30,
                                            width: windowWidth / 15,
                                        }} />
                                    </Text>
                                    <View style={{ height: 500, width: windowWidth, marginTop: 15 }}>
                                        <View style={{ width: 300, height: 500, alignSelf: 'center', justifyContent: 'center', fontSize: 35 }}>
                                            <WheelPicker
                                                onItemSelected={(event) => { console.log(event) }}
                                                isCurved
                                                isCyclic
                                                data={wheelPickerData}
                                                style={{ width: 300, height: 500, fontSize: 35, fontWeight: 'bold' }} />
                                        </View>
                                    </View>
                                </View>

                                <View style={{ height: 50, width: windowWidth, marginTop: 75 }}>
                                    <Text style={styles.footerStyke}>By creating an account you agree to our</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 15, fontFamily: 'notoserif', fontWeight: 'bold', color: 'rgb(220,20,60)', marginRight: 5 }}>Terms and use</Text>
                                        <Text style={{ fontSize: 15, fontFamily: 'notoserif', fontWeight: 'bold' }}> & </Text>
                                        <Text style={{ fontSize: 15, fontFamily: 'notoserif', fontWeight: 'bold', color: 'rgb(220,20,60)' }}> Privacy Policy </Text>
                                    </View>
                                </View>

                                <View style={{ height: 50, width: windowWidth }}>
                                    <TouchableOpacity
                                        style={styles.SignUpBtn}
                                    >
                                        <Text
                                            style={styles.BtnText}>
                                            Sign up
                                    </Text>
                                    </TouchableOpacity>
                                </View>

                                <View></View>
                                <View style={{ height: 100, width: windowWidth, marginTop: 10 }}>
                                    <TouchableOpacity
                                        style={{ height: 50, width: 300, marginTop: 20, backgroundColor: 'rgba(255,255,255,0.0)', borderWidth: 1, alignSelf: 'center', borderColor: '#B29A5E', borderRadius:5 }}
                                    >
                                        <Text
                                            style={{ color: '#B29A5E', fontFamily: 'notoserif', fontWeight: '100', fontSize: 20, textAlign: 'center', marginTop: 8 }}>
                                            I am already a member
                                    </Text>
                                    </TouchableOpacity>
                                </View>

                            </ScrollView>
                        </View>
                    </LinearGradient>
                </KeyboardAvoidingView>
            </SafeAreaView >
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

    LoginCard: {
        height: windowHeight,
        width: windowWidth,
        alignSelf: 'center',
        elevation: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 0,
    },

    ProfileImage: {
        height: windowHeight / 8,
        width: windowWidth / 4,
        borderRadius: 100,
        top: 50,
        left: 30,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    pathfinder: {
        height: 40,
        width: 200,
        backgroundColor: 'rgba(255,255,255,0.1)',
        top: -5,
        left: 150,
    },

    HeaderStyle: {
        marginLeft: 20,
        fontSize: 30,
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
        justifyContent: 'center',
    },

    image: {
        height: windowHeight / 12,
        width: windowWidth / 7,
        alignSelf: 'center',
        top: 15
    },

    RadioBtn: {
        top: 30,
        height: windowHeight / 5,
        width: windowWidth,
    },

    RadioBtnTxt: {
        marginLeft: 30,
        marginTop: 20,
        fontSize: 25,
        fontFamily: 'notoserif',
        fontWeight: 'bold',
        color: 'black',
    },

    togglebtn: {
        alignSelf: 'center',
        left: '100',
    },

    WeightView: {
        top: 10,
        height: windowHeight / 5,
        width: windowWidth,
    },

    WeightViewBtnTxt: {
        marginLeft: 30,
        fontSize: 25,
        fontFamily: 'notoserif',
        fontWeight: 'bold',
        color: 'black',
    },

    WeightViewBtnTxt2: {
        marginLeft: 30,
        marginRight: 7,
        marginTop: 2,
        fontSize: 18,
        fontFamily: 'notoserif',
        fontWeight: '200',

    },
    footerStyke: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'notoserif',
        fontWeight: 'bold',
    },

    SignUpBtn: {
        height: windowHeight / 20,
        width: windowWidth / 4,
        backgroundColor: 'rgb(220,20,60)',
        alignSelf: 'center',
        marginTop: 20,
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

});