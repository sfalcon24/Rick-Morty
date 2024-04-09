import styled from 'styled-components/native';
import {TextInput} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: row;
  width: 343px;
  height: 36px;
  background-color: ${({theme}) => theme.colors.gray6};
  border-radius: 9px;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const BackgroundText = styled(TextInput).attrs({
  variant: 'body20',
})`
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
  color: ${({theme}) => theme.colors.gray1};
  flex: 2;
`;

export const LeftAction = styled.View`
  margin-left: 10px;
  align-self: center;
`;

export const RightAction = styled.View`
  align-items: flex-end;
  align-self: center;
  flex: 1;
  margin-right: 10px;
`;
