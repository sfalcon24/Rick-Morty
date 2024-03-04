import type {FC} from 'react';
import React from 'react';
import {memo} from 'react';
import {Container, ImageCard, TextName, TextStatus} from './styles';
import type {Props} from './types';

const CharacterCard: FC<Props> = ({status, name}) => (
  <Container>
    <ImageCard />
    <TextStatus>{status}</TextStatus>
    <TextName>{name}</TextName>
  </Container>
);

export default memo(CharacterCard);
