import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';
import SeparatorBase from '../../Separator';
import type {SeparatorProps} from './types';

export const Main = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 15px;
`;

export const TextContainer = styled.View`
  margin-left: 18px;
`;

export const RightAction = styled.View`
  align-items: flex-end;
`;

export const Title = styled(Text).attrs({
  variant: 'body17-semibold',
})`
  margin-top: 5px;
`;

export const Subtitle = styled(Text).attrs({
  variant: 'body15-semibold',
})`
  color: ${({theme}) => theme.colors.gray1};
`;

export const Date = styled(Text).attrs({
  variant: 'tagline11-tag',
})`
  color: ${({theme}) => theme.colors.gray1};
  margin-top: 10px;
`;

export const Separator = styled(SeparatorBase)<SeparatorProps>`
  margin-left: ${({isItem, isLast}) => (isLast ? 0 : isItem ? 18 : 0)}px;
  margin-top: 10px;
`;
