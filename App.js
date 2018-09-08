import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Main from './src/components/Main/Main';
import Music from './src/components/Music/Music';
import Calendar from './src/components/Calendar/Calendar';
import Travel from './src/components/Travel/Travel';
import Workout from './src/components/Workout/Workout';
import Login from './src/components/Login/Login';

export default class App extends Component {
  
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = createStackNavigator(
  {
    MAIN: {
      screen: Main,
      navigationOptions: () => ({ header: null })
    },

    MUSIC: {
      screen: Music,
      navigationOptions: () => ({ header: null })
    },

    CALENDAR: {
      screen: Calendar,
      navigationOption: () => ({ header: null })
    },

    TRAVEL: {
      screen: Travel,
      navigationOptions: () => ({ header: null })
    },

    WORKOUT: {
      screen: Workout,
      navigationOptions: () => ({ header: null })
    },

    LOGIN: {
      screen: Login,
      navigationOptions: () => ({ header: null })
    }
  },

  {
    initialRouteName: 'MAIN'
  }
);
