import type {FC} from 'react';
import ArrowLeftIcon from './ArrowLeftIcon';
import GhostIcon from './GhostIcon';
import PlanetIcon from './PlanetIcon';
import PlusIcon from './PlusIcon';

import PointIcon from './PointIcon';
import RocketIcon from './RocketIcon';
import TvIcon from './TvIcon';
import type {IconProps} from './types';

const createSvgIcons = <T extends {[name: string]: FC<IconProps>}>(
  cfg: T,
): Record<keyof T, FC<IconProps>> => cfg;

export const icons = createSvgIcons({
  plus: PlusIcon,
  tv: TvIcon,
  planet: PlanetIcon,
  ghost: GhostIcon,
  arrowLeft: ArrowLeftIcon,
  point: PointIcon,
  rocket: RocketIcon,
});
