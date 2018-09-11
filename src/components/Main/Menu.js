import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    Switch
} from 'react-native';

const { height } = Dimensions.get('window');
const Avatar = require('../../Media/Images/SideMenuImages/Avatar.png');
const Arrow = require('../../Media/Images/SideMenuImages/arrow.png');

export default class Menu extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            badgeStatus: 17,
            notificationButton: true,
            shortcutButton: false
        };
    }

    render() {
        return (
             <View style={styles.container} >
                <View style={styles.topContainer} >
                    <Image source={Avatar} style={styles.avatar} />

                    <View>
                        <Text style={styles.textName} >
                            Selena Verseghy
                        </Text>

                        <TouchableOpacity 
                            style={styles.buttonTopContainer} 
                            onPress={this.props.goToLoginProp}
                        >
                            <Text style={styles.textTopButton} >
                                SWITCH
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={styles.textTittle} >
                    ACCOUNT
                </Text>
                 
                <View style={styles.line} />

                <View style={styles.middleContainer} >
                    <TouchableOpacity onPress={this.props.goToMusicScreenProp} >
                        <Text style={styles.textOption} >
                            YOUR MUSIC
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.calendarOptionContainer} >
                            <Text style={styles.textOption} >
                                CALENDAR MANAGER
                            </Text>
                            <View style={styles.badgeContainer} >
                                <Text style={styles.textOption} >
                                    {this.state.badgeStatus}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.textOption} >
                            MULTIMEDIA
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.textOption} >
                            TRAVEL GUIDE
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.textOption} >
                            WORKOUT INFORMATION
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.textTittle} >
                    SETTINGS
                </Text>
                 
                <View style={styles.line} />

                <View style={styles.bottomContainer} >
                    <View style={styles.itemsSettingContainer} >
                        <View >
                            <Text style={styles.textOption} >
                                NOTIFICATIONS
                            </Text>

                            <Text style={styles.textDescription} >
                                Lorem ipsum dolor sit amet
                            </Text>
                        </View>

                        <Switch 
                            onTintColor={'#21e7b6'} 
                            thumbTintColor={'#646e9f'} 
                            onValueChange={() => this.setState({ notificationButton: !this.state.notificationButton })}
                            value={this.state.notificationButton}
                        />
                    </View>

                    <View style={styles.itemsSettingContainer} >
                        <View >
                            <Text style={styles.textOption} >
                                SHORTCUT
                            </Text>

                            <Text style={styles.textDescription} >
                                Lorem ipsum dolor sit amet
                            </Text>
                        </View>

                        <Switch 
                            onTintColor={'#21e7b6'} 
                            thumbTintColor={'#646e9f'} 
                            onValueChange={() => this.setState({ shortcutButton: !this.state.shortcutButton })}
                            value={this.state.shortcutButton}
                        />
                    </View>

                    <TouchableOpacity style={styles.moreOptionContainer} >
                        <Text style={styles.textDescription} >
                            MORE OPTIONS
                        </Text>

                        <Image source={Arrow} style={styles.arrow} />
                    </TouchableOpacity>
                </View>
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#242d4d',
        flex: 1
    },

    topContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },

    middleContainer: {
        flex: 3,
        justifyContent: 'space-around',
        paddingLeft: 30,
        paddingRight: 20
    },

    bottomContainer: {
        flex: 3,
        justifyContent: 'space-around',
        paddingLeft: 30,
        paddingRight: 20
    },

    line: {
        height: 1,
        backgroundColor: '#464c72',
        marginHorizontal: 10
    },

    avatar: {
        height: height * 0.14,
        width: height * 0.14,
        marginHorizontal: 30
    },

    textName: {
        color: '#fff'
    },

    buttonTopContainer: {
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#646e9f',
        marginTop: 10
    },

    textTopButton: {
        color: '#fff',
        marginVertical: 5,
    },

    textTittle: {
        fontSize: 10,
        color: '#464c72',
        marginLeft: 10
    },

    textOption: {
        color: '#fff',
        fontSize: 12
    },

    calendarOptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    badgeContainer: {
        paddingHorizontal: 10,
        backgroundColor: '#bf7266',
        borderRadius: 10
    },

    itemsSettingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    textDescription: {
        fontSize: 10,
        color: '#464c72',
    },

    moreOptionContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },

    arrow: {
        width: 15,
        height: (15 / 27) * 14
    }
});
