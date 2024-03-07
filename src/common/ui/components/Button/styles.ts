import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';
import {RectButton} from 'react-native-gesture-handler';
import {BACKGROUND_COLOR, TEXT_COLOR, WIDTH} from './constants';
import type {ContainerProps, TitleProps} from './types';

export const Container = styled.View<ContainerProps>`
  background-color: ${({variant}) => BACKGROUND_COLOR[variant]};
  border-width: ${({variant}) => (variant === 'large-dark' ? 2 : 0)}px;
  border-color: ${({theme}) => theme.colors.adding};
  width: ${({variant}) => WIDTH[variant]}px;
  height: ${({variant}) =>
    variant === 'large-dark' || variant === 'large'
      ? '50px'
      : variant === 'small'
      ? '28px'
      : '42px'};
  left: ${({variant}) =>
    variant === 'large-dark' || variant === 'large'
      ? '26px'
      : variant === 'small'
      ? '107px'
      : '0px'};
  top: ${({variant}) =>
    variant === 'large-dark' || variant === 'large'
      ? '100px'
      : variant === 'small'
      ? '8px'
      : '0px'};
  gap: ${({variant}) => (variant === 'small' ? 10 : 0)}px;
  padding: ${({variant}) => (variant === 'small' ? '0px 12px' : '0px')};
  border-radius: 16px;
`;

export const Pressable = styled(RectButton)`
  align-items: center;
  border-radius: 16px;
  height: 48px;
  justify-content: center;
`;

export const Title = styled(Text).attrs<TitleProps>(({buttonVariant}) => ({
  variant: buttonVariant === 'small' ? 'tagline13-tag' : 'body17-semibold',
}))<TitleProps>`
  color: ${({buttonVariant}) => TEXT_COLOR[buttonVariant]};
`;
