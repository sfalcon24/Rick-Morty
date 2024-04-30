import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  title: string;
  subtitle: string;
  date?: string;
  isLast?: boolean;
  onPress?: (id: string) => void;
  style?: StyleProp<ViewStyle>;
};

export type SeparatorProps = {
  isItem?: boolean;
  isLast?: boolean;
};
