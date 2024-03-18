import type {FC} from 'react';
import {memo} from 'react';
import {Container} from './styles';
import type {Props} from './types';

const Separator: FC<Props> = ({variant = 'large', style}) => (
  <Container variant={variant} style={style} />
);

export default memo(Separator);
