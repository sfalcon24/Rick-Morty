import styled, {css} from 'styled-components/native';
import Text from 'common/ui/components/Text';
import theme from 'common/ui/theme';
import {RectButton} from 'react-native-gesture-handler';
import {getTextStyle} from '../Text/styles';
import type {ContainerProps, TitleProps} from './types';

export const Container = styled.View<ContainerProps>`
  background-color: ${({theme: {colors}, variant}) => {
    if (variant === 'large-dark') {
      return colors.black;
    } else if (variant === 'large') {
      return colors.adding;
    } else {
      return colors.indigo;
    }
  }};
  border-width: ${({variant}) => (variant === 'large-dark' ? '2px' : '0px')};
  border-color: ${({theme: {colors}, variant}) => {
    if (variant === 'large-dark') {
      return colors.adding;
    }
  }};
  width: ${({variant}) =>
    variant === 'large-dark' || variant === 'large'
      ? '323px'
      : variant === 'small'
      ? '66px'
      : '42px'};
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
  gap: ${({variant}) => (variant === 'small' ? '10px' : '0px')};
  padding: ${({variant}) => (variant === 'small' ? '0px 12px' : '0px')};
  border-radius: 16px;
`;

export const Pressable = styled(RectButton)`
  align-items: center;
  border-radius: 16px;
  height: 48px;
  justify-content: center;
`;

export const Title = styled(Text)<TitleProps>`
  ${({buttonVariant}) => {
    if (buttonVariant === 'large-dark') {
      return css`
        ${getTextStyle('body17-semibold')};
        color: ${theme.colors.adding};
      `;
    } else if (buttonVariant === 'large') {
      return css`
        ${getTextStyle('body17-semibold')};
      `;
    } else {
      return css`
        ${getTextStyle('tagline13-tag')};
        color: ${theme.colors.white};
      `;
    }
  }};
`;
