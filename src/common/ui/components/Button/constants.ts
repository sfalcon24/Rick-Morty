import {colors} from 'common/ui/theme/colors';
import type {Variant} from './types';

export const BACKGROUND_COLOR: Record<Variant, string> = {
  'large-dark': colors.black,
  large: colors.adding,
  small: colors.indigo,
};

export const WIDTH: Record<Variant, number> = {
  'large-dark': 323,
  large: 323,
  small: 66,
};

export const HEIGHT: Record<Variant, number> = {
  'large-dark': 50,
  large: 50,
  small: 28,
};

export const TEXT_COLOR: Record<Variant, string> = {
  'large-dark': colors.adding,
  large: colors.black,
  small: colors.white,
};
