import {StyleSheet} from 'react-native';
import theme from 'common/ui/theme';

export const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: theme.colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    borderColor: theme.colors.indigo,
  },
  innerCircle: {
    width: 14,
    height: 14,
    borderRadius: 12,
    backgroundColor: theme.colors.indigo,
  },
});
