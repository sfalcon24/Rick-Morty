import {action} from '@storybook/addon-actions';
import theme from 'common/ui/theme';
import Header from '.';

export default {
  title: 'Header',
  component: Header,
};

export const Default = () => (
  <Header
    style={{backgroundColor: theme.colors.gray6}}
    variant="default"
    title="Title"
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
    style={{backgroundColor: theme.colors.gray5}}
    variant="large"
    title="Title"
    rightTextButton="Filter"
    rightIcon={true}
    onPressRight={action('onPressRight')}
  />
);
