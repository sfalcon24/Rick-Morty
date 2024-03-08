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

export const Card2 = Template.bind({});
Card2.args = {
  status: 'Status',
  name: 'Planet Blue',
  onPress: action('onPress'),
};
