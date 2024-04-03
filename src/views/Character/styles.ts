import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import type {ListType} from './types';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  flex: 1;
`;

export const List = styled(FlatList).attrs({
  contentContainerStyle: {
    alignItems: 'flex-start',
    marginTop: 150,
    paddingBottom: 270,
  },
})`` as unknown as ListType;
