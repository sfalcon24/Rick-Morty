import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import StorybookUIRoot from 'components/../../.storybook/Storybook';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StorybookUIRoot);
