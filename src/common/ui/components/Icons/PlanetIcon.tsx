import type {FC} from 'react';
import React from 'react';
import {memo} from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../theme/colors';
import type {IconProps} from './types';

const PlanetIcon: FC<IconProps> = ({size = 28, color = colors.gray1}) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <Path
      d="M19.5 14.5L21.7019 15.8155C24.768 18.2759 26.4732 20.4508 25.8847 21.469C24.955 23.0758 18.6567 21.1836 11.8172 17.2425C4.97768 13.3014 0.186078 8.80411 1.11523 7.19789C1.69647 6.19373 4.37456 6.55623 7.97139 7.93173C8.81426 8.28781 10.6 9.09998 11 9.49998"
      stroke={color}
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.0037 21.3458C18.6117 20.9545 19.1656 20.4862 19.6515 19.9548C17.437 19.1066 14.9079 17.8945 12.3179 16.402C9.72227 14.9064 7.39881 13.3214 5.55059 11.8258C5.3366 12.5048 5.20721 13.2214 5.1748 13.9632C6.85911 15.2905 8.95613 16.709 11.3169 18.0694C13.6961 19.4404 15.9951 20.5515 18.0037 21.3458ZM15.4497 22.4371C13.8212 21.7067 12.0839 20.8196 10.3184 19.8023C8.57293 18.7965 6.95055 17.7503 5.51301 16.7181C6.53872 20.1583 9.72643 22.6664 13.5 22.6664C14.1714 22.6664 14.8243 22.587 15.4497 22.4371ZM13.3164 14.6692C16.0365 16.2366 18.6517 17.4643 20.8479 18.2673C21.4766 17.0956 21.8332 15.756 21.8332 14.3332C21.8332 9.73091 18.1023 6 13.5 6C10.5073 6 7.88309 7.57753 6.41354 9.94638C8.20793 11.4443 10.5857 13.0957 13.3164 14.6692Z"
      fill={color}
    />
  </Svg>
);
export default memo(PlanetIcon);
