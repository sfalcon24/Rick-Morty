import type {FC} from 'react';
import ArrowLeftIcon from './ArrowLeftIcon';
import ArrowRightIcon from './ArrowRightIcon';
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
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  ghost: GhostIcon,
  planet: PlanetIcon,
  plus: PlusIcon,
  point: PointIcon,
  rocket: RocketIcon,
  tv: TvIcon,
});
