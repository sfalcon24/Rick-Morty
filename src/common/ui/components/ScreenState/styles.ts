import styled from 'styled-components/native';
import ButtonBase from 'common/ui/components/Button';
import Text from 'common/ui/components/Text';

export const Container = styled.View`
  align-items: center;
  flex: 1;
`;

export const Circle = styled.View`
  background-color: ${({theme}) => theme.colors.creamLight};
  padding: 16px;
  border-radius: 48px;
  margin-bottom: 12px;
`;

export const Title = styled(Text).attrs({variant: 'title3'})`
  margin: 4px 0 8px;
`;

export const Description = styled(Text).attrs({variant: 'body1-medium'})`
  text-align: center;
`;

export const Button = styled(ButtonBase)`
  margin-top: 16px;
`;
