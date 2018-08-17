import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Slider,
    Platform,
    TouchableOpacity
} from 'react-native';

const { height, width } = Dimensions.get('window');
const musicPic = require('../../Media/Images/MainImages/musicModalPic.png');
const audioGraph = require('../../Media/Images/MainImages/audio-visualiser.png');
const thumbButtonSlider = require('../../Media/Images/MainImages/thumbButton.png');
const nextButtonLeft = require('../../Media/Images/MainImages/nextButtonLeft.png');
const nextButtonRight = require('../../Media/Images/MainImages/nextButtonRight.png');
const playButton = require('../../Media/Images/MainImages/playButton.png');

export default class MusicModal extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
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
            <View style={styles.container} >
                <Image source={musicPic} style={styles.image} />

                <Text style={styles.text} >
                    ZHU  -  FADED
                </Text>

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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: height * 0.6,
        width: width * 0.75,
        backgroundColor: 'rgba(190, 114, 102, 0.7)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: width * 0.37,
        height: width * 0.37
    },

    text: {
        color: 'white',
        marginTop: 15
    },

    audioGraph: {
        height: 60,
        width: (60 / 121) * 158
    },

    slider: {
        width: width * 0.5625
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
