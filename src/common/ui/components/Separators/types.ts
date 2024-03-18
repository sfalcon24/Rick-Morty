import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  width?: number;
  variant?: Variant;
  style?: StyleProp<ViewStyle>;
};

export type Variant = 'large' | 'medium' | 'small';

export type ContainerProps = {
  variant: Variant;
};
