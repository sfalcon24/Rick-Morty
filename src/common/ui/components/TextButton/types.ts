import type {StyleProp, ViewStyle} from 'react-native';
import type {IconName} from '../Icons/types';

export type Props = {
  title: string;
  leftIcon?: IconName;
  loading?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
