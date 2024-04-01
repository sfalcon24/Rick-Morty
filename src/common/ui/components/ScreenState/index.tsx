import type {FC} from 'react';
import {memo} from 'react';
import Icons from '../Icons';
import {Button, Circle, Container, Description, Title} from './styles';
import type {Props} from './types';

const ScreenState: FC<Props> = ({
  buttonText,
  description,
  icon,
  onPress,
  onPressAsync,
  title,
  style,
}) => (
  <Container style={style}>
    <Circle>
      <Icons name={icon} />
    </Circle>
    {title && <Title>{title}</Title>}
    <Description>{description}</Description>
    {buttonText && (onPress || onPressAsync) && (
      <Button
        title={buttonText}
        onPress={onPress}
        onPressAsync={onPressAsync}
      />
    )}
  </Container>
);

export default memo(ScreenState);
