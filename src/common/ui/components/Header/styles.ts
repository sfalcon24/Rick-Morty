import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';
import {
  ALIGN,
  FLEX,
  HEIGHT,
  MARGIN_BOTTOM,
  MARGIN_BOTTOM_RIGHT_ACTION,
  TEXT_ALIGN,
} from './constants';
import type {ActionProps, ContainerProps, TitleProps} from './types';

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  width: 100%;
  height: ${({variantContainer}) => HEIGHT[variantContainer]}px;
  align-items: ${({variantContainer}) => ALIGN[variantContainer]};
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.gray6};
  padding-right: 15px;
`;

export const Title = styled(Text).attrs<TitleProps>(({textVariant}) => ({
  variant: textVariant === 'default' ? 'body15-semibold' : 'large-title',
}))<TitleProps>`
  flex: 2;
  align-items: center;
  text-align: ${({textVariant}) => TEXT_ALIGN[textVariant]};
  margin-bottom: ${({textVariant}) => MARGIN_BOTTOM[textVariant]}px;
`;

export const LeftAction = styled.View<ActionProps>`
  align-items: flex-start;
  flex: ${({actionVariant}) => FLEX[actionVariant]};
  margin-left: 15px;
`;

export const RightAction = styled.View<ActionProps>`
  align-items: flex-end;
  flex: 1;
  margin-bottom: ${({actionVariant}) =>
    MARGIN_BOTTOM_RIGHT_ACTION[actionVariant]}px;
`;
