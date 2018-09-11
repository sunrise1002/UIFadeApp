import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import MusicView from './MusicView';
import Menu from '../Main/Menu';

export default class Chart extends Component {
    openMenu = () => {
        this.drawer.open();
    };

    goBack() {
        this.props.navigation.goBack();
    }

    goToLogin() {
        this.props.navigation.navigate('LOGIN');
    }
    
    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                type="displace"
                content={<Menu goToLoginProp={() => this.goToLogin()} />}
                openDrawerOffset={0.25}
                tapToClose
                tweenHandler={(ratio) => ({
                    main: { opacity: (2 - ratio) / 2 }
                })}
                side='right'
                styles={drawerStyles}
            >
                <MusicView
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
