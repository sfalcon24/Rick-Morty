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

export const Character_Card = Template.bind({});
Character_Card.args = {
  image: {
    uri: 'https://i.blogs.es/15b725/rickymorty-t7/375_375.jpeg',
  },
  status: 'Dead',
  name: 'Pepperoni Pizza',
  onPress: action('onPress'),
};
