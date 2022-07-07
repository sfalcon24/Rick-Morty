import type {Props} from './types';
import Component from '.';

export default {
  title: 'Icons',
  component: Component,
  args: {
    name: 'plus',
  } as Props,
};

export const Plus = (props: Props) => <Component {...props} />;
