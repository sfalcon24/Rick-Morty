import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  title?: string;
  backgroundColor?: string;
  leftIcon?: boolean;
  leftTextButton?: string;
  rightIcon?: boolean;
  rightTextButton?: string;
  rightButton?: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  variant?: VariantHeader;
  style?: StyleProp<ViewStyle>;
};

export type VariantHeader = 'default' | 'large';

export type ContainerProps = {
  variantContainer: VariantHeader;
  backgroundColor?: string;
};

export type TitleProps = {
  textVariant: VariantHeader;
};

export type ActionProps = {
  actionVariant: VariantHeader;
};

export type LeftActionProps = {
  leftActionVariant: VariantHeader;
};
