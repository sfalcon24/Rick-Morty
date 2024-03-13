import type {FC} from 'react';
import {memo} from 'react';
import React from 'react';
import Icons from '../Icons';
import {Container, LeftAction, Pressable, Title} from './styles';
import type {Props} from './types';

const Button: FC<Props> = ({
  loading,
  onPress,
  style,
  testID,
  title,
  leftIcon,
}) => (
  <Container style={style}>
    <LeftAction>{leftIcon && <Icons name={leftIcon} />}</LeftAction>
    <Pressable
      enabled={!loading && !!onPress}
      onPress={onPress}
      testID={testID}>
      <Title>{title}</Title>
    </Pressable>
  </Container>
);

export default memo(Button);
