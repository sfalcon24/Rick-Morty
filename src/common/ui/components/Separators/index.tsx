import type {FC} from 'react';
import {memo} from 'react';
import {Container} from './styles';
import type {Props} from './types';

const Separator: FC<Props> = ({width, style}) => (
  <Container width={width} style={style} />
);

export default memo(Separator);
