import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  onPress: (id: string) => void;
  style?: StyleProp<ViewStyle>;
  status?: string;
  name?: string;
  image?: string;
};
