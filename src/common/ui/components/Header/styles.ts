import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';
import type {ActionProps, ContainerProps, TitleProps} from './types';

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  width: 100%;
  height: ${({variantContainer}) =>
    variantContainer === 'default' ? 44 : 96}px;
  align-items: ${({variantContainer}) =>
    variantContainer === 'default' ? 'center' : 'flex-end'};
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.gray6};
  padding-right: 15px;
`;

export const Title = styled(Text).attrs<TitleProps>(({textVariant}) => ({
  variant: textVariant === 'default' ? 'body15-semibold' : 'large-title',
}))<TitleProps>`
  flex: 2;
  align-items: center;
  text-align: ${({textVariant}) =>
    textVariant === 'default' ? 'center' : 'left'};
  margin-bottom: ${({textVariant}) => (textVariant === 'default' ? 0 : 10)}px;
`;

export const LeftAction = styled.View<ActionProps>`
  align-items: flex-start;
  flex: ${({actionVariant}) => (actionVariant === 'default' ? 1 : 0)};
  margin-left: 15px;
`;

export const RightAction = styled.View<ActionProps>`
  align-items: flex-end;
  flex: 1;
  margin-bottom: ${({actionVariant}) =>
    actionVariant === 'default' ? 0 : 60}px;
`;
