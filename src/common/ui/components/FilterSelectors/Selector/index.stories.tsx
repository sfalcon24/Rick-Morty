import {action} from '@storybook/addon-actions';
import Selector from '.';

export default {
  title: 'Filter Selectors',
  component: Selector,
};

export const Filter_Selector = () => (
  <Selector
    name="Alive"
    value="alive"
    isSelected={true}
    onPress={action('onPress')}
  />
);
