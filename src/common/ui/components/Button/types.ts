import type {StyleProp, ViewStyle} from 'react-native';
import type {RectButtonProps} from 'react-native-gesture-handler';

export type Variant = 'large' | 'large-dark' | 'small' | 'simple';

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

export type PressableProps = {
  variant: Variant;
} & RectButtonProps;
