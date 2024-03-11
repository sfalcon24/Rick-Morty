import {colors} from 'common/ui/theme/colors';
import type {ButtonVariant} from './types';

export const backgroundColor: Record<ButtonVariant, string> = {
  primary: colors.indigo,
  secondary: colors.destructive,
};

export const textColor: Record<ButtonVariant, string> = {
  primary: colors.white,
  secondary: colors.black,
};
