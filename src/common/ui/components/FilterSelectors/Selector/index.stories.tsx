import {action} from '@storybook/addon-actions';
import Selector from '.';

export default {
  title: 'Filer Selectors',
  component: Selector,
};

export const Filter_Selector = () => (
  <Selector
    options="Give a name"
    onPressLeft={action('onPressLeft')}
    onPressRight={action('onPressRight')}
  />
);
