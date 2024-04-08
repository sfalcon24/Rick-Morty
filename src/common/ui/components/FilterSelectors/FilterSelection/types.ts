import type {StyleProp, ViewStyle} from 'react-native';

export type Selectors = {
  id: string | number;
  options: string;
  onPressLeft?: () => void;
};

export type Props = {
  title?: string;
  selector?: Selectors[];
  style?: StyleProp<ViewStyle>;
};
