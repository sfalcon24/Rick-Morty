import type {FC} from 'react';
import {memo} from 'react';
import React from 'react';
import {Container, Pressable, Title, Icon} from './styles';
import type {Props} from './types';

const Button: FC<Props> = ({
  loading,
  onPress,
  style,
  title,
  leftIcon,
  rightIcon,
}) => (
  <Container style={style}>
    <Pressable enabled={!loading && !!onPress} onPress={onPress}>
      {leftIcon && <Icon name={leftIcon} />}
      {rightIcon && <Icon name={rightIcon} />}
      <Title>{title}</Title>
    </Pressable>
  </Container>
);

export default memo(Button);
