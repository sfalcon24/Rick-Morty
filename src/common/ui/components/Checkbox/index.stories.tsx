import type {Story, Meta} from '@storybook/react';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import type {Props} from './types';
import {Checkbox} from '.';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<Props> = args => {
  const [isChecked, setIsChecked] = useState(args.value || false);

  const handlePress = () => {
    setIsChecked(!isChecked);
    action('setValue')(!isChecked);
  };

  return <Checkbox {...args} isChecked={isChecked} onPress={handlePress} />;
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  value: false,
};
