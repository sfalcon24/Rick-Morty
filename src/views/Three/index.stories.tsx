import type {Props} from './types';
import {ThreeTab} from '.';

export default {
  title: 'Screen: Zero Tab',
  component: ThreeTab,
  args: {} as Props,
};

export const ScreenTabBase = (props: any) => <ThreeTab {...props} />;
