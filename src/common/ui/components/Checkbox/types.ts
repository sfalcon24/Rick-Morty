import type {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';
import type {UseFormSetValue} from 'react-hook-form';

export type Props = {
  value: boolean;
  isChecked: boolean;
  setValue: UseFormSetValue<any>;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};
