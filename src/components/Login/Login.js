import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import LoginView from './LoginView';
import Menu from '../Main/Menu';

export default class Login extends Component {
    openMenu = () => {
        this.drawer.open();
    };
    
    goToMain() {
        this.props.navigation.navigate('DRAWERCOMPONENT');
    }

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
                <LoginView 
                    openMenuProp={() => this.openMenu()} 
                    goToMainProp={() => this.goToMain()}
                    goBackProp={() => this.goBack()}
                />
            </Drawer>
        );
    }
}

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 }
};
