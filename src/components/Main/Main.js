import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Story from './Story';
import DrawerComponent from './Drawer';
import Chart from './Chart';

export default class App extends Component {
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
      navigationOption: () => ({ header: null })
    },
  },

  {
    initialRouteName: 'DRAWERCOMPONENT'
  }
);

