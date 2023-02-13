import type {Props} from './types';
import {BlankMain} from '.';

export default {
  title: 'Screen: BlankMain',
  component: BlankMain,
  args: {} as Props,
};

export const ScreenMainBase = (props: any) => <BlankMain {...props} />;
