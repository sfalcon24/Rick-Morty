import React from 'react';
import type {ComponentMeta, Story} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import type {Props} from './types';
import LocationCard from '.';

export default {
  title: 'Cards',
  component: LocationCard,
} as ComponentMeta<typeof LocationCard>;

type Args = Props;

const Template: Story<Args> = args => <LocationCard {...args} />;

export const Location_Card = Template.bind({});
Location_Card.args = {
  status: 'Dead',
  name: 'Planet Blue',
  onPress: action('onPress'),
};
