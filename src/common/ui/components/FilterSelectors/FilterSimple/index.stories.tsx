import {action} from '@storybook/addon-actions';
import FilterSimple from '.';

export default {
  title: 'Filter Selectors',
  component: FilterSimple,
};

export const Filter_Simple = () => (
  <FilterSimple
    id="name"
    title="Name"
    value={undefined}
    isChecked={true}
    onPress={action('onPress')}
  />
);
