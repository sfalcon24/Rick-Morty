import type {StyleProp, ViewStyle} from 'react-native';
import type {UseFormSetValue} from 'react-hook-form';

export type Props = {
  isChecked: boolean;
  value?: boolean;
  setValue?: UseFormSetValue<any>;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};
