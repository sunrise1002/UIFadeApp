import React, { Component } from 'react';
import { 
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

const { height, width } = Dimensions.get('window');
const acceptButton = require('../../Media/Images/MainImages/acceptButton.png');

export default class TipModal extends Component {
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.lineOne} />

                <Text style={styles.title} >
                    T   I   P
                </Text>

                <View style={styles.lineTwo} />

                <View style={styles.textContainer} >
                    <Text style={styles.text} >
                        {'   '}Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>

                    <Text style={styles.text} >
                        {'   '}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        si ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in ...
                    </Text>
                </View>
                <TouchableOpacity onPress={this.props.closeModalProp} >
                    <Image source={acceptButton} style={styles.button} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: height * 0.6,
        width: width * 0.75,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center'
    },

    lineOne: {
        height: 0.5,
        width: width * 0.6,
        backgroundColor: 'black',
        marginTop: 15,
        marginBottom: 10,
    },

    lineTwo: {
        height: 0.5,
        width: width * 0.6,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        marginTop: 10,
        marginBottom: 15
    },

    title: {
        color: 'black',
        fontSize: 20,
    },

    textContainer: {
        width: width * 0.6,
        height: height * 0.3,
    },

    text: {
        fontSize: 12
    },

    button: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    }
});
