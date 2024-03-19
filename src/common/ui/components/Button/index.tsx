import type {FC} from 'react';
import {memo} from 'react';
import React from 'react';
import {Container, Pressable, Title} from './styles';
import type {Props} from './types';

const Button: FC<Props> = ({
  loading,
  onPress,
  style,
  title,
  variant = 'large',
}) => (
  <Container style={style} variant={variant}>
    <Pressable
      variant={variant}
      enabled={!loading && !!onPress}
      onPress={onPress}>
      <Title buttonVariant={variant}>{title}</Title>
    </Pressable>
  </Container>
);

export default memo(Button);
