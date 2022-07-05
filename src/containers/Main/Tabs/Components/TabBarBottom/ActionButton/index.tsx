import type {FC} from 'react';
import {memo} from 'react';
import {Container, Content} from './styles';
import type {Props} from './types';

const TabBarBottomActionButton: FC<Props> = ({onPress}) => (
  <Container>
    <Content onPress={onPress}>{/* TODO: add icon here  */}</Content>
  </Container>
);

export default memo(TabBarBottomActionButton);
