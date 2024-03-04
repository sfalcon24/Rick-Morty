import {action} from '@storybook/addon-actions';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <Button
    variant="large-dark"
    title="GET THE INSTRUCTIONS"
    onPress={action('onPress')}
  />
);

// export const PrimaryLoading = () => (
//   <Button
//     variant="primary"
//     title="Primary loading"
//     onPress={action('onPress')}
//     loading
//   />
// );

export const Secondary = () => (
  <Button variant="large" title="START PROTOTYPE" onPress={action('onPress')} />
);

export const Small = () => (
  <Button variant="small" title="APPLY" onPress={action('onPress')} />
);
// export const SecondaryLoading = () => (
//   <Button
//     variant="secondary"
//     title="Secondary loading"
//     onPress={action('onPress')}
//     loading
//   />
// );
