import React from 'react';
import type {ComponentMeta, Story} from '@storybook/react-native';
import type {Props} from './types';
import Icon from '.';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

type Args = Pick<Props, 'name' | 'size' | 'color'>;

const Template: Story<Args> = ({name = 'arrowRight', size}) => (
  <Icon name={name} size={size} />
);

export const Basic = Template.bind({});
