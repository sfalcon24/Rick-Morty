import type {FC} from 'react';
import {memo} from 'react';
import React from 'react';
import {Container, Pressable, Title} from './styles';
import type {Props} from './types';

const Button: FC<Props> = ({
  loading,
  onPress,
  style,
  testID,
  title,
  variant = 'large',
}) => (
  <Container style={style} variant={variant}>
    <Pressable
      enabled={!loading && !!onPress}
      onPress={onPress}
      testID={testID}>
      <Title buttonVariant={variant}>{title}</Title>
    </Pressable>
  </Container>
);

export default memo(Button);
