import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';
import theme from 'common/ui/theme';

export const Container = styled.View`
  width: 163px;
  height: 80px;
  border-width: 1px;
  border-color: ${theme.colors.gray5};
  border-radius: 8px;
  margin-top: 9px;
  margin-left: 9px;
`;

export const Status = styled(Text).attrs({
  variant: 'caption11',
})`
  margin-top: 10px;
  margin-left: 10px;
  color: ${theme.colors.gray1};
`;

export const Name = styled(Text).attrs({
  variant: 'body17-semibold',
})`
  margin-left: 10px;
  margin-top: 3px;
`;
