import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  name: string;
  value: string;
  isSelected: boolean;
  onPress: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};
