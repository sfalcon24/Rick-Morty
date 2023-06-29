import {getStorybookUI} from '@storybook/react-native';
import 'react-native-gesture-handler';
import 'core/i18n';

import './storybook.requires';

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
