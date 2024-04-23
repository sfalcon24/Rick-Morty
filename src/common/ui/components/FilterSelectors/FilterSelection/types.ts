import type {StyleProp, ViewStyle} from 'react-native';

export type Selectors = {
  id: string | number;
  options: string;
  onPressLeft?: (isChecked?: any) => void;
};

export type Props = {
  title?: string;
  selector?: Selectors[];
  isChecked?: boolean;
  selectedValue?: boolean | string;
  onValueChange?: (value: boolean | string) => void;
  onPressLeft?: (isChecked?: any) => void;
  style?: StyleProp<ViewStyle>;
};
