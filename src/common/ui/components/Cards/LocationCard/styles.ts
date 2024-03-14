import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';

export const Container = styled.View`
  width: 163px;
  height: 80px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.gray5};
  border-radius: 8px;
  margin-top: 9px;
  margin-left: 9px;
  padding: 10px;
`;

export const Status = styled(Text).attrs({
  variant: 'caption11',
})`
  color: ${({theme}) => theme.colors.gray1};
`;

export const Name = styled(Text).attrs({
  variant: 'body17-semibold',
  numberOfLines: 2,
})`
  margin-top: 3px;
`;
