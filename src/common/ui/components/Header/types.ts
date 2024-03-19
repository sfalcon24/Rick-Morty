import type {StyleProp, ViewStyle} from 'react-native';
// import type {Variant} from '../Button/types';
// import type {IconName} from '../Icons/types';
// import type {TextButtonVariant} from '../TextButton/types';

export type Props = {
  title?: string;
  sizeIcon?: number;
  leftIcon?: boolean;
  leftTextButton?: string;
  titleLeftButton?: string;
  rightIcon?: boolean;
  rightTextButton?: string;
  titleRightButton?: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
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

export type LeftActionProps = {
  leftActionVariant: VariantHeader;
};
