import type {StyleProp, ViewStyle} from 'react-native';

export type Selectors = {
  id: string;
  options: string[];
  onPressLeft: () => void;
  clearSelection?: () => void;
};

export type Props = {
  title?: string;
  selectors?: Selectors[];
  options?: string;
  isLast?: boolean;
  isChecked?: boolean;
  onPressLeft?: (isChecked?: any) => void;
  onCheckboxChange?: (isChecked: boolean) => void;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
