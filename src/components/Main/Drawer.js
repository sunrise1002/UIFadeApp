import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import MainView from './MainView';
import Menu from './Menu';

export default class DrawerComponent extends Component {
    openMenu = () => {
        this.drawer.open();
    };
    
    goToChart() {
        this.props.navigation.navigate('CHART');
    }

    goToStory() {
        this.props.navigation.navigate('STORY');
    }
    
    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                type="displace"
                content={<Menu />}
                openDrawerOffset={0.25}
                tapToClose
                tweenHandler={(ratio) => ({
                    main: { opacity: (2 - ratio) / 2 }
                })}
                side='right'
                styles={drawerStyles}
            >
                <MainView 
                    openMenuProp={() => this.openMenu()} 
                    goToChartProp={() => this.goToChart()}
                    goToStoryProp={() => this.goToStory()}
                />
            </Drawer>
        );
    }
}

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 }
};
