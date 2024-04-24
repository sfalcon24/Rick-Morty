import {Image as ImageBase} from 'react-native';
import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';

export const Container = styled.View`
  width: 163px;
  height: 219px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.gray5};
  border-radius: 8px;
  margin-top: 9px;
  margin-left: 15px;
  margin-bottom: 10px;
`;

export const Image = styled(ImageBase)`
  width: 163px;
  height: 140px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const Status = styled(Text).attrs({
  variant: 'caption11',
})`
  margin-top: 10px;
  margin-left: 10px;
  color: ${({theme}) => theme.colors.gray1};
`;

export const Name = styled(Text).attrs({
  variant: 'body17-semibold',
  numberOfLines: 2,
})`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 3px;
`;
