import type {Props} from './types';
import Character from '.';

export default {
  title: 'Screen: Character',
  component: Character,
  args: {} as Props,
};

export const ScreenMainBase = (props: any) => <Character {...props} />;
