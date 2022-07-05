import type {FC} from 'react';
import {Container, Text} from './styles';
import type {Props} from './types';

export const BlankTab: FC<Props> = () => (
  <Container>
    <Text>Hi!</Text>
  </Container>
);
