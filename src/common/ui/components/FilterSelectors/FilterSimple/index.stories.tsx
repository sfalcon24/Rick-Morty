import {action} from '@storybook/addon-actions';
import FilterSimple from '.';

export default {
  title: 'Filer Selectors',
  component: FilterSimple,
};

export const Filter_Simple = () => (
  <FilterSimple
    title="Name"
    subtitle="Give a name"
    onPressLeft={action('onPressLeft')}
    onPressRight={action('onPressRight')}
  />
);
