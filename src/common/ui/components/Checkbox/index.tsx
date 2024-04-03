import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import type {Props} from './types';

export const Checkbox = ({isChecked, onPress}: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.checkbox, isChecked && styles.checked]}>
      {isChecked && <View style={styles.innerCircle} />}
    </View>
  </TouchableOpacity>
);
