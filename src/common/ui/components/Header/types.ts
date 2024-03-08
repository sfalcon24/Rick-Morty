import type {StyleProp, ViewStyle} from 'react-native';
import type {Variant} from '../Button/types';
import type {IconName} from '../Icons/types';

export type Props = {
  title?: string;
  sizeIcon?: number;
  leftIcon?: IconName;
  rightIcon?: IconName;
  rightButton?: Variant;
  leftButton?: Variant;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  rightComponent?: () => JSX.Element;
  variant?: VariantHeader;
  style?: StyleProp<ViewStyle>;
};

export type VariantHeader = 'default' | 'large';

export type ContainerProps = {
  variantContainer: VariantHeader;
};

export type TitleProps = {
  textVariant: VariantHeader;
};

export type ActionProps = {
  actionVariant: VariantHeader;
};
