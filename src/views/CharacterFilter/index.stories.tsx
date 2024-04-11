import type {Props} from './types';
import {CharacterFilter} from '.';

export default {
  title: 'Screen: CharacterFilter',
  component: CharacterFilter,
  args: {} as Props,
};

export const ScreenTabBase = (props: any) => <CharacterFilter {...props} />;
