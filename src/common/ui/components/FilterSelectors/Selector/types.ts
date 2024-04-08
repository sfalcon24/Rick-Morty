import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  options?: string;
  value?: boolean;
  isLast?: boolean;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  setValue?: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
};
