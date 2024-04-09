import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  options?: string;
  value?: boolean;
  isLast?: boolean;
  onPressLeft?: (isChecked: any) => void;
  onPressRight?: () => void;
  setValue?: (value: boolean) => void;
  onCheckboxChange: (isChecked: boolean) => void;
  anyCheckboxChecked: boolean;
  style?: StyleProp<ViewStyle>;
};
