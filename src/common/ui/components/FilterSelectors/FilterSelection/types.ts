import type {StyleProp, ViewStyle} from 'react-native';

export type Option = {
  name: string;
  value: string;
  isSelected: boolean;
};

export type Props = {
  title: string;
  options: Option[];
  onPress: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};

export type SeparatorProps = {
  isItem?: boolean;
};
