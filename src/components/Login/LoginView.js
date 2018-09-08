import React, { Component } from 'react';
import { 
    ImageBackground,
    TouchableOpacity,
    Image,
    View,
    Text,
    Dimensions,
    StyleSheet,
    TextInput,
    Platform,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';

const { height, width } = Dimensions.get('window');
const background = require('../../Media/Images/LoginImages/background.png');
const backButton = require('../../Media/Images/MainImages/back.png');
const menuButton = require('../../Media/Images/MainImages/burger.png');
const symbol = require('../../Media/Images/LoginImages/symbol.png');
const arrow = require('../../Media/Images/LoginImages/arrow.png');


export default class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentYear: '2018'
        };
    }

    renderTextInputUsername() {
        if (Platform.OS === 'android') {
            return (
                <TextInput 
                    style={styles.textInput}
                    underlineColorAndroid={'transparent'} 
                />
            );
        }
        return (
            <TextInput 
                style={styles.textInput}
            />
        );
    }

    renderTextInputPassword() {
        if (Platform.OS === 'android') {
            return (
                <TextInput 
                    style={styles.textInput}
                    underlineColorAndroid={'transparent'} 
                    secureTextEntry
                />
            );
        }
        return (
            <TextInput 
                style={styles.textInput}
                secureTextEntry
            />
        );
    }
    
    render() {
        return (
            //Cho nay can them ScrollView thi moi dung duoc KeyboardAvoidingView    
            <ScrollView>
                <KeyboardAvoidingView enabled >
                    <ImageBackground source={background} style={styles.background} >
                        <View style={styles.topBarContainer} >
                            <TouchableOpacity 
                                style={styles.buttonTopBar} 
                                onPress={this.props.goBackProp}
                            >
                                <Image source={backButton} />
                            </TouchableOpacity>  
  
                            <Text style={styles.textTopBar} >
                                L O G I N
                            </Text>

                            <TouchableOpacity 
                                style={styles.buttonTopBar} 
                                onPress={this.props.openMenuProp} 
                            >
                                <Image source={menuButton} />
                            </TouchableOpacity>  
                        </View>
                        
                        <View style={styles.bodyContainer} >
                            <Image source={symbol} style={styles.symbol} />

                            <Text style={styles.loginText} >
                                L   O   G   I   N
                            </Text>

                            {this.renderTextInputUsername()}
                            <View style={styles.lineUsername} />

                            {this.renderTextInputPassword()}
                            <View style={styles.linePassword} />

                            <TouchableOpacity onPress={this.props.goToMainProp} >
                                <View style={styles.arrowButton} >
                                    <Image source={arrow} style={styles.arrow} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={styles.text} >
                                    NEW ACCOUNT
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={styles.text} >
                                    FORGOT PASSWORD
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    background: {
        width,
        height
    },
    
    topBarContainer: {
        height: height * 0.07,
        backgroundColor: '#212a49',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    textTopBar: {
        color: 'white',
        fontFamily: 'poppins_light', //can't custom font ?
    },

    buttonTopBar: {
        marginHorizontal: 15 
    },

    bodyContainer: {
        height: height - (height * 0.07) - 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    symbol: {
        width: 40,
        height: 40,
        marginBottom: 30
    },

    loginText: {
        color: '#fff',
        fontSize: 25,
    },

    textInput: {
        width: width * 0.5,
        color: '#fff',
    },

    lineUsername: {
        height: 2,
        width: (width * 0.5) + 10,
        backgroundColor: '#21e7b6' 
    },

    linePassword: {
        height: 2,
        width: (width * 0.5) + 10,
        backgroundColor: '#646e9f' 
    },

    arrowButton: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
        backgroundColor: '#21e7b6',
        marginVertical: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    arrow: {
        width: 15,
        height: 15
    },

    text: {
        fontSize: 10,
        color: 'rgba(255,255,255,0.5 )',
        marginTop: 15
    }
});
