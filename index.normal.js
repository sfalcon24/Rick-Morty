import {AppRegistry} from 'react-native';
import {Root} from './src/core/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);
