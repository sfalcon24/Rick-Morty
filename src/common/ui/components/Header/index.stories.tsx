import {action} from '@storybook/addon-actions';
import Header from '.';

export default {
  title: 'Header',
  component: Header,
};

export const Default = () => (
  <Header
    variant="default"
    title="Title"
    onPressLeft={action('onPressLeft')}
    leftTextButton="textButton"
    leftIcon={true}
    titleLeftButton="Back"
    onPressRight={action('onPressRight')}
    rightTextButton="small"
    rightIcon={false}
    titleRightButton="APPLY"
  />
);

export const Large = () => (
  <Header
    variant="large"
    title="Title"
    onPressRight={action('onPressRight')}
    rightTextButton="textButton"
    rightIcon={true}
  />
);
