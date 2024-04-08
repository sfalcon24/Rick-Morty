import {action} from '@storybook/addon-actions';
import FilterSelection from '.';

export default {
  title: 'Filer Selectors',
  component: FilterSelection,
};

const selectors = [
  {id: 1, options: 'Alive', onPressLeft: action('Option 1 pressed')},
  {id: 2, options: 'Dead', onPressLeft: action('Option 2 pressed')},
  {id: 3, options: 'Unknown', onPressLeft: action('Option 3 pressed')},
];

export const Filter_Selections = () => (
  <FilterSelection title="Status" selector={selectors} />
);
