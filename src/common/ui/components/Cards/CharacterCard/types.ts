import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  id: string;
  status: 'Alive' | 'Dead' | 'unknown';
  name: string;
  image?: any;
  onPress?: (id: string) => void;
  style?: StyleProp<ViewStyle>;
};
