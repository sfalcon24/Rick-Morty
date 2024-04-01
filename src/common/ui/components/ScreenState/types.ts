import type {StyleProp, ViewStyle} from 'react-native';
import type {IconName} from '../Icon/types';

export type Props = {
  description: string;
  icon: IconName;
  buttonText?: string;
  onPress?: () => void;
  onPressAsync?: () => Promise<void>;
  title?: string;
  style?: StyleProp<ViewStyle>;
};
