import React from 'react';
import type {ComponentMeta, Story} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import type {Props} from './types';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

type Args = Props;

const Template: Story<Args> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'large-dark',
  title: 'GET THE INSTRUCTIONS',
  onPress: action('onPress'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'large',
  title: 'START PROTOTYPE',
  onPress: action('onPress'),
};

export const Small = Template.bind({});
Small.args = {
  variant: 'small',
  title: 'APPLY',
  onPress: action('onPress'),
};
