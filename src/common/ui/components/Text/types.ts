import type {ReactNode} from 'react';
import type {TextProps} from 'react-native';

export type Fonts = 'CabinetGrotesk-Medium' | 'Inter-Medium';

export type Variant =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline3-regular'
  | 'body20-bold'
  | 'body20-regular'
  | 'body17-semibold'
  | 'body17-regular'
  | 'body15-semibold'
  | 'large-title'
  | 'caption13'
  | 'caption11'
  | 'tagline15-tag'
  | 'tagline13-tag'
  | 'tagline11-tag';

export type Props = {
  family?: Fonts;
  children?: ReactNode;
  variant?: Variant;
} & TextProps;

export type FontDescriptor = {
  variants: Variant[];
  family: Fonts;
};
