import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  title: string;
  value?: string;
  isChecked?: boolean;
  onPress: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};
