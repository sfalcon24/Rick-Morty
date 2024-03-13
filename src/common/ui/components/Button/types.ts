import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  title: string;
  loading?: boolean;
  testID?: string;
  variant?: Variant;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export type Variant = 'large' | 'large-dark' | 'small';

export type ContainerProps = {
  variant: Variant;
};

export type PressablePrps = {
  variant: Variant;
};

export type TitleProps = {
  buttonVariant: Variant;
};
