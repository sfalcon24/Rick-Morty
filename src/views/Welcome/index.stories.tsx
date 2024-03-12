import type {Props} from './types';
import {Welcome} from '.';

export default {
  title: 'Screen: Welcome',
  component: Welcome,
  args: {} as Props,
};

export const ScreenMainBase = (props: any) => <Welcome {...props} />;
