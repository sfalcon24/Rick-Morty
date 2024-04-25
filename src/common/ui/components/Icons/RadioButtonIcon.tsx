import type {FC} from 'react';
import {memo} from 'react';
import {colors} from 'common/ui/theme/colors';
import Svg, {Path} from 'react-native-svg';
import type {IconProps} from './types';

const RadioButtonIcon: FC<IconProps> = ({size = 22, color = colors.gray5}) => (
  <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
    <Path
      fill="#fff"
      stroke={color}
      strokeWidth={1.5}
      d="M21.25 11c0 5.66-4.59 10.25-10.25 10.25S.75 16.66.75 11 5.34.75 11 .75 21.25 5.34 21.25 11Z"
    />
  </Svg>
);

export default memo(RadioButtonIcon);
