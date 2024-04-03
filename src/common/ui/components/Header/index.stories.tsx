import {action} from '@storybook/addon-actions';
import theme from 'common/ui/theme';
import Header from '.';

export default {
  title: 'Header',
  component: Header,
};

export const Default = () => (
  <Header
    variant="default"
    title="Title"
    backgroundColor={theme.colors.gray6}
    leftTextButton="Filter"
    leftIcon={true}
    onPressLeft={action('onPressLeft')}
    onPressRight={action('onPressRight')}
    rightTextButton="Filter"
    rightIcon={false}
  />
);

export const Large = () => (
  <Header
    variant="large"
    title="Title"
    backgroundColor={theme.colors.white}
    rightTextButton="Filter"
    rightIcon={true}
    onPressRight={action('onPressRight')}
  />
);
