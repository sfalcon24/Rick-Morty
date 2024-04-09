import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  title?: string;
  subtitle?: string;
  value?: boolean;
  onPressLeft?: (isChecked: any) => void;
  onPressRight?: () => void;
  setValue?: (value: boolean) => void;
  onCheckboxChange: (isChecked: boolean) => void;
  style?: StyleProp<ViewStyle>;
};
