import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Icons from '../../Icons';

export const Content = styled(RectButton).attrs(() => ({
  activeOpacity: 0.4,
}))`
  align-items: center;
  width: 60px;
  aspect-ratio: 1;
  border-radius: 30px;
  justify-content: center;
  position: absolute;
  background-color: ${({theme}) => theme.colors.indigo};
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  overflow: visible;
  transform: translateY(-40px);
`;

export const Icon = styled(Icons).attrs({
  name: 'plus',
})``;
