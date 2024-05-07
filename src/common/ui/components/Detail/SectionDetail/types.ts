import type {StyleProp, ViewStyle} from 'react-native';

export type Option = {
  title: string;
  subtitle: string;
  date?: string;
};

export type Props = {
  title: string;
  options: Option[];
  onPress?: (id: string) => void;
  style?: StyleProp<ViewStyle>;
};
