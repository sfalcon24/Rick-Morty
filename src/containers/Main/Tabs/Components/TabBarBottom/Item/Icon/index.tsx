import type {FC} from 'react';
import {memo} from 'react';
import {Icons} from 'components';
import {colors} from 'theme/colors';
import {iconName} from './constants';
import type {Props} from './types';

const Icon: FC<Props> = ({icon, focused}) => {
  const color = focused ? colors.red : colors.white;
  return <Icons name={iconName[icon]} color={color} />;
};
export default memo(Icon);
