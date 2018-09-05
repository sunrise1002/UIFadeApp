import React, { Component } from 'react';
import { 
    ImageBackground,
    TouchableOpacity,
    Image,
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';

const { height, width } = Dimensions.get('window');
const backButton = require('../../Media/Images/MainImages/back.png');
const menuButton = require('../../Media/Images/MainImages/burger.png');
const storyImage = require('../../Media/Images/StoryImages/storyImage.png');
const button = require('../../Media/Images/StoryImages/button.png');

export default class StoryView extends Component {

    render() {
        return (
            <View>
                <View style={styles.topBarContainer} >
                    <TouchableOpacity 
                        style={styles.buttonTopBar} 
                        onPress={this.props.goBackProp}
                    >
                        <Image source={backButton} />
                    </TouchableOpacity>  

                    <Text style={styles.textTopBar} >
                        S T O R Y
                    </Text>

                    <TouchableOpacity 
                        style={styles.buttonTopBar} 
                        onPress={this.props.openMenuProp} 
                    >
                        <Image source={menuButton} />
                    </TouchableOpacity>  
                </View>

                <ImageBackground source={storyImage} style={styles.storyImage} >
                    <View style={styles.line} />

                    <Text style={styles.title} >
                        T  R  A  V  E  L
                    </Text>

                    <View style={styles.line} />

                    <Text style={styles.author} >
                        By Peter Verseghy
                    </Text>
                </ImageBackground>

                <View style={styles.contentContainer} >
                    <View style={styles.textContainer} >
                        <Text style={styles.textContent} >
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </Text>

                        <Text style={styles.textContent} >
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute 
                            irure dolor in reprehenderit in ...
                        </Text>
                        
                        <Text style={styles.textContent} >
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.buttonContainer} >
                        <Image source={button} style={styles.button} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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

    storyImage: {
        width,
        height: (width / 750) * 487,
        alignItems: 'center',
        paddingTop: 100
    },  
    
    line: {
        height: 0.5,
        width: width * 0.8,
        backgroundColor: '#fff',
        marginTop: 10
    },

    title: {
        color: '#fff',
        fontSize: 16,
        marginTop: 10
    },

    author: {
        color: '#fff',
        fontSize: 10,
        marginTop: 10
    },

    contentContainer: { 
        justifyContent: 'space-between'
    },

    textContainer: {
        width: width * 0.6,
        alignSelf: 'center',
        marginTop: 30
    },  
    
    textContent: {
        fontSize: 11,
        margin: 5
    },

    buttonContainer: {
        alignSelf: 'flex-end',
        marginTop: 10,
        marginBottom: 50,
        marginRight: 20
    },

    button: {
        width: 50,
        height: 50
    } 
});
