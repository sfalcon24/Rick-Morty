import type {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  id: string;
  status: 'Alive' | 'Dead' | 'unknown';
  name: string;
  image?: string;
  onPress?: (id: string) => void;
  style?: StyleProp<ViewStyle>;
};
