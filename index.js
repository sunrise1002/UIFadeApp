import { AppRegistry, YellowBox } from 'react-native';
import App from './App';

//Bo qua warning "isMounted(...) is deprecated..."
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('FadeUI', () => App);
