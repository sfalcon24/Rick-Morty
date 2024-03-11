import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';
import {
  ALIGN,
  HEIGHT,
  MARGIN_BOTTOM,
  MARGIN_BOTTOM_RIGHT_ACTION,
  MARGIN_LEFT,
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
  padding-left: 10px;
`;

export const Title = styled(Text).attrs<TitleProps>(({textVariant}) => ({
  variantContainer:
    textVariant === 'default' ? 'body15-semibold' : 'large-title',
}))<TitleProps>`
  flex: 1;
  align-items: center;
  text-align: ${({textVariant}) => TEXT_ALIGN[textVariant]};
  margin-left: ${({textVariant}) => MARGIN_LEFT[textVariant]}px;
  margin-bottom: ${({textVariant}) => MARGIN_BOTTOM[textVariant]}px;
`;

export const LeftAction = styled.View<ActionProps>`
  align-items: flex-start;
`;

export const RightAction = styled.View<ActionProps>`
  align-items: flex-end;
  margin-bottom: ${({actionVariant}) =>
    MARGIN_BOTTOM_RIGHT_ACTION[actionVariant]}px;
`;
