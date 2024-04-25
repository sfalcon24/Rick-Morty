import type {FC} from 'react';
import {memo} from 'react';
import {colors} from 'common/ui/theme/colors';
import Svg, {Path} from 'react-native-svg';
import type {IconProps} from './types';

const RadioButtonFillIcon: FC<IconProps> = ({
  size = 24,
  color = colors.indigo,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12Zm-1 0C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z"
      clipRule="evenodd"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default memo(RadioButtonFillIcon);
