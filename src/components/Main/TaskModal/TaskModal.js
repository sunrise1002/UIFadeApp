import React, { Component } from 'react';
import { 
    View,
    Text,
    Dimensions,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import TaskList from './TaskList';

const { height, width } = Dimensions.get('window');
const checkButton = require('../../../Media/Images/MainImages/checkButton.png');

export default class TaskModal extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            click: false 
        };
    }
    
    renderTaskList() {
        const listItems = []; //Mang chua View cua tung dong
        for (let i = 0; i < TaskList.length; i++) {
            const styleCheckButton = (
                !TaskList[i].checked ? 
                <View style={styles.uncheck} /> 
                : <Image source={checkButton} style={styles.checked} />
            );
            
            listItems.push(
                <View style={styles.itemContainer} key={i} >
                    <TouchableOpacity 
                        onPress={() => { 
                            /*Mac du sau khi click thi checked value thay doi nhung vi
                            khong co state thay doi nen khong chay lai ham render*/
                            TaskList[i].checked = !TaskList[i].checked; 
                            //Thay doi state nay de thong bao vua click va chay lai ham render
                            this.setState({ click: !this.state.click });
                        }} 
                    >
                        {styleCheckButton}
                    </TouchableOpacity>    
    
                    <View>
                        <Text style={styles.itemTitle} >
                            {TaskList[i].title}
                        </Text>
    
                        <Text style={styles.itemContent} >
                            {TaskList[i].content}
                        </Text>
                    </View>
                </View>
            );
        }
        return listItems;
    }
    
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.lineOne} />

                <Text style={styles.title} >
                    T   A   S   K   S
                </Text>

                <View style={styles.lineTwo} />

                <View style={styles.scrollViewContainer} >
                    <ScrollView showsVerticalScrollIndicator={false} >
                        {this.renderTaskList()}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: height * 0.6,
        width: width * 0.75,
        backgroundColor: '#1eebb4',
        borderRadius: 5,
        alignItems: 'center'
    },

    lineOne: {
        height: 1,
        width: width * 0.6,
        backgroundColor: 'white',
        marginTop: 15,
        marginBottom: 10,
    },

    lineTwo: {
        height: 0.5,
        width: width * 0.6,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        marginTop: 10,
        marginBottom: 15
    },

    title: {
        color: 'white',
        fontSize: 20,
    },

    uncheck: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#2ba380',
        marginHorizontal: 20,
        alignSelf: 'flex-start',
    },

    checked: {
        width: 30,
        height: 30,
        marginHorizontal: 20,
        alignSelf: 'flex-start',
    },

    itemContainer: {
        width: width * 0.6,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },

    itemTitle: {
        color: '#fff',
    },

    scrollViewContainer: {
        width: width * 0.6,
        height: height * 0.37,
    },

    itemContent: {
        color: '#fff',
        fontSize: 10
    }
});
