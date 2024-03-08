import React from 'react';
import type {ComponentMeta, Story} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import type {Props} from './types';
import CharacterCard from '.';

export default {
  title: 'Cards',
  component: CharacterCard,
} as ComponentMeta<typeof CharacterCard>;

type Args = Props;

const Template: Story<Args> = args => <CharacterCard {...args} />;

export const Card1 = Template.bind({});
Card1.args = {
  image:
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.motor1.com%2Fnews%2F596157%2Fnovitec-ferrari-sf90-stradale-2022%2F&psig=AOvVaw37L7gF3ibcDKePaprxJm5Z&ust=1709645443727000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjagafi2oQDFQAAAAAdAAAAABAD',
  status: 'Status',
  name: 'Pepperoni Pizza',
  onPress: action('onPress'),
};
