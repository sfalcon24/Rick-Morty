import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {Root} from './src/containers';
import StorybookUIRoot from 'components/../../.storybook/Storybook';
import {name as appName} from './app.json';
import env from 'react-native-config';

const sbEnabled = !!env.SB;

AppRegistry.registerComponent(appName, () =>
  sbEnabled ? StorybookUIRoot : Root,
);
