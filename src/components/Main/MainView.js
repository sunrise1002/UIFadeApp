import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import Modal from 'react-native-modal';
import MusicModal from './MusicModal';
import TaskModal from './TaskModal/TaskModal';
import TipModal from './TipModal';

/* eslint-disable global-require */
const background = require('../../Media/Images/MainImages/background.png');
const backButton = require('../../Media/Images/MainImages/back.png');
const menuButton = require('../../Media/Images/MainImages/burger.png');
const mainButton = require('../../Media/Images/MainImages/mainButton.png');

const { height, width } = Dimensions.get('window');

export default class MainView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            currentText: '',
            showSecondTopBar: false,
            showModal: false
        };
    }
    
    showSecondTopBar() {
        if (this.state.showSecondTopBar) {
            return (
                <View style={styles.scrollViewContainer} > 
                        <ScrollView 
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity 
                                onPress={
                                    () => this.setState({ 
                                        currentText: 'MUSIC',
                                        showModal: true
                                    })
                                } 
                            >
                                <Text 
                                    style={this.state.currentText === 'MUSIC' && this.state.showModal ? // must use '==='
                                    styles.pickedTextScrollView : styles.textScrollView} 
                                >
                                    MUSIC
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                onPress={
                                    () => this.setState({ 
                                        currentText: 'TASK',
                                        showModal: true 
                                    })
                                } 
                            >
                                <Text 
                                    style={this.state.currentText === 'TASK' && this.state.showModal ? 
                                    styles.pickedTextScrollView : styles.textScrollView} 
                                >
                                    TASK
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                onPress={
                                    () => this.setState({ 
                                        currentText: 'TIP',
                                        showModal: true 
                                    })
                                } 
                            >
                                <Text 
                                    style={this.state.currentText === 'TIP' && this.state.showModal ? 
                                    styles.pickedTextScrollView : styles.textScrollView} 
                                >
                                    TIP
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                onPress={
                                    () => this.setState({ currentText: 'CHART' })
                                } 
                            >
                                <Text 
                                    style={this.state.currentText === 'CHART' && this.state.showModal ? 
                                    styles.pickedTextScrollView : styles.textScrollView} 
                                >
                                    CHART
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                onPress={
                                    () => this.setState({ currentText: 'STORY' })
                                } 
                            >
                                <Text 
                                    style={this.state.currentText === 'STORY' && this.state.showModal ? 
                                    styles.pickedTextScrollView : styles.textScrollView} 
                                >
                                    STORY
                                </Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
            );
        }
        return null;
    }

    closeModal() {
        this.setState({ showModal: false });
    }
    
    contentModal() {
        switch (this.state.currentText) {
            case 'MUSIC':
                return <MusicModal />;
            case 'TASK':
                return <TaskModal />;
            case 'TIP':
                return <TipModal closeModalProp={() => this.closeModal()} />;
            default:
                return '';
        }
    }
    
    render() {
        return (
            <ImageBackground source={background} style={styles.background} >
                <View>
                    <View style={styles.topBarContainer} >
                        <TouchableOpacity style={styles.buttonTopBar} >
                            <Image source={backButton} />
                        </TouchableOpacity>  

                        <Text style={styles.textTopBar} >
                            MAIN SCREEN
                        </Text>

                        <TouchableOpacity 
                            style={styles.buttonTopBar} 
                            onPress={this.props.openMenuProp} 
                        >
                            <Image source={menuButton} />
                        </TouchableOpacity>  
                    </View>

                    {this.showSecondTopBar()}
                </View>

                <Modal 
                isVisible={this.state.showModal} 
                backdropOpacity={0}
                onBackdropPress={() => this.setState({ showModal: false })}
                style={styles.modal}
                >
                    {this.contentModal()}
                </Modal>
                
                <TouchableOpacity 
                    style={styles.mainButtonContainer} 
                    onPress={
                        () => this.setState({ showSecondTopBar: !this.state.showSecondTopBar })
                    }
                >   
                    <Image source={mainButton} style={styles.mainButtonDot} /> 
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width,
        height,
        justifyContent: 'space-between',
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

    mainButtonContainer: {
        backgroundColor: '#1eebb4',
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 60,
        elevation: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },

    mainButtonDot: {
        width: 15,
        height: 15
    },

    scrollViewContainer: {
        height: 40,
        marginTop: 30
    },

    textScrollView: {
        fontSize: 17,
        color: 'white',
        marginHorizontal: 20
    },

    pickedTextScrollView: {
        fontSize: 17,
        color: '#1eebb4',
        marginHorizontal: 20
    },

    modal: {
        alignSelf: 'center'
    }
});
