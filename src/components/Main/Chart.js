import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import ChartView from './ChartView';
import Menu from './Menu';

export default class DrawerComponent extends Component {
    openMenu = () => {
        this.drawer.open();
    };

    goBack() {
        this.props.navigation.goBack();
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
                <ChartView
                    openMenuProp={() => this.openMenu()}
                    goBackProp={() => this.goBack()}
                />
            </Drawer>
        );
    }
}

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 }
};
