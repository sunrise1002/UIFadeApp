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
const background = require('../../Media/Images/ChartImages/background.png');
const backButton = require('../../Media/Images/MainImages/back.png');
const menuButton = require('../../Media/Images/MainImages/burger.png');
const chart = require('../../Media/Images/ChartImages/chart.png');

export default class ChartView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentYear: '2018'
        };
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
                        C H A R T
                    </Text>

                    <TouchableOpacity 
                        style={styles.buttonTopBar} 
                        onPress={this.props.openMenuProp} 
                    >
                        <Image source={menuButton} />
                    </TouchableOpacity>  
                </View>

                <View style={styles.yearButtonContainer} >
                    <TouchableOpacity 
                        onPress={() => this.setState({ currentYear: '2017' })}
                        style={this.state.currentYear === '2017' ? 
                        styles.yearButtonPicked : styles.yearButton} 
                    >
                        <Text style={styles.yearText} >2017</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.setState({ currentYear: '2018' })}
                        style={this.state.currentYear === '2018' ? 
                        styles.yearButtonPicked : styles.yearButton}
                    >
                        <Text style={styles.yearText} >2018</Text>
                    </TouchableOpacity> 
                </View>

                <Image source={chart} style={styles.chart} />
                
                <View style={styles.annotationContainer} >
                    <View style={styles.itemContainer} >
                        <View style={styles.lineOne} /> 
                        <Text style={styles.annotationText} >Lorem ipsum dolor sit amet</Text>
                    </View>

                    <View style={styles.itemContainer} >
                        <View style={styles.lineTwo} /> 
                        <Text style={styles.annotationText} >Lorem ipsum dolor </Text>
                    </View>

                    <View style={styles.itemContainer} >
                        <View style={styles.lineThree} /> 
                        <Text style={styles.annotationText} >Dolor sit amet</Text>
                    </View>
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

    yearButtonContainer: {
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    yearButton: {
        width: 70,
        height: 25,
        backgroundColor: '#646e9f',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        borderRadius: 15
    },

    yearButtonPicked: {
        width: 70,
        height: 25,
        backgroundColor: '#3dca99',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        borderRadius: 15
    },
    
    yearText: {
        color: '#fff',
        fontSize: 10
    },

    chart: {
        width,
        height: (width / 750) * 528
    },

    annotationContainer: {
        marginTop: 20,
        marginLeft: 40
    }, 
    
    itemContainer: {
        flexDirection: 'row',
        marginVertical: 5
    },   
    
    lineOne: {
        height: 3,
        width: 80,
        borderRadius: 3,
        backgroundColor: '#646e9f',
        marginRight: 10,
        alignSelf: 'center'
    },  

    lineTwo: {
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: '#3dca99',
        marginRight: 10,
        alignSelf: 'center'
    },  

    lineThree: {
        height: 3,
        width: 40,
        borderRadius: 3,
        backgroundColor: '#bf7266',
        marginRight: 10,
        alignSelf: 'center'
    },  

    annotationText: {
        color: '#646e9f',
        fontSize: 10
    },  
});
