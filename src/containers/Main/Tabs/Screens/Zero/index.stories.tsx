import type {Props} from './types';
import {ZeroTab} from '.';

export default {
  title: 'Screen: Zero',
  component: ZeroTab,
  args: {} as Props,
};

export const ScreenTabBase = (props: any) => <ZeroTab {...props} />;
