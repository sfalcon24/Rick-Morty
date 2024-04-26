import {action} from '@storybook/addon-actions';
import FilterSelection from '.';

export default {
  title: 'Filter Selectors',
  component: FilterSelection,
};

const STATUS_OPTIONS = [
  {
    name: 'Alive',
    value: 'Alive',
    isSelected: true,
  },
  {
    name: 'Dead',
    value: 'Dead',
    isSelected: false,
  },
  {
    name: 'Unknown',
    value: 'Unknown',
    isSelected: false,
  },
];

export const Filter_Selections = () => (
  <FilterSelection
    title="Status"
    options={STATUS_OPTIONS}
    onPress={action('onPress')}
  />
);
