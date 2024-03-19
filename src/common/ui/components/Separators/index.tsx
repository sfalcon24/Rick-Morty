import type {FC} from 'react';
import {memo} from 'react';
import {Container} from './styles';
import type {Props} from './types';

const Separator: FC<Props> = ({style}) => <Container style={style} />;

export default memo(Separator);
