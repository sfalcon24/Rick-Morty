import type {FC} from 'react';
import {memo} from 'react';
import {colors} from 'common/ui/theme/colors';
import Svg, {Path} from 'react-native-svg';
import type {IconProps} from './types';

const PointIcon: FC<IconProps> = ({size = 14, color = colors.indigo}) => (
  <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 12.7222C10.3137 12.7222 13 10.0359 13 6.72223C13 3.40852 10.3137 0.722229 7 0.722229C3.68629 0.722229 1 3.40852 1 6.72223C1 10.0359 3.68629 12.7222 7 12.7222Z"
      fill={color}
    />
  </Svg>
);

export default memo(PointIcon);
