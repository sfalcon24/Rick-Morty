import type {Props} from './types';
import {OneTab} from '.';

export default {
  title: 'Screen: Zero Tab',
  component: OneTab,
  args: {} as Props,
};

export const ScreenTabBase = (props: any) => <OneTab {...props} />;
