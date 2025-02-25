import type {FC} from 'react';
import React from 'react';
import {memo} from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../theme/colors';
import type {IconProps} from './types';

const ArrowLeftIcon: FC<IconProps> = ({size = 20, color = colors.indigo}) => (
  <Svg width={size} height={size} viewBox="0 0 13 21" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.0371 20.5827L0.792152 11.4458C0.402616 11.0612 0.402616 10.4398 0.792152 10.0542L10.0371 0.917333C10.5995 0.360889 11.5144 0.360889 12.0777 0.917333C12.64 1.47378 12.64 2.37687 12.0777 2.93332L4.16913 10.7505L12.0777 18.5657C12.64 19.1231 12.64 20.0262 12.0777 20.5827C11.5144 21.1391 10.5995 21.1391 10.0371 20.5827Z"
      fill={color}
    />
  </Svg>
);

export default memo(ArrowLeftIcon);
