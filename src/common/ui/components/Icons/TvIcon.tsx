import type {FC} from 'react';
import React from 'react';
import {memo} from 'react';
import {colors} from 'common/ui/theme/colors';
import Svg, {Path} from 'react-native-svg';
import type {IconProps} from './types';

const TvIcon: FC<IconProps> = ({size = 28, color = colors.gray1}) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <Path
      d="M22 9.00003H6C4.89543 9.00003 4 9.89546 4 11V22C4 23.1046 4.89543 24 6 24H22C23.1045 24 24 23.1046 24 22V11C24 9.89546 23.1045 9.00003 22 9.00003Z"
      fill={color}
    />
    <Path
      d="M19.0001 4L14.0001 8.99999L9.00012 4"
      stroke={color}
      stroke-width="1.7143"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default memo(TvIcon);
