import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import MainView from './MainView';
import Menu from './Menu';

export default class Main extends Component {
    openMenu = () => {
        this.drawer.open();
      };
    
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
                <MainView openMenuProp={() => this.openMenu()} />
            </Drawer>
        );
    }
}

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 }
};
