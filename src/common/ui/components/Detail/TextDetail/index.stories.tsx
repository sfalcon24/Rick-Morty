import {action} from '@storybook/addon-actions';
import TextDetail from '.';

export default {
  title: 'SectionDetail',
  component: TextDetail,
};

export const Text_Detail = () => (
  <TextDetail
    title="Gender"
    subtitle="Male"
    date="DECEMBER"
    onPress={action('onPress')}
  />
);
