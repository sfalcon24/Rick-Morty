import {action} from '@storybook/addon-actions';
import LocationCard from '.';

export default {
  title: 'Cards',
  component: LocationCard,
};

export const Card2 = () => (
  <LocationCard
    status="Status"
    name="Plante Blue"
    onPress={action('onPress')}
  />
);
