import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';

export const MainContainer = styled.View`
  /* flex: 6; */
  /* flex-direction: column; */
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const SelectorsContainer = styled.View``;

export const Title = styled(Text).attrs({
  variant: 'body15-semibold',
})`
  color: ${({theme}) => theme.colors.gray1};
  margin-left: 15px;
  margin-bottom: 10px;
`;
