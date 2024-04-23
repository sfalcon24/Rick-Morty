import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  title?: string;
  subtitle?: string;
  isChecked?: boolean;
  onPressLeft?: (isChecked?: any) => void;
  onPressRight?: () => void;
  onCheckboxChange?: (isChecked: boolean) => void;
  style?: StyleProp<ViewStyle>;
};
