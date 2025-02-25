import type {StyleProp, ViewStyle} from 'react-native';
import type {CharacterFiltersId} from 'features/characters/filters';

export type Props = {
  id: CharacterFiltersId;
  title: string;
  value?: string;
  isChecked?: boolean;
  onPress: (id: string) => void;
  style?: StyleProp<ViewStyle>;
};
