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
    marginTop: 90,
    paddingBottom: 120,
  },
})`` as unknown as ListType;
