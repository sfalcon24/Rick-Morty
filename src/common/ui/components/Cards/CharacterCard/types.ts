import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  onPress?: (id: string) => void;
  status?: string;
  name?: string;
  image?: string;
  style?: StyleProp<ViewStyle>;
};
