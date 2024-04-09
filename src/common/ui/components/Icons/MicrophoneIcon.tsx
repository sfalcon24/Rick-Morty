import type {FC} from 'react';
import {memo} from 'react';
import {colors} from 'common/ui/theme/colors';
import {Path, Svg} from 'react-native-svg';
import type {IconProps} from './types';

const MicroponeIcon: FC<IconProps> = ({
  size = 20,
  color = colors.gray2,
  ...props
}) => (
  <Svg width={size} height={size} viewBox="0 0 12 18" {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 0.363647C7.65685 0.363647 9 1.58469 9 3.09092V9.45456C9 10.9608 7.65685 12.1818 6 12.1818C4.34315 12.1818 3 10.9608 3 9.45456V3.09092C3 1.58469 4.34315 0.363647 6 0.363647ZM11.25 6.27274C10.8358 6.27274 10.5 6.578 10.5 6.95456V9.45456C10.5 11.7139 8.48528 13.5455 6 13.5455C3.51472 13.5455 1.5 11.7139 1.5 9.45456V6.95456C1.5 6.578 1.16421 6.27274 0.75 6.27274C0.335786 6.27274 0 6.578 0 6.95456V9.45456C0.00148134 12.2024 2.25111 14.5202 5.25 14.8636V16.2727H3.25C2.83579 16.2727 2.5 16.578 2.5 16.9546C2.5 17.3311 2.83579 17.6364 3.25 17.6364H8.75C9.16421 17.6364 9.5 17.3311 9.5 16.9546C9.5 16.578 9.16421 16.2727 8.75 16.2727H6.75V14.8636C9.74889 14.5202 11.9985 12.2024 12 9.45456V6.95456C12 6.578 11.6642 6.27274 11.25 6.27274Z"
      fill={color}
    />
  </Svg>
);

export default memo(MicroponeIcon);
