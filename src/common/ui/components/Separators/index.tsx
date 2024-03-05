import type {FC} from 'react';
import {memo} from 'react';
import {Container} from './styles';
import type {Props} from './types';

const Separator: FC<Props> = ({light = false, style}) => (
  <Container light={light} style={style} />
);

export default memo(Separator);
