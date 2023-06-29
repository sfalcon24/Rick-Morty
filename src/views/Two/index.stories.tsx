import type {Props} from './types';
import {TwoTab} from '.';

export default {
  title: 'Screen: Zero Tab',
  component: TwoTab,
  args: {} as Props,
};

export const ScreenTabBase = (props: any) => <TwoTab {...props} />;
