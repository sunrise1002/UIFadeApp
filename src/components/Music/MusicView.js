import React, { Component } from 'react';
import { 
    ImageBackground,
    TouchableOpacity,
    Image,
    View,
    Text,
    Dimensions,
    StyleSheet,
    Slider,
    Platform
} from 'react-native';

const { height, width } = Dimensions.get('window');
const background = require('../../Media/Images/MusicImages/background.png');
const backButton = require('../../Media/Images/MainImages/back.png');
const menuButton = require('../../Media/Images/MainImages/burger.png');
const audioGraph = require('../../Media/Images/MainImages/audio-visualiser.png');
const thumbButtonSlider = require('../../Media/Images/MainImages/thumbButton.png');
const nextButtonLeft = require('../../Media/Images/MainImages/nextButtonLeft.png');
const nextButtonRight = require('../../Media/Images/MainImages/nextButtonRight.png');
const playButton = require('../../Media/Images/MainImages/playButton.png');

export default class ChartView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSong: 'Faded',
            currentValueSlider: 0.75
        };
    }

    selectStyleThumbButtonSlider() {
        if (Platform.OS === 'android') {
            return (
                <Slider 
                    style={styles.slider} 
                    minimumTrackTintColor={'white'}
                    maximumTrackTintColor={'white'}
                    thumbTintColor={'white'}
                    value={this.state.currentValueSlider}
                />
            );
        }
            return (
                <Slider 
                    style={styles.slider} 
                    minimumTrackTintColor={'white'}
                    maximumTrackTintColor={'white'}
                    thumbImage={thumbButtonSlider}
                    value={this.state.currentValueSlider}
                />
            );
    }

    render() {
        return (
            <ImageBackground source={background} style={styles.background} >
                <View style={styles.topBarContainer} >
                    <TouchableOpacity 
                        style={styles.buttonTopBar} 
                        onPress={this.props.goBackProp}
                    >
                        <Image source={backButton} />
                    </TouchableOpacity>  

                    <Text style={styles.textTopBar} >
                        M U S I C   P L A Y E R
                    </Text>

                    <TouchableOpacity 
                        style={styles.buttonTopBar} 
                        onPress={this.props.openMenuProp} 
                    >
                        <Image source={menuButton} />
                    </TouchableOpacity>  
                </View>

                <Image source={audioGraph} style={styles.audioGraph} />

                {this.selectStyleThumbButtonSlider()}

                <View style={styles.controlContainer} >
                    <TouchableOpacity>
                        <Image source={nextButtonLeft} style={styles.nextButton} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={playButton} style={styles.playButton} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={nextButtonRight} style={styles.nextButton} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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

    slider: {
        width: width * 0.5625
    },

    audioGraph: {
        height: 60,
        width: (60 / 121) * 158
    },

    controlContainer: {
        width: width * 0.37,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    },

    nextButton: {
        height: 8,
        width: 14
    },
    
    playButton: {
        height: 20,
        width: (20 / 41) * 37
    }
});
