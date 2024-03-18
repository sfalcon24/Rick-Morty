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
    leftButton="small"
    onPressRight={action('onPressRight')}
    rightButton="small"
  />
);

// export const Large = () =>
//   <Header
//     variant="large"
//     title="Title"
//     onPressRight={action('onPressRight')}
//     rightButton='small'
//   />;
