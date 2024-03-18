import React from 'react';
import type {ComponentMeta, Story} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import type {Props} from './types';
import TextButton from '.';

export default {
  title: 'Button',
  component: TextButton,
} as ComponentMeta<typeof TextButton>;

type Args = Props;

const Template: Story<Args> = args => <TextButton {...args} />;

export const Text_Button = Template.bind({});
Text_Button.args = {
  leftIcon: 'plus',
  title: 'Filter',
  onPress: action('onPress'),
};
