import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  title?: string;
  subtitle?: string;
  value?: boolean;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  setValue?: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
};
