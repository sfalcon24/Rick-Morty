import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';
import Separators from '../../Separators';

export const MainContainer = styled.View`
  flex-direction: column;
`;

export const SelectorsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 44px;
  align-items: flex-start;
  padding-right: 18px;
  padding-left: 18px;
  align-items: center;
`;

export const Title = styled(Text).attrs({
  variant: 'body15-semibold',
})`
  color: ${({theme}) => theme.colors.gray1};
  margin-left: 15px;
  margin-bottom: 10px;
`;

export const Options = styled(Text).attrs({
  variant: 'body17',
})`
  margin-left: 15px;
`;

export const Separator = styled(Separators)`
  width: 330px;
  align-self: flex-end;
`;

export const SeparatorInitial = styled(Separators)`
  align-self: flex-end;
`;

export const LeftAction = styled.View`
  align-items: flex-start;
  margin-left: 5px;
`;
