import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';

export const Container = styled.View`
  margin-top: 20px;
`;

export const MainTitle = styled(Text).attrs({
  variant: 'body20-bold',
})`
  color: ${({theme}) => theme.colors.gray1};
  margin-left: 18px;
  margin-bottom: 10px;
`;

export const Main = styled.View`
  padding-top: 5px;
  padding-bottom: 10px;
`;
