import styled, {css} from 'styled-components/native';
import Text from '../Text';
import {getTextStyle} from '../Text/styles';
import type {ActionProps, ContainerProps, TitleProps} from './types';

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  width: 100%;
  ${({variantContainer}) => {
    if (variantContainer === 'default') {
      return css`
        height: 44px;
        align-items: center;
      `;
    } else {
      return css`
        height: 96px;
        align-items: flex-end;
      `;
    }
  }};
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.gray6};
  padding-right: 15px;
  padding-left: 10px;
`;

export const Title = styled(Text)<TitleProps>`
  flex: 1;
  align-items: center;
  ${({textVariant}) => {
    if (textVariant === 'default') {
      return css`
        ${getTextStyle('body15-semibold')};
        text-align: center;
      `;
    } else {
      return css`
        ${getTextStyle('large-title')};
        margin-left: 5px;
        margin-bottom: 10px;
      `;
    }
  }};
`;

export const LeftAction = styled.View<ActionProps>`
  align-items: flex-start;
  flex: ${({actionVariant}) => (actionVariant === 'large' ? 1 : 0)};
`;

export const RightAction = styled.View<ContainerProps>`
  align-items: flex-end;
  flex: ${({variantContainer}) => (variantContainer === 'large' ? 1 : 0)};
  ${({variantContainer}) =>
    variantContainer === 'large' &&
    css`
      margin-bottom: 50px;
    `}
`;
