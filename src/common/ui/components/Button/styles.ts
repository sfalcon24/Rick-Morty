import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';
import {RectButton} from 'react-native-gesture-handler';
import {
  BACKGROUND_COLOR,
  HEIGHT,
  HEIGHT_PRESSABLE,
  TEXT_COLOR,
  WIDTH,
} from './constants';
import type {ContainerProps, TitleProps, PressablePrps} from './types';

export const Container = styled.View<ContainerProps>`
  background-color: ${({variant}) => BACKGROUND_COLOR[variant]};
  border-width: ${({variant}) => (variant === 'large-dark' ? 2 : 0)}px;
  border-color: ${({theme}) => theme.colors.adding};
  width: ${({variant}) => WIDTH[variant]}px;
  height: ${({variant}) => HEIGHT[variant]}px;
  border-radius: 16px;
`;

export const Pressable = styled(RectButton)<PressablePrps>`
  align-items: center;
  border-radius: 16px;
  height: ${({variant}) => HEIGHT_PRESSABLE[variant]}px;
  justify-content: center;
`;

export const Title = styled(Text).attrs<TitleProps>(({buttonVariant}) => ({
  variant: buttonVariant === 'small' ? 'tagline13-tag' : 'body17-semibold',
}))<TitleProps>`
  color: ${({buttonVariant}) => TEXT_COLOR[buttonVariant]};
`;
