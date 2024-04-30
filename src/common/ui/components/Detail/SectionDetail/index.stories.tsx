import {action} from '@storybook/addon-actions';
import SectionDetail from '.';

const INFORMATION_OPTIONS = [
  {
    title: 'Gender',
    subtitle: 'Male',
  },
  {
    title: 'Origin',
    subtitle: 'Earth',
    date: 'DECEMBER',
  },
  {
    title: 'Type',
    subtitle: 'Unknown',
  },
  {
    title: 'Location',
    subtitle: 'Earth',
  },
];

export default {
  title: 'SectionDetail',
  component: SectionDetail,
};

export const Section_Detail = () => (
  <SectionDetail
    title="Information"
    options={INFORMATION_OPTIONS}
    onPress={action('onPress')}
  />
);
