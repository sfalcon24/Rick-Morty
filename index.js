import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {Root} from './src/containers';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);
