import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Story from './Story';
import DrawerComponent from './Drawer';
import Chart from './Chart';
import Login from '../Login/Login';

export default class App extends Component {
  
  goToLogin() {
    this.props.navigation.navigate('LOGIN');
  }

  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = createStackNavigator(
  {
    DRAWERCOMPONENT: {
      screen: DrawerComponent,
      navigationOptions: () => ({ header: null })
    },

    CHART: {
      screen: Chart,
      navigationOptions: () => ({ header: null })
    },

    STORY: {
      screen: Story,
      navigationOption: () => ({ header: null }) //Van bi hien header trong khi Chart screen khong bi?
    },

    LOGIN: {
      screen: Login,
      navigationOptions: () => ({ header: null })
    }
  },

  {
    initialRouteName: 'DRAWERCOMPONENT'
  }
);

