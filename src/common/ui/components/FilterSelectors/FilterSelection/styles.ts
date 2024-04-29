import styled from 'styled-components/native';
import SelectorBase from 'common/ui/components/FilterSelectors/Selector';
import Text from 'common/ui/components/Text';
import SeparatorBase from '../../Separator';
import type {SeparatorProps} from './types';

export const Container = styled.View``;

export const Title = styled(Text).attrs({
  variant: 'body15-semibold',
})`
  color: ${({theme}) => theme.colors.gray1};
  margin-left: 15px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Selector = styled(SelectorBase)``;

export const Separator = styled(SeparatorBase)<SeparatorProps>`
  margin-left: ${({isItem}) => (isItem ? 12 : 0)}%;
`;
