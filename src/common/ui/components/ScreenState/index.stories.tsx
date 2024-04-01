import type {ComponentMeta, Story} from '@storybook/react-native';
import {CenteredView} from '@storybook-utils';
import {action} from '@storybook/addon-actions';
import type {Props} from './types';
import ScreenState from '.';

export default {
  title: 'ScreenState',
  component: ScreenState,
} as ComponentMeta<typeof ScreenState>;

type Args = Pick<Props, 'buttonText' | 'description' | 'icon' | 'title'>;

const Template: Story<Args> = ({buttonText, description, title}) => (
  <CenteredView>
    <ScreenState
      buttonText={buttonText}
      description={description}
      icon="link-broken"
      title={title}
      onPress={action('handlePressButton')}
    />
  </CenteredView>
);

export const EmptyState = Template.bind({});
EmptyState.args = {
  description:
    'There are no items matching your criteria. Try a different one!',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  buttonText: 'Try again',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  title: 'Error title',
};
