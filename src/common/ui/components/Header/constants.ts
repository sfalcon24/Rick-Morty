import type {VariantHeader} from './types';

export const HEIGHT: Record<VariantHeader, number> = {
  default: 44,
  large: 96,
};

export const ALIGN: Record<VariantHeader, string> = {
  default: 'center',
  large: 'flex-end',
};

export const TEXT_ALIGN: Record<VariantHeader, string> = {
  default: 'center',
  large: 'left',
};

export const MARGIN_LEFT: Record<VariantHeader, number> = {
  default: 0,
  large: 5,
};

export const MARGIN_BOTTOM: Record<VariantHeader, number> = {
  default: 0,
  large: 10,
};

export const MARGIN_BOTTOM_RIGHT_ACTION: Record<VariantHeader, number> = {
  default: 0,
  large: 75,
};
