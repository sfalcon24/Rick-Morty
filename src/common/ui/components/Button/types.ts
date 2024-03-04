import type {StyleProp, ViewStyle} from 'react-native';

export type Variant = 'large' | 'large-dark' | 'small';

export type Props = {
  loading?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  title?: string;
  variant?: Variant;
};

export type ContainerProps = {
  variant: Variant;
};

export type TitleProps = {
  buttonVariant: Variant;
};
