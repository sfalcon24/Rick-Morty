import {action} from '@storybook/addon-actions';
import FilterSimple from '.';

export default {
  title: 'Filter Selectors',
  component: FilterSimple,
};

export const Filter_Simple = () => (
  <FilterSimple
    title="Name"
    subtitle="Give a name"
    value="give a name"
    isChecked={true}
    onPress={action('onPress')}
    onPressRight={action('onPressRight')}
  />
);
