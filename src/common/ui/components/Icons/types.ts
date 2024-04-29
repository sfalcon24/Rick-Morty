import type {StyleProp, ViewStyle} from 'react-native';
import type {icons} from './icons';

export type IconName = keyof typeof icons;

export type Props = IconProps & {
  name: IconName;
};

export type IconProps = {
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
