import React from 'react';
import type {ComponentMeta, Story} from '@storybook/react-native';
import type {Props} from './types';
import Separators from '.';

export default {
  title: 'Separator',
  component: Separators,
} as ComponentMeta<typeof Separators>;

type Args = Props;

const Template: Story<Args> = args => <Separators {...args} />;

export const Separator_Large = Template.bind({});
Separator_Large.args = {
  variant: 'large',
};

export const Separator_Medium = Template.bind({});
Separator_Medium.args = {
  variant: 'medium',
};

export const Separator_Small = Template.bind({});
Separator_Small.args = {
  variant: 'small',
};
