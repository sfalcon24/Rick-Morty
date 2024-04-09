import type {StyleProp, ViewStyle} from 'react-native';

export type Selectors = {
  id: string | number;
  options: string;
  onPressLeft?: (isChecked: any) => void;
};

export type Props = {
  title?: string;
  selector?: Selectors[];
  onPressLeft?: (isChecked: any) => void;
  anyCheckboxChecked: boolean;
  style?: StyleProp<ViewStyle>;
};
