import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';
import {BorderlessButton} from 'react-native-gesture-handler';
import {getTextStyle} from '../Text/styles';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 42px;
  height: 22px;
`;

export const Pressable = styled(BorderlessButton)`
  align-items: center;
  border-radius: 16px;
  height: 22px;
  justify-content: center;
`;

export const LeftAction = styled.View`
  align-items: flex-start;
  margin-right: 5px;
  margin-left: 5px;
`;

export const Title = styled(Text)`
  color: ${({theme}) => theme.colors.indigo};
  ${getTextStyle('body17-semibold')};
`;
