import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  value: string;
  title?: string;
  subtitle?: string;
  isChecked?: boolean;
  onPress: (value: string) => void;
  onPressRight?: () => void;
  onCheckboxChange?: (isChecked: boolean) => void;
  style?: StyleProp<ViewStyle>;
};
