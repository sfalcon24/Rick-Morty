import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';

export const MainContainer = styled.View`
  flex: 6;
  flex-direction: column;
`;

export const SelectorsContainer = styled.View``;

export const Title = styled(Text).attrs({
  variant: 'body15-semibold',
})`
  color: ${({theme}) => theme.colors.gray1};
  margin-left: 15px;
  margin-bottom: 10px;
`;
