import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';
import {BorderlessButton} from 'react-native-gesture-handler';
import Icons from '../Icons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 22px;
`;

export const Pressable = styled(BorderlessButton)`
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  height: 22px;
`;

export const Icon = styled(Icons)`
  margin-right: 5px;
  margin-left: 5px;
`;

export const Title = styled(Text).attrs({
  variant: 'body17-semibold',
})`
  color: ${({theme}) => theme.colors.indigo};
  margin-left: 5px;
`;
